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

export interface ZiroData {
    code: string
    type: "neutral"|"destructive"|"success"
    title: string
    illustration: Illustration
    userDescription: string
    internalDescription: string
}

export type ZiroProps<N> = ZiroData & { name: N }

export class ZiroMessage<N> implements ZiroProps<N> {

    name: N
    type: "neutral"|"destructive"|"success"
    code: string
    title: string
    illustration: Illustration
    userDescription: string
    internalDescription: string

    constructor(props: ZiroProps<N>) {
        this.name = props.name
        this.type = props.type
        this.code = props.code
        this.title = props.title
        this.illustration = props.illustration
        this.userDescription = props.userDescription
        this.internalDescription = props.internalDescription
        this.set = this.set.bind(this)
    }

    set<K extends keyof ZiroData>(variable: K, value: ZiroData[K]) {
        this[variable] = value as any
        return this
    }

    getData(): ZiroProps<N> {
        return {
            name: this.name,
            type: this.type,
            code: this.code,
            title: this.title,
            illustration: this.illustration,
            userDescription: this.userDescription,
            internalDescription: this.internalDescription,
        }
    }
}