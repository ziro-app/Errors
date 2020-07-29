type Illustration = 
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

export interface ZiroMessageData {
    code: string
    type: "neutral"|"destructive"|"success"
    title: string
    illustration: Illustration
    userDescription: string
    internalDescription: string
}

export type ZiroMessageProps<N> = ZiroMessageData & { name: N }

export class ZiroMessage<N> implements ZiroMessageProps<N> {

    name: N
    type: "neutral"|"destructive"|"success"
    code: string
    title: string
    illustration: Illustration
    userDescription: string
    internalDescription: string

    constructor(props: ZiroMessageProps<N>) {
        this.name = props.name
        this.type = props.type
        this.code = props.code
        this.title = props.title
        this.illustration = props.illustration
        this.userDescription = props.userDescription
        this.internalDescription = props.internalDescription
        this.set = this.set.bind(this)
    }

    set<K extends keyof ZiroMessageData>(variable: K, value: ZiroMessageData[K]) {
        this[variable] = value as any
        return this
    }

    get() {
        return {
            name: this.name,
            type: this.type,
            code: this.code,
            title: this.title,
            illustration: this.illustration,
            userDescription: this.userDescription,
            internalDescription: this.internalDescription,
        } as ZiroMessageData & { name: N }
    }
}