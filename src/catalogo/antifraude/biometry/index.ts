import { createPromptClassObject, createWaitingClassObject } from "../../../utils";

import * as promptMessages from "./prompt";

import * as waitingMessages from "./waiting";

export const prompt = createPromptClassObject(promptMessages);

export const waiting = createWaitingClassObject(waitingMessages);
