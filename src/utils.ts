import { ZiroPromptFullData, ZiroPromptMessage } from "./ZiroPromptMessage"
import { ZiroWaitingFullData, ZiroWaitingMessage } from "./ZiroWaitingMessage"

type PromptDataObject = { [key: string]: ZiroPromptFullData }
type PromptClassObject<V> = { [K in keyof V]: ZiroPromptMessage<K> }

type Entries<V> = [string,V][]

export const createPromptClassObject = function<V extends PromptDataObject>(pack: V): PromptClassObject<V> {
    return (<Entries<ZiroPromptFullData>>(<any>Object).entries(pack))
        .reduce((acc,[n,m]) => ({ ...acc, [n]: new ZiroPromptMessage({ ...m, name: n }) }),{} as PromptClassObject<V>)
}

type WaitingDataObject = { [key: string]: ZiroWaitingFullData }
type WaitingClassObject<V> = { [K in keyof V]: ZiroWaitingMessage<K> }

export const createWaitingClassObject = function<V extends WaitingDataObject>(pack: V): WaitingClassObject<V> {
    return (<Entries<ZiroWaitingFullData>>(<any>Object).entries(pack))
        .reduce((acc,[n,m]) => ({ ...acc, [n]: new ZiroWaitingMessage({ ...m, name: n }) }),{} as WaitingClassObject<V>)
}