const fs = require("fs");

const Ziro = require("./codes.json");

const header = `/**
 *      **************************************************
 *      **************************************************
 *      **** CÓDIGO GERADO AUTOMATICAMENTE, NÃO EDITE ****
 *      **************************************************
 *      **************************************************
 */
export * from "./src"
import { ZiroPromptFullData, ZiroWaitingFullData } from "./src"

type HTTPInfoStatus         = 100|101|102|103
type HTTPSuccessStatus      = 200|201|202|203|204|205|206|207|208|226
type HTTPRedirectStatus     = 300|301|302|303|304|305|306|307|308
type HTTPClientErrorStatus  = 400|401|402|403|404|405|406|407|408|409|410|411|412|413|414|415|416|417|418|421|422|423|424|425|426|428|429|431|451
type HTTPServerErrorStatus  = 500|501|502|503|504|505|506|507|508|510|511

type HTTPErrorStatus = HTTPClientErrorStatus|HTTPServerErrorStatus\n`;

const fourDigits = (str) => {
	if (str.length === 0) return "0000";
	if (str.length === 1) return `000${str}`;
	if (str.length === 2) return `00${str}`;
	if (str.length === 3) return `0${str}`;
	return str;
};

const taken = [];

const codes = [];

const prepareAdditionalData = (addtionalData) => {
	const strs = addtionalData.map(([name, type]) => {
		const generic =
			name.slice(0, 1).toUpperCase() + name.replace(/_[a-z]/g, (c) => c.replace("_", "").toUpperCase()).slice(1);
		return [`${name}: ${generic}`, `${generic} extends ${type}`];
	});
	const [names, types] = strs.reduce(
		(acc, cur) => [
			[...acc[0], cur[0]],
			[...acc[1], cur[1]],
		],
		[[], []],
	);
	const totalName = `,{ ${names.join(", ")} }`;
	const totalType = `, ${types.join(", ")}`;
	return [totalName, totalType];
};

function write(obj = { Ziro }) {
	return Object.keys(obj)
		.map((key) => {
			if (Array.isArray(obj[key])) {
				const [lowerBound, upperBound, addtionalData] = obj[key];
				const addData = Array.isArray(addtionalData) ? prepareAdditionalData(addtionalData) : ["", ""];
				const array = Array.from(Array(upperBound - lowerBound + 1).keys())
					.map((n) => {
						// eslint-disable-next-line @typescript-eslint/no-throw-literal
						if (taken[n + lowerBound]) throw `CODE COLLISION, PLEASE VERIFY CODES FOR ${key}`;
						codes.push(n + lowerBound);
						taken[n + lowerBound] = true;
						return `"${fourDigits(`${n + lowerBound}`)}"`;
					})
					.join("|");
				return `\nexport type ${key}Codes=${array}\nexport type ${key}Data<C extends ${key}Codes${
					addData[1]
				}> = ${key.includes("Waiting") ? "ZiroWaitingFullData" : "ZiroPromptFullData"}<C${addData[0]}>`;
			}
			return `/**\n * ${key.toUpperCase()}\n */\nexport type ${key}Codes=${Object.keys(obj[key])
				.map((k) => `${k}Codes`)
				.join("|")}\n${write(obj[key])}`;
		})
		.join("\n");
}

const str = header + write();

fs.writeFileSync(`${__dirname}/codes.ts`, str);

const takenFile = `export default ${JSON.stringify(codes)}`;

fs.writeFileSync(`${__dirname}/takenCodes.ts`, takenFile);
