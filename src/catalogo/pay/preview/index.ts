import { createPromptClassObject, createWaitingClassObject } from "../../../utils";
import { GetPromptCode, GetPromptData, PromptMessage } from "../../../ZiroPromptMessage";
import { GetWaitingCode, GetWaitingData, WaitingMessage } from "../../../ZiroWaitingMessage";

import * as promptMessages from "./prompt";

import * as waitingMessages from "./waiting";

export const prompt = createPromptClassObject(promptMessages);

export type PreviewPromptCollection = typeof prompt;
export type GetPreviewPromptCode<N extends keyof PreviewPromptCollection> = GetPromptCode<PreviewPromptCollection, N>;
export type GetPreviewPromptData<N extends keyof PreviewPromptCollection> = GetPromptData<PreviewPromptCollection, N>;
export type PreviewPromptMessage<N extends keyof PreviewPromptCollection, D = GetPreviewPromptData<N>> = PromptMessage<
	PreviewPromptCollection,
	N,
	D
>;

export const waiting = createWaitingClassObject(waitingMessages);

export type PreviewWaitingCollection = typeof waiting;
export type GetPreviewWaitingCode<N extends keyof PreviewWaitingCollection> = GetWaitingCode<
	PreviewWaitingCollection,
	N
>;
export type GetPreviewWaitingData<N extends keyof PreviewWaitingCollection> = GetWaitingData<
	PreviewWaitingCollection,
	N
>;
export type PreviewWaitingMessage<
	N extends keyof PreviewWaitingCollection,
	D = GetPreviewWaitingData<N>
> = WaitingMessage<PreviewWaitingCollection, N, D>;
