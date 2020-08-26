import { ZiroPromptFullData, ZiroPromptMessage } from "./ZiroPromptMessage";
import { ZiroWaitingFullData, ZiroWaitingMessage } from "./ZiroWaitingMessage";

/**
 * generic types
 */

type Entry<V> = [string, V];
type O<V> = { [key: string]: V };

function entries<V>(obj: O<V>): Entry<V>[] {
    return (Object as any).entries(obj);
}

/**
 * prompt
 */

type PromptDataObject = { [key: string]: ZiroPromptFullData<string, any> };
type PromptClassObject<V> = {
    [N in keyof V]: V[N] extends ZiroPromptFullData<infer C, infer D> ? ZiroPromptMessage<C, N, D> : never;
};

export function createPromptClassObject<V extends PromptDataObject>(pack: V): PromptClassObject<V> {
    return entries(pack).reduce(
        (acc, [name, data]) => ({ ...acc, [name]: new ZiroPromptMessage({ ...data, name }) }),
        {} as any,
    );
}

/**
 * waiting
 */

type WaitingDataObject = { [key: string]: ZiroWaitingFullData<string, any> };
type WaitingClassObject<V> = {
    [N in keyof V]: V[N] extends ZiroWaitingFullData<infer C, infer D> ? ZiroWaitingMessage<C, N, D> : never;
};

export function createWaitingClassObject<V extends WaitingDataObject>(pack: V): WaitingClassObject<V> {
    return entries(pack).reduce(
        (acc, [name, data]) => ({ ...acc, [name]: new ZiroWaitingMessage({ ...data, name }) }),
        {} as any,
    );
}
