import { ZiroPromptMessage, ZiroMessageData, ZiroPromptMessageData, ZiroWaitingMessage, ZiroWaitingMessageData } from "./"

type PP = { [key: string]: ZiroMessageData&ZiroPromptMessageData }
type RP<V> = { [K in keyof V]: ZiroPromptMessage<K> }

export const createClassPromptObjects = function<V extends PP>(pack: V): RP<V> {
    return Object.entries(pack).reduce((acc,[n,m]) => ({ ...acc, [n]: new ZiroPromptMessage({ ...m, name: n }) }),{} as RP<V>)
}

type PW = { [key: string]: ZiroMessageData&ZiroWaitingMessageData }
type RW<V> = { [K in keyof V]: ZiroWaitingMessage<K> }

export const createClassWaitingObjects = function<V extends PW>(pack: V): RW<V> {
    return Object.entries(pack).reduce((acc,[n,m]) => ({ ...acc, [n]: new ZiroWaitingMessage({ ...m, name: n }) }),{} as RW<V>)
}

export type WMessage = ZiroMessageData & ZiroWaitingMessageData

export type PMessage = ZiroMessageData & ZiroPromptMessageData