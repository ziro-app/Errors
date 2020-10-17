import { createPromptClassObject, createWaitingClassObject } from "../../../utils";
import { GetPromptCode, GetPromptData, PromptMessage } from "../../../ZiroPromptMessage";
import { GetWaitingCode, GetWaitingData, WaitingMessage } from "../../../ZiroWaitingMessage";

import * as promptMessages from "./prompt";

import * as waitingMessages from "./waiting";

export const prompt = createPromptClassObject(promptMessages);

export type CheckoutPromptCollection = typeof prompt;
export type GetCheckoutPromptCode<N extends keyof CheckoutPromptCollection> = GetPromptCode<
	CheckoutPromptCollection,
	N
>;
export type GetCheckoutPromptData<N extends keyof CheckoutPromptCollection> = GetPromptData<
	CheckoutPromptCollection,
	N
>;
export type CheckoutPromptMessage<
	N extends keyof CheckoutPromptCollection,
	D = GetCheckoutPromptData<N>
> = PromptMessage<CheckoutPromptCollection, N, D>;

export const waiting = createWaitingClassObject(waitingMessages);

export type CheckoutWaitingCollection = typeof waiting;
export type GetCheckoutWaitingCode<N extends keyof CheckoutWaitingCollection> = GetWaitingCode<
	CheckoutWaitingCollection,
	N
>;
export type GetCheckoutWaitingData<N extends keyof CheckoutWaitingCollection> = GetWaitingData<
	CheckoutWaitingCollection,
	N
>;
export type CheckoutWaitingMessage<
	N extends keyof CheckoutWaitingCollection,
	D = GetCheckoutWaitingData<N>
> = WaitingMessage<CheckoutWaitingCollection, N, D>;
