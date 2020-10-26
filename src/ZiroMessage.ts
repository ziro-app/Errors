import takenCodes from "../takenCodes";

export type Illustration =
	| "paymentSuccess"
	| "paymentError"
	| "errorLoading"
	| "notFound"
	| "timelineStart"
	| "cnhPhoto"
	| "buy"
	| "registerSuccess"
	| "withoutFavorites"
	| "withoutCartItem"
	| "waiting"
	| "noData"
	| "creditCard"
	| "chatting"
	| "onlinePosts"
	| "selfieOne"
	| "selfieTwo";

type GenericData = {
	[key: string]: any;
};

export interface ZiroData<C, D extends GenericData> {
	code: C;
	type: "neutral" | "destructive" | "success";
	title: string;
	illustration: Illustration;
	userDescription: string;
	internalDescription: string;
	additionalData: D;
}

export type ZiroProps<C, N, D> = ZiroData<C, D> & { name: N };

export abstract class ZiroMessage<C, N, D> implements ZiroProps<C, N, D> {
	readonly name: N;

	readonly type: "neutral" | "destructive" | "success";

	readonly code: C;

	readonly title: string;

	readonly illustration: Illustration;

	readonly userDescription: string;

	readonly internalDescription: string;

	readonly additionalData: D;

	constructor(props: ZiroProps<C, N, D>) {
		const codeNumber = Number(props.code);
		if (Number.isNaN(codeNumber)) throw new Error(`INVALID CODE NUMBER ${props.code}`);
		if (!(props as any).isDefaultMessage && takenCodes.includes(codeNumber))
			throw new Error(`CODE ${props.code} ALREADY IN USE`);
		this.name = props.name;
		this.type = props.type;
		this.code = props.code;
		this.title = props.title;
		this.illustration = props.illustration;
		this.userDescription = props.userDescription;
		this.internalDescription = props.internalDescription;
		this.additionalData = props.additionalData || ({} as D);
	}

	getData(): ZiroProps<C, N, D> {
		return {
			name: this.name,
			type: this.type,
			code: this.code,
			title: this.title,
			illustration: this.illustration,
			userDescription: this.userDescription,
			internalDescription: this.internalDescription,
			additionalData: this.additionalData,
		};
	}
}
