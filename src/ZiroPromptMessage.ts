import { ZiroMessage, ZiroProps, ZiroData } from "./ZiroMessage";

export type Button = {
	title: string;
	action: () => any;
};

interface ZiroPromptData {
	userResolution: string | Object;
	internalDescription: string;
}

type Buttons = {
	firstButton?: Button;
	secondButton?: Button;
	genericButton?: Button;
	supportButton?: boolean | Button;
};

export type ZiroPromptFullData<C, D = undefined> = ZiroData<C, D> & ZiroPromptData;

type ZiroPromptProps<C, N, D> = ZiroProps<C, N, D> & ZiroPromptData & Buttons;

export class ZiroPromptMessage<C, N, D = undefined> extends ZiroMessage<C, N, D> implements ZiroPromptProps<C, N, D> {
	private readonly $$promptMessage = true;

	readonly userResolution: string | Object;

	readonly firstButton?: Button;

	readonly secondButton?: Button;

	readonly genericButton?: Button;

	readonly supportButton?: boolean | Button;

	constructor(props: ZiroPromptProps<C, N, D>) {
		super(props);
		this.userResolution = props.userResolution;
		this.firstButton = props.firstButton;
		this.secondButton = props.secondButton;
		this.genericButton = props.genericButton;
		this.supportButton = props.supportButton;
		this.withButtons = this.withButtons.bind(this);
		this.withSupportButton = this.withSupportButton.bind(this);
		this.withGenericButton = this.withGenericButton.bind(this)
		this.set = this.set.bind(this);
	}

	withButtons(buttons: [Button] | [Button, Button] ) {
		return new ZiroPromptMessage<C, N, D>({
			...this.getData(),
			isDefaultMessage: true,
			firstButton: buttons[0],
			secondButton: buttons[1],
			genericButton: this.genericButton,
			supportButton: this.supportButton,
		} as any);
	}

	withGenericButton(button?: Button) {
		return new ZiroPromptMessage<C, N, D>({
			...this.getData(),
			isDefaultMessage: true,
			firstButton: this.firstButton,
			secondButton: this.secondButton,
			genericButton: button,
			supportButton: this.supportButton,
		} as any);
	}

	withSupportButton(button?: Button) {
		return new ZiroPromptMessage<C, N, D>({
			...this.getData(),
			isDefaultMessage: true,
			firstButton: this.firstButton,
			secondButton: this.secondButton,
			genericButton: this.genericButton,
			supportButton: button || true,
		} as any);
	}

	set<K extends keyof ZiroPromptFullData<C, D>>(variable: K, value: ZiroPromptFullData<C, D>[K]) {
		return new ZiroPromptMessage<C, N, D>({
			...this.getData(),
			isDefaultMessage: true,
			[variable]: value,
		} as any);
	}

	getData(): Omit<ZiroPromptProps<C, N, D>, "firstButton" | "secondButton"> {
		return {
			...super.getData(),
			userResolution: this.userResolution,
		};
	}

	withAdditionalData<ND>(data: ND) {
		const { additionalData, ...rest } = this.getData();
		return new ZiroPromptMessage<C, N, D & ND>({
			...rest,
			isDefaultMessage: true,
			additionalData: { ...additionalData, ...data },
		} as any);
	}
}

export function isPrompt<C = string, N = string, D = any>(obj: any): obj is ZiroPromptMessage<C, N, D> {
	if (obj === null) return false;
	if (typeof obj !== "object") return false;
	if (!("$$promptMessage" in obj)) return false;
	return obj.$$promptMessage;
}

type PromptMessageCollection = { [key: string]: ZiroPromptMessage<string, string, any> };
export type GetPromptCode<V extends PromptMessageCollection, N extends keyof V> = V[N] extends ZiroPromptFullData<
	infer C,
	any
>
	? C
	: never;
export type GetPromptData<V extends PromptMessageCollection, N extends keyof V> = V[N] extends ZiroPromptFullData<
	any,
	infer D
>
	? D
	: never;
export type PromptMessage<V extends PromptMessageCollection, N extends keyof V, D> = ZiroPromptMessage<
	GetPromptCode<V, N>,
	N,
	D
>;
