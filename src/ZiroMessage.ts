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

export interface ZiroData<C,D> {
    code: C
    type: "neutral"|"destructive"|"success"
    title: string
    illustration: Illustration
    userDescription: string
    internalDescription: string
    additionalData?: D
}

export type ZiroProps<C,N,D> = ZiroData<C,D> & { name: N }

export class ZiroMessage<C,N,D> implements ZiroProps<C,N,D> {

    readonly name: N
    readonly type: "neutral"|"destructive"|"success"
    readonly code: C
    readonly title: string
    readonly illustration: Illustration
    readonly userDescription: string
    readonly internalDescription: string
    readonly additionalData: D

    constructor(props: ZiroProps<C,N,D>) {
        this.name = props.name
        this.type = props.type
        this.code = props.code
        this.title = props.title
        this.illustration = props.illustration
        this.userDescription = props.userDescription
        this.internalDescription = props.internalDescription
        this.additionalData = props.additionalData||{} as D
        this.set = this.set.bind(this)
        this.withAdditionalData = this.withAdditionalData.bind(this)
    }

    set<K extends keyof ZiroData<C,D>>(variable: K, value: ZiroData<C,D>[K]) {
        return new ZiroMessage({
            ...this.getData(),
            [variable]: value
        })
    }

    getData(): ZiroProps<C,N,D> {
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

    withAdditionalData<ND>(data: ND) {
        const { additionalData, ...rest } = this.getData()
        return new ZiroMessage({
            ...rest,
            additionalData: { ...(additionalData||({} as D)), ...data }
        })
    }
}