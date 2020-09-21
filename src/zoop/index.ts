import { createPromptClassObject } from "../utils";

import * as promptMessages from "./prompt";
import * as redePromptMessages from "./redePrompt";

export const prompt = createPromptClassObject(promptMessages);
export const rede = createPromptClassObject(redePromptMessages);
