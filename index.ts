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

type AsyncAction = {
    promise: () => Promise<void|ZiroMessage>
    illustration: Illustration
    text: string
}

type Action = () => (void|ZiroMessage)|AsyncAction

export type Button = {
    title: string
    action: Action
}

export interface ZiroMessageData {
    code: string
    type: "neutral"|"destructive"|"success"
    title: string
    illustration: Illustration
    user: {
        description: string
        resolution: string
    }
    internalDescription: string
}

type Buttons = {
    firstButton?: Button
    secondButton?: Button
}

type ZiroMessageProps = ZiroMessageData & Buttons & { name: string }

export class ZiroMessage implements ZiroMessageProps {

    name: string
    code: string
    type: "neutral"|"destructive"|"success"
    title: string
    illustration: Illustration
    user: {
        description: string
        resolution: string
    }
    internalDescription: string
    firstButton?: Button
    secondButton?: Button

    constructor(props: ZiroMessageProps) {
        this.name = name
        this.code = props.code
        this.type = props.type
        this.title = props.title
        this.illustration = props.illustration
        this.user = props.user
        this.internalDescription = props.internalDescription
        this.firstButton = props.firstButton
        this.secondButton = props.secondButton
        this.withButtons = this.withButtons.bind(this)
        this.set = this.set.bind(this)
    }

    withButtons(buttons: [Button]|[Button,Button]) {
        this.firstButton = buttons[0]
        this.secondButton = buttons[1]
        return this
    }

    set<K extends keyof ZiroMessageData>(variable: K, value: ZiroMessageData[K]) {
        this[variable] = value as any
        return this
    }

    get() {
        return {
            name: this.name,
            code: this.code,
            type: this.type,
            title: this.title,
            illustration: this.illustration,
            user: this.user,
            internalDescription: this.internalDescription,
        } as ZiroMessageData & { name: string }
    }
}