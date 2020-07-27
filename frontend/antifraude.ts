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
},
EXPIRED_DOC: ZiroMessageData = {
    code: "0002",
    type: "destructive",
    title: "Documento expirado",
    userDescription: {
        short: "A data do documento é maior do que a permitida.",
        long: "O documento possui data de expedição maior do que a permitida pela Ziro.",
        resolution: "Envie uma imagem de um documento mais recente."
    },
    internalDescription: "O algoritmo de antifraude detectou que a data de expedição excede aquilo que foi estipulado no código, consulte um dev para saber mais"
}