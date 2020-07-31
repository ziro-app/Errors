import { ZiroMessage, ZiroProps, ZiroData, AdditionalData } from "./ZiroMessage"

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

    set<K extends keyof ZiroWaitingFullData<C>>(variable: K, value: ZiroWaitingFullData<C>[K]) {
        return new ZiroWaitingMessage({
            ...this.getData(),
            [variable]: value
        })
    }

    getData(): Omit<ZiroWaitingProps<C,N>,"promise"> {
        return super.getData()
    }

    withAdditionalData(data: AdditionalData) {
        const { additionalData, ...rest } = this.getData()
        return new ZiroWaitingMessage({
            ...rest,
            additionalData: { ...(additionalData||{}), ...data }
        })
    }
}