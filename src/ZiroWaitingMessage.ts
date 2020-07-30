import { ZiroMessage, ZiroProps, ZiroData } from "./ZiroMessage"

interface ZiroWaitingData {
    promise?: Promise<any>
}

export type ZiroWaitingFullData<C> = ZiroData<C> & ZiroWaitingData

type ZiroWaitingProps<C,N> = ZiroProps<C,N> & ZiroWaitingData

export class ZiroWaitingMessage<C,N> extends ZiroMessage<C,N> implements ZiroWaitingData {

    readonly promise?: Promise<any>

    constructor(props: ZiroWaitingProps<C,N>) {
        const { promise, ...rest } = props
        super(rest)
        this.promise = promise
        this.withPromise = this.withPromise.bind(this)
    }

    withPromise(promise: Promise<any>) {
        return new ZiroWaitingMessage({
            ...this.getData(),
            promise
        })
    }
}