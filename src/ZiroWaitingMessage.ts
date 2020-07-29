import { ZiroMessage, ZiroMessageProps } from "./ZiroMessage"

export interface ZiroWaitingMessageData {
    promise?: Promise<any>
}

export type ZiroWaitingMessageProps<N> = ZiroMessageProps<N> & ZiroWaitingMessageData

export class ZiroWaitingMessage<N> extends ZiroMessage<N> implements ZiroWaitingMessageData {

    promise?: Promise<any>

    constructor(props: ZiroWaitingMessageProps<N>) {
        const { promise, ...rest } = props
        super(rest)
        this.promise = promise
        this.withPromise = this.withPromise.bind(this)
    }

    withPromise(promise: Promise<any>) {
        this.promise = promise
        return this
    }
}