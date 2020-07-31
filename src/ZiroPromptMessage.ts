import { ZiroMessage, ZiroProps, ZiroData } from "./ZiroMessage"

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

export type ZiroPromptFullData<C,D> = ZiroData<C,D> & ZiroPromptData

type ZiroPromptProps<C,N,D> = ZiroProps<C,N,D> & ZiroPromptData & Buttons

export class ZiroPromptMessage<C,N,D> extends ZiroMessage<C,N,D> implements ZiroPromptProps<C,N,D> {

    readonly userResolution: string
    readonly firstButton?: Button
    readonly secondButton?: Button

    constructor(props: ZiroPromptProps<C,N,D>) {
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

    set<K extends keyof ZiroPromptFullData<C,D>>(variable: K, value: ZiroPromptFullData<C,D>[K]) {
        return new ZiroPromptMessage({
            ...this.getData(),
            [variable]: value
        })
    }

    getData(): Omit<ZiroPromptProps<C,N,D>,"firstButton"|"secondButton"> {
        return {
            ...super.getData(),
            userResolution: this.userResolution
        }
    }

    withAdditionalData<ND>(data: ND) {
        const { additionalData, ...rest } = this.getData()
        return new ZiroPromptMessage({
            ...rest,
            additionalData: { ...(additionalData||{} as D), ...data }
        })
    }
}