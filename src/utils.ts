import { ZiroPromptFullData, ZiroPromptMessage } from "./ZiroPromptMessage"
import { ZiroWaitingFullData, ZiroWaitingMessage } from "./ZiroWaitingMessage"

type PromptDataObject = { [key: string]: ZiroPromptFullData<string> }
type PromptClassObject<V> = { [K in keyof V]: V[K] extends ZiroPromptFullData<infer C> ? ZiroPromptMessage<C,K> : never }

type Entries<V> = [string,V][]

export const createPromptClassObject = function<V extends PromptDataObject>(pack: V): PromptClassObject<V> {
    return (<Entries<ZiroPromptFullData<string>>>(<any>Object).entries(pack))
        .reduce((acc,[n,m]) => ({ ...acc, [n]: new ZiroPromptMessage({ ...m, name: n }) }),{} as PromptClassObject<V>)
}

type WaitingDataObject = { [key: string]: ZiroWaitingFullData<string> }
type WaitingClassObject<V> = { [K in keyof V]: V[K] extends ZiroWaitingFullData<infer C> ? ZiroWaitingMessage<C,K> : never }

export const createWaitingClassObject = function<V extends WaitingDataObject>(pack: V): WaitingClassObject<V> {
    return (<Entries<ZiroWaitingFullData<string>>>(<any>Object).entries(pack))
        .reduce((acc,[n,m]) => ({ ...acc, [n]: new ZiroWaitingMessage({ ...m, name: n }) }),{} as WaitingClassObject<V>)
}