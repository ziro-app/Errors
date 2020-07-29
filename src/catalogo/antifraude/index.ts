import { createPromptClassObject, createWaitingClassObject } from "../../utils"

//As mensagens do antifraude tem o código 00XX

import * as promptMessages from "./prompt"
export const prompt = createPromptClassObject(promptMessages)

import * as waitingMessages from "./waiting"
export const waiting = createWaitingClassObject(waitingMessages)