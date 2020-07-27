import { ZiroMessage, ZiroMessageData } from "../"

//erros de frontend começam com o número 0

type P = { [key: string]: ZiroMessageData }

const createClassObjects = function<V>(pack: P): V {
    return Object.entries(pack).reduce((acc,[n,m]) => ({ ...acc, [n]: new ZiroMessage(m) }),{} as V)
}

import * as _Antifraude from "./antifraude"
type AntifraudeType = { [key in keyof typeof _Antifraude]: ZiroMessage }
export const Antifraude: AntifraudeType = createClassObjects<AntifraudeType>(_Antifraude)