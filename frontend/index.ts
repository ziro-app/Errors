import { ZiroPromptMessage, ZiroMessageData, ZiroPromptMessageData } from "../"

//As mensagens de frontend tem o código 0XXX

type P = { [key: string]: ZiroMessageData&ZiroPromptMessageData }
type R<V> = { [key in keyof V]: ZiroPromptMessage }

const createClassObjects = function<V extends P>(pack: V): R<V> {
    return Object.entries(pack).reduce((acc,[n,m]) => ({ ...acc, [n]: new ZiroPromptMessage({ ...m, name: n }) }),{} as R<V>)
}

import * as _Antifraude from "./antifraude"
export const Antifraude = createClassObjects(_Antifraude)