import { ZiroMessageData } from "../"

//As mensagens de antifraude tem o código 00XX

export const 
MISSING_EXP_DATE: ZiroMessageData = {
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
},
NO_FACE_OBJECT: ZiroMessageData = {
    code: "0003",
    type: "destructive",
    title: "Rosto não encontrado",
    userDescription: {
        short: "Nenhum rosto foi encontrado na foto analisada.",
        long: "Esse tipo de documento deve possuir a foto do rosto do portador, mas nenhuma foi encontrada.",
        resolution: "Envie um documento com foto."
    },
    internalDescription: "A resposta da nextcode não contém nenhum objeto do tipo face, o que indica que a imagem não contém a foto de um rosto"
},
CANNOT_ANALYZE_FACE: ZiroMessageData = {
    code: "0004",
    type: "destructive",
    title: "Problema na análise",
    userDescription: {
        short: "O rosto contido no documento não pode ser analisado.",
        long: "Houve um erro ao tentar analisar o rosto contido no documento, provavelmente por causa da qualidade da imagem.",
        resolution: "Envie uma nova imagem do documento, sem reflexos e com boa iluminação."
    },
    internalDescription: "A resposta da nextcode contém um erro no objeto face, o que indica qua a face não pode ser analisada e portanto não poderá ser comparada com a selfie"
}