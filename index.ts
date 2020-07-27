export type Button = {
    title: string
    action: () => void
}

export interface ZiroMessageData {
    code: string
    type: "neutral"|"destructive"|"success"
    title: string
    userDescription: {
        short: string
        long: string
        resolution: string
    }
    internalDescription: string
}

type Buttons = {
    firstButton?: Button
    secondButton?: Button
}

type ZiroMessageProps = ZiroMessageData & Buttons

export class ZiroMessage implements ZiroMessageProps {

    code: string
    type: "neutral"|"destructive"|"success"
    title: string
    userDescription: {
        short: string
        long: string
        resolution: string
    }
    internalDescription: string
    firstButton?: Button
    secondButton?: Button

    constructor(props: ZiroMessageProps) {
        this.code = props.code
        this.type = props.type
        this.title = props.title
        this.userDescription = props.userDescription
        this.internalDescription = props.internalDescription
        this.firstButton = props.firstButton
        this.secondButton = props.secondButton
        this.withButtons = this.withButtons.bind(this)
    }

    withButtons (buttons: [Button]|[Button,Button]) {
        this.firstButton = buttons[0]
        this.secondButton = buttons[1]
        return this
    }
}