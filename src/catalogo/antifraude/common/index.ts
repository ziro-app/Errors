import { createPromptClassObject, createWaitingClassObject } from "../../../utils"
import { GetPromptCode, GetPromptData, PromptMessage } from "../../../ZiroPromptMessage"
import { GetWaitingCode, GetWaitingData, WaitingMessage } from "../../../ZiroWaitingMessage"

import * as promptMessages from "./prompt"
export const prompt = createPromptClassObject(promptMessages)

export type CommonPromptCollection = typeof prompt
export type GetCommonPromptCode<N extends keyof CommonPromptCollection> = GetPromptCode<CommonPromptCollection,N>
export type GetCommonPromptData<N extends keyof CommonPromptCollection> = GetPromptData<CommonPromptCollection,N>
export type CommonPromptMessage<N extends keyof CommonPromptCollection,D = GetCommonPromptData<N>> = PromptMessage<CommonPromptCollection,N,D>

// import * as waitingMessages from "./waiting"
// export const waiting = createWaitingClassObject(waitingMessages)