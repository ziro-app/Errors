import { createPromptClassObject, createWaitingClassObject } from "../../../utils";
import { GetPromptCode, GetPromptData, PromptMessage } from "../../../ZiroPromptMessage";
import { GetWaitingCode, GetWaitingData, WaitingMessage } from "../../../ZiroWaitingMessage";

import * as promptMessages from "./prompt";

import * as waitingMessages from "./waiting";

export const prompt = createPromptClassObject(promptMessages);

export type BiometryPromptCollection = typeof prompt;
export type GetBiometryPromptCode<N extends keyof BiometryPromptCollection> = GetPromptCode<
	BiometryPromptCollection,
	N
>;
export type GetBiometryPromptData<N extends keyof BiometryPromptCollection> = GetPromptData<
	BiometryPromptCollection,
	N
>;
export type BiometryPromptMessage<
	N extends keyof BiometryPromptCollection,
	D = GetBiometryPromptData<N>
> = PromptMessage<BiometryPromptCollection, N, D>;

export const waiting = createWaitingClassObject(waitingMessages);

export type BiometryWaitingCollection = typeof waiting;
export type GetBiometryWaitingCode<N extends keyof BiometryWaitingCollection> = GetWaitingCode<
	BiometryWaitingCollection,
	N
>;
export type GetBiometryWaitingData<N extends keyof BiometryWaitingCollection> = GetWaitingData<
	BiometryWaitingCollection,
	N
>;
export type BiometryWaitingMessage<
	N extends keyof BiometryWaitingCollection,
	D = GetBiometryWaitingData<N>
> = WaitingMessage<BiometryWaitingCollection, N, D>;
