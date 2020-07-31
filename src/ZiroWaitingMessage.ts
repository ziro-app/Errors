import { ZiroMessage, ZiroProps, ZiroData } from "./ZiroMessage"

interface ZiroWaitingData {
    promise?: Promise<any>
}

export type ZiroWaitingFullData<C,D> = ZiroData<C,D> & ZiroWaitingData

type ZiroWaitingProps<C,N,D> = ZiroProps<C,N,D> & ZiroWaitingData

export class ZiroWaitingMessage<C,N,D> extends ZiroMessage<C,N,D> implements ZiroWaitingData {

    readonly promise?: Promise<any>

    constructor(props: ZiroWaitingProps<C,N,D>) {
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

    set<K extends keyof ZiroWaitingFullData<C,D>>(variable: K, value: ZiroWaitingFullData<C,D>[K]) {
        return new ZiroWaitingMessage({
            ...this.getData(),
            [variable]: value
        })
    }

    getData(): Omit<ZiroWaitingProps<C,N,D>,"promise"> {
        return super.getData()
    }

    withAdditionalData<ND>(data: ND) {
        const { additionalData, ...rest } = this.getData()
        return new ZiroWaitingMessage({
            ...rest,
            additionalData: { ...(additionalData||{} as D), ...data }
        })
    }
}