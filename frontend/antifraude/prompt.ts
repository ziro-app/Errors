import { ZiroMessageData, ZiroPromptMessageData } from "../../"

//As mensagens de antifraude tem o código 00XX

type Message = ZiroMessageData & ZiroPromptMessageData

export const 
MISSING_EXP_DATE: Message  = {
    code: "0001",
    type: "destructive",
    title: "Data de expedição não encontrada",
    illustration: "paymentError",
    userDescription: "A data de expedição do documento enviada não pode ser extraída para a análise.",
    userResolution: "Envie uma nova imagem do documento.",
    internalDescription: "A resposta da nextcode não contém uma data de expedição válida para esse documento"
},
EXPIRED_DOC: Message = {
    code: "0002",
    type: "destructive",
    title: "Documento expirado",
    illustration: "paymentError",
    userDescription: "O documento possui data de expedição maior do que a permitida pela Ziro.",
    userResolution: "Envie uma imagem de um documento mais recente.",
    internalDescription: "O algoritmo de antifraude detectou que a data de expedição excede aquilo que foi estipulado no código, consulte um dev para saber mais"
},
NO_FACE_OBJECT: Message = {
    code: "0003",
    type: "destructive",
    title: "Rosto não encontrado",
    illustration: "paymentError",
    userDescription: "Esse tipo de documento deve possuir a foto do rosto do portador, mas nenhuma foi encontrada.",
    userResolution: "Envie um documento com foto.",
    internalDescription: "A resposta da nextcode não contém nenhum objeto do tipo face, o que indica que a imagem não contém a foto de um rosto"
},
CANNOT_ANALYZE_FACE: Message = {
    code: "0004",
    type: "destructive",
    title: "Problema na análise",
    illustration: "paymentError",
    userDescription: "Houve um erro ao tentar analisar o rosto contido no documento, provavelmente por causa da qualidade da imagem.",
    userResolution: "Envie uma nova imagem do documento, sem reflexos e com boa iluminação.",
    internalDescription: "A resposta da nextcode contém um erro no objeto face, o que indica qua a face não pode ser analisada e portanto não poderá ser comparada com a selfie"
}