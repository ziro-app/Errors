import { createPromptClassObject, createWaitingClassObject } from "../../../utils";
import { GetPromptCode, GetPromptData, PromptMessage } from "../../../ZiroPromptMessage";
import { GetWaitingCode, GetWaitingData, WaitingMessage } from "../../../ZiroWaitingMessage";

import * as promptMessages from "./prompt";

import * as waitingMessages from "./waiting";

export const prompt = createPromptClassObject(promptMessages);

export type RegisterCardPromptCollection = typeof prompt;
export type GetRegisterCardPromptCode<N extends keyof RegisterCardPromptCollection> = GetPromptCode<
	RegisterCardPromptCollection,
	N
>;
export type GetRegisterCardPromptData<N extends keyof RegisterCardPromptCollection> = GetPromptData<
	RegisterCardPromptCollection,
	N
>;
export type RegisterCardPromptMessage<
	N extends keyof RegisterCardPromptCollection,
	D = GetRegisterCardPromptData<N>
> = PromptMessage<RegisterCardPromptCollection, N, D>;
export const waiting = createWaitingClassObject(waitingMessages);

export type RegisterCardWaitingCollection = typeof waiting;
export type GetRegisterCardWaitingCode<N extends keyof RegisterCardWaitingCollection> = GetWaitingCode<
	RegisterCardWaitingCollection,
	N
>;
export type GetRegisterCardWaitingData<N extends keyof RegisterCardWaitingCollection> = GetWaitingData<
	RegisterCardWaitingCollection,
	N
>;
export type RegisterCardWaitingMessage<
	N extends keyof RegisterCardWaitingCollection,
	D = GetRegisterCardWaitingData<N>
> = WaitingMessage<RegisterCardWaitingCollection, N, D>;
