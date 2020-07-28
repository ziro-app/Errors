import { ZiroMessageData, ZiroWaitingMessageData } from "../../"

//As mensagens de antifraude prompt tem o código 005X - 009X

type Message = ZiroMessageData & ZiroWaitingMessageData

export const
ANALYZING_DOC: Message = {
    code: "0051",
    title: "Analisando documento",
    illustration: "profileData",
    userDescription: "A Ziro está analisando a imagem do documento fornecido",
    internalDescription: "Fazendo upload da foto do documento e a enviando para nextcode"
},
ANALYZING_FACE: Message = {
    code: "0052",
    title: "Analisado selfie",
    illustration: "profileData",
    userDescription: "A Ziro está analisando a imagem do rosto fornecido",
    internalDescription: "Fazendo upload da selfie e a enviando para nextcode"
}