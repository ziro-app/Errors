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
    title: string
    illustration: Illustration
    userDescription: string
    internalDescription: string
}

export type ZiroMessageProps = ZiroMessageData & { name: string }

export class ZiroMessage implements ZiroMessageProps {

    name: string
    code: string
    title: string
    illustration: Illustration
    userDescription: string
    internalDescription: string

    constructor(props: ZiroMessageProps) {
        this.name = props.name
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
            code: this.code,
            title: this.title,
            illustration: this.illustration,
            userDescription: this.userDescription,
            internalDescription: this.internalDescription,
        } as ZiroMessageData & { name: string }
    }
}