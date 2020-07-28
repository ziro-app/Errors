import { ZiroMessage, ZiroMessageProps } from "./ZiroMessage"

export interface ZiroWaitingMessageData {
    promise?: Promise<void>
}

export type ZiroWaitingMessageProps = ZiroMessageProps & ZiroWaitingMessageData

export class ZiroWaitingMessage extends ZiroMessage implements ZiroWaitingMessageData {

    promise?: Promise<void>

    constructor(props: ZiroWaitingMessageProps) {
        const { promise, ...rest } = props
        super(rest)
        this.promise = promise
        this.withPromise = this.withPromise.bind(this)
    }

    withPromise(promise: Promise<void>) {
        this.promise = promise
        return this
    }
}