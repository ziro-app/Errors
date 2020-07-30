import { ZiroMessage, ZiroProps, ZiroData } from "./ZiroMessage"

interface ZiroWaitingData {
    promise?: Promise<any>
}

export type ZiroWaitingFullData = ZiroData & ZiroWaitingData

type ZiroWaitingProps<N> = ZiroProps<N> & ZiroWaitingData

export class ZiroWaitingMessage<N> extends ZiroMessage<N> implements ZiroWaitingData {

    readonly promise?: Promise<any>

    constructor(props: ZiroWaitingProps<N>) {
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