import { createPromptClassObject } from "../../utils";
import { GetPromptCode, GetPromptData, PromptMessage } from "../../ZiroPromptMessage";

import * as promptMessages from "./prompt";

export const prompt = createPromptClassObject(promptMessages);

export type CommonPromptCollection = typeof prompt;
export type GetCommonPromptCode<N extends keyof CommonPromptCollection> = GetPromptCode<CommonPromptCollection, N>;
export type GetCommonPromptData<N extends keyof CommonPromptCollection> = GetPromptData<CommonPromptCollection, N>;
export type CommonPromptMessage<N extends keyof CommonPromptCollection, D = GetCommonPromptData<N>> = PromptMessage<
	CommonPromptCollection,
	N,
	D
>;
