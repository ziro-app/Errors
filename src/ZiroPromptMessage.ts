import { ZiroMessage, ZiroProps, ZiroData } from "./ZiroMessage"

export type Button = {
    title: string
    action: (() => void)|ZiroPromptMessage<string>
}

interface ZiroPromptData {
    userResolution: string
    internalDescription: string
}

type Buttons = {
    firstButton?: Button
    secondButton?: Button
}

export type ZiroPromptFullData = ZiroData & ZiroPromptData

type ZiroPromptProps<N> = ZiroProps<N> & ZiroPromptData & Buttons

export class ZiroPromptMessage<N> extends ZiroMessage<N> implements ZiroPromptProps<N> {

    userResolution: string
    firstButton?: Button
    secondButton?: Button

    constructor(props: ZiroPromptProps<N>) {
        const { userResolution, firstButton, secondButton, ...rest } = props
        super(rest)
        this.userResolution = userResolution
        this.firstButton = firstButton
        this.secondButton = secondButton
        this.withButtons = this.withButtons.bind(this)
        this.set = this.set.bind(this)
    }

    withButtons(buttons: [Button]|[Button,Button]) {
        this.firstButton = buttons[0]
        this.secondButton = buttons[1]
        return this
    }

    set<K extends keyof ZiroPromptFullData>(variable: K, value: ZiroPromptFullData[K]) {
        this[variable] = value as any
        return this
    }

    getData(): Omit<ZiroPromptProps<N>,"firstButton"|"secondButton"> {
        return {
            name: this.name,
            code: this.code,
            type: this.type,
            title: this.title,
            illustration: this.illustration,
            userDescription: this.userDescription,
            userResolution: this.userResolution,
            internalDescription: this.internalDescription,
        }
    }
}