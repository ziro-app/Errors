import { createPromptClassObject, createWaitingClassObject } from "../../../utils";
import { GetPromptCode, GetPromptData, PromptMessage } from "../../../ZiroPromptMessage";
import { GetWaitingCode, GetWaitingData, WaitingMessage } from "../../../ZiroWaitingMessage";

import * as promptMessages from "./prompt";

import * as waitingMessages from "./waiting";

export const prompt = createPromptClassObject(promptMessages);

export type ChooseCardPromptCollection = typeof prompt;
export type GetChooseCardPromptCode<N extends keyof ChooseCardPromptCollection> = GetPromptCode<
	ChooseCardPromptCollection,
	N
>;
export type GetChooseCardPromptData<N extends keyof ChooseCardPromptCollection> = GetPromptData<
	ChooseCardPromptCollection,
	N
>;
export type ChooseCardPromptMessage<
	N extends keyof ChooseCardPromptCollection,
	D = GetChooseCardPromptData<N>
> = PromptMessage<ChooseCardPromptCollection, N, D>;

export const waiting = createWaitingClassObject(waitingMessages);

export type ChooseCardWaitingCollection = typeof waiting;
export type GetChooseCardWaitingCode<N extends keyof ChooseCardWaitingCollection> = GetWaitingCode<
	ChooseCardWaitingCollection,
	N
>;
export type GetChooseCardWaitingData<N extends keyof ChooseCardWaitingCollection> = GetWaitingData<
	ChooseCardWaitingCollection,
	N
>;
export type ChooseCardWaitingMessage<
	N extends keyof ChooseCardWaitingCollection,
	D = GetChooseCardWaitingData<N>
> = WaitingMessage<ChooseCardWaitingCollection, N, D>;
