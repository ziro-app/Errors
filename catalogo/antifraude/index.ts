import { createClassPromptObjects, createClassWaitingObjects } from "../../utils"

//As mensagens do antifraude tem o código 00XX

import * as _prompt from "./prompt"
export const prompt = createClassPromptObjects(_prompt)

import * as _waiting from "./waiting"
export const waiting = createClassWaitingObjects(_waiting)