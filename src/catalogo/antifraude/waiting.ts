import { ZiroWaitingFullData } from "../../ZiroWaitingMessage"

//As mensagens de antifraude prompt tem o código 005X - 009X

export const
ANALYZING_DOC: ZiroWaitingFullData = {
    code: "0051",
    type: "neutral",
    title: "Analisando documento",
    illustration: "profileData",
    userDescription: "A Ziro está analisando a imagem do documento fornecido",
    internalDescription: "Fazendo upload da foto do documento e a enviando para nextcode"
},
ANALYZING_FACE: ZiroWaitingFullData = {
    code: "0052",
    type: "neutral",
    title: "Analisado selfie",
    illustration: "profileData",
    userDescription: "A Ziro está analisando a imagem do rosto fornecido",
    internalDescription: "Fazendo upload da selfie e a enviando para nextcode"
}