import { ZiroMessage, ZiroMessageData } from "../"

//As mensagens de frontend tem o código 0XXX

type P = { [key: string]: ZiroMessageData }
type R<V> = { [key in keyof V]: ZiroMessage }

const createClassObjects = function<V extends P>(pack: V): R<V> {
    return Object.entries(pack).reduce((acc,[n,m]) => ({ ...acc, [n]: new ZiroMessage(m) }),{} as R<V>)
}

import * as _Antifraude from "./antifraude"
export const Antifraude = createClassObjects(_Antifraude)