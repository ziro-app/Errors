import { packument } from "pacote";
import packageJson from "../package.json";

export * from "./ZiroMessage";
export * from "./ZiroPromptMessage";
export * from "./ZiroWaitingMessage";

packument("ziro-messages").then((data) => {
	const current = packageJson.version;
	const { latest } = data["dist-tags"];
	// eslint-disable-next-line no-console
	if (current !== latest) console.error("YOU ARE RUNNING AN OUTDATED VERSION OF ZIRO-MESSAGES, PLEASE UPDATE");
});
