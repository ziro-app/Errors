import { createPromptClassObject, createWaitingClassObject } from "../../../utils";
import { GetPromptCode, GetPromptData, PromptMessage } from "../../../ZiroPromptMessage";
import { GetWaitingCode, GetWaitingData, WaitingMessage } from "../../../ZiroWaitingMessage";

import * as promptMessages from "./prompt";

import * as waitingMessages from "./waiting";

export const prompt = createPromptClassObject(promptMessages);

export type FullOCRPromptCollection = typeof prompt;
export type GetFullOCRPromptCode<N extends keyof FullOCRPromptCollection> = GetPromptCode<FullOCRPromptCollection, N>;
export type GetFullOCRPromptData<N extends keyof FullOCRPromptCollection> = GetPromptData<FullOCRPromptCollection, N>;
export type FullOCRPromptMessage<N extends keyof FullOCRPromptCollection, D = GetFullOCRPromptData<N>> = PromptMessage<
    FullOCRPromptCollection,
    N,
    D
>;
export const waiting = createWaitingClassObject(waitingMessages);

export type FullOCRWaitingCollection = typeof waiting;
export type GetFullOCRWaitingCode<N extends keyof FullOCRWaitingCollection> = GetWaitingCode<
    FullOCRWaitingCollection,
    N
>;
export type GetFullOCRWaitingData<N extends keyof FullOCRWaitingCollection> = GetWaitingData<
    FullOCRWaitingCollection,
    N
>;
export type FullOCRWaitingMessage<
    N extends keyof FullOCRWaitingCollection,
    D = GetFullOCRWaitingData<N>
> = WaitingMessage<FullOCRWaitingCollection, N, D>;
