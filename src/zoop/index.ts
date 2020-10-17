// import { createPromptClassObject } from "../utils";

// import * as promptMessages from "./prompt";
// import * as redePromptMessages from "./redePrompt";

// export const prompt = createPromptClassObject(promptMessages);
// export const rede = createPromptClassObject(redePromptMessages);
import { createPromptClassObject, createWaitingClassObject } from "../utils";
import { GetPromptCode, GetPromptData, PromptMessage } from "../ZiroPromptMessage";
import { GetWaitingCode, GetWaitingData, WaitingMessage } from "../ZiroWaitingMessage";

import * as promptMessages from "./prompt";
import * as redePromptMessages from "./redePrompt";

export const prompt = createPromptClassObject(promptMessages);

export type ZoopPromptCollection = typeof prompt;
export type GetZoopPromptCode<N extends keyof ZoopPromptCollection> = GetPromptCode<ZoopPromptCollection, N>;
export type GetZoopPromptData<N extends keyof ZoopPromptCollection> = GetPromptData<ZoopPromptCollection, N>;
export type ZoopPromptMessage<N extends keyof ZoopPromptCollection, D = GetZoopPromptData<N>> = PromptMessage<
	ZoopPromptCollection,
	N,
	D
>;

export const redePrompt = createPromptClassObject(redePromptMessages);

export type RedePromptCollection = typeof prompt;
export type GetRedePromptCode<N extends keyof RedePromptCollection> = GetPromptCode<RedePromptCollection, N>;
export type GetRedePromptData<N extends keyof RedePromptCollection> = GetPromptData<RedePromptCollection, N>;
export type RedePromptMessage<N extends keyof RedePromptCollection, D = GetRedePromptData<N>> = PromptMessage<
	RedePromptCollection,
	N,
	D
>;
