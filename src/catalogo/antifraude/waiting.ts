import { RegisterCardWaitingData, UploadDocumentWaitingData, UploadSelfieWaitingData, CommonAntifraudeWaitingData } from "../../../"

export const
/**
 * UPLOAD DOCUMENT - 0045 - 0049
 */
ANALYZING_DOC: UploadDocumentWaitingData<"0045"> = {
    code: "0045",
    type: "neutral",
    title: "Analisando documento",
    illustration: "profileData",
    userDescription: "A Ziro está analisando a imagem do documento fornecido",
    internalDescription: "Fazendo upload da foto do documento e a enviando para nextcode"
},
/**
 * UPLOAD SELFIE - 0070 - 0074
 */
ANALYZING_FACE: UploadSelfieWaitingData<"0070"> = {
    code: "0070",
    type: "neutral",
    title: "Analisado selfie",
    illustration: "profileData",
    userDescription: "A Ziro está analisando a imagem do rosto fornecido",
    internalDescription: "Fazendo upload da selfie e a enviando para nextcode"
}