import { FullOCRWaitingData } from "../../../../codes";

export const ANALYZING_DOC: FullOCRWaitingData<"0045"> = {
    code: "0045",
    type: "neutral",
    title: "Analisando documento",
    illustration: "cnhPhoto",
    userDescription: "A Ziro está analisando a imagem do documento fornecido",
    internalDescription: "Fazendo upload da foto do documento e a enviando para nextcode",
    additionalData: undefined,
};
