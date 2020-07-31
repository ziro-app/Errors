export type Illustration = 
    |"paymentSuccess"
    |"paymentError"
    |"errorLoading"
    |"notFound"
    |"timelineStart"
    |"profileData"
    |"buy"
    |"registerSuccess"
    |"withoutFavorites"
    |"withoutCartItem"
    |"waiting"
    |"noData"

export type AdditionalData = { [key: string]: any }

export interface ZiroData<C> {
    code: C
    type: "neutral"|"destructive"|"success"
    title: string
    illustration: Illustration
    userDescription: string
    internalDescription: string
    additionalData?: AdditionalData
}

export type ZiroProps<C,N> = ZiroData<C> & { name: N }

export class ZiroMessage<C,N> implements ZiroProps<C,N> {

    readonly name: N
    readonly type: "neutral"|"destructive"|"success"
    readonly code: C
    readonly title: string
    readonly illustration: Illustration
    readonly userDescription: string
    readonly internalDescription: string
    readonly additionalData ?: AdditionalData

    constructor(props: ZiroProps<C,N>) {
        this.name = props.name
        this.type = props.type
        this.code = props.code
        this.title = props.title
        this.illustration = props.illustration
        this.userDescription = props.userDescription
        this.internalDescription = props.internalDescription
        this.additionalData = props.additionalData
        this.set = this.set.bind(this)
        this.withAdditionalData = this.withAdditionalData.bind(this)
    }

    set<K extends keyof ZiroData<C>>(variable: K, value: ZiroData<C>[K]) {
        return new ZiroMessage({
            ...this.getData(),
            [variable]: value
        })
    }

    getData(): ZiroProps<C,N> {
        return {
            name: this.name,
            type: this.type,
            code: this.code,
            title: this.title,
            illustration: this.illustration,
            userDescription: this.userDescription,
            internalDescription: this.internalDescription,
            additionalData: this.additionalData
        }
    }

    withAdditionalData(data: AdditionalData) {
        const { additionalData, ...rest } = this.getData()
        return new ZiroMessage({
            ...rest,
            additionalData: { ...(additionalData||{}), ...data }
        })
    }
}