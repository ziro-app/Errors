import { ZiroMessageData } from "../"

export const MISSING_EXP_DATE: ZiroMessageData = {
    code: "0001",
    type: "destructive",
    title: "Data de expedição não encontrada",
    userDescription: {
        short: "A data de expedição não pode ser encontrada.",
        long: "A data de expedição do documento enviada não pode ser extraída para a análise.",
        resolution: "Envie uma nova imagem do documento."
    },
    internalDescription: "A resposta da nextcode não contém uma data de expedição válida para esse documento"
}