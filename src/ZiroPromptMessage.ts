import { ZiroMessage, ZiroProps, ZiroData, AdditionalData } from "./ZiroMessage"

export type Button = {
    title: string
    action: () => any
}

interface ZiroPromptData {
    userResolution: string
    internalDescription: string
}

type Buttons = {
    firstButton?: Button
    secondButton?: Button
}

export type ZiroPromptFullData<C> = ZiroData<C> & ZiroPromptData

type ZiroPromptProps<C,N> = ZiroProps<C,N> & ZiroPromptData & Buttons

export class ZiroPromptMessage<C,N> extends ZiroMessage<C,N> implements ZiroPromptProps<C,N> {

    readonly userResolution: string
    readonly firstButton?: Button
    readonly secondButton?: Button

    constructor(props: ZiroPromptProps<C,N>) {
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

    set<K extends keyof ZiroPromptFullData<C>>(variable: K, value: ZiroPromptFullData<C>[K]) {
        return new ZiroPromptMessage({
            ...this.getData(),
            [variable]: value
        })
    }

    getData(): Omit<ZiroPromptProps<C,N>,"firstButton"|"secondButton"> {
        return {
            ...super.getData(),
            userResolution: this.userResolution
        }
    }

    withAdditionalData(data: AdditionalData) {
        const { additionalData, ...rest } = this.getData()
        return new ZiroPromptMessage({
            ...rest,
            additionalData: { ...(additionalData||{}), ...data }
        })
    }
}