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

    readonly userResolution: string
    readonly firstButton?: Button
    readonly secondButton?: Button

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
        return new ZiroPromptMessage({
            ...this.getData(),
            firstButton: buttons[0],
            secondButton: buttons[1]
        })
    }

    set<K extends keyof ZiroPromptFullData>(variable: K, value: ZiroPromptFullData[K]) {
        return new ZiroPromptMessage({
            ...this.getData(),
            [variable]: value
        })
    }

    getData(): Omit<ZiroPromptProps<N>,"firstButton"|"secondButton"> {
        return {
            ...super.getData(),
            userResolution: this.userResolution
        }
    }
}