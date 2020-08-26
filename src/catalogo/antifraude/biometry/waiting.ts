import { BiometryWaitingData } from "../../../../codes";

export const ANALYZING_FACE: BiometryWaitingData<"0070"> = {
    code: "0070",
    type: "neutral",
    title: "Analisado selfie",
    illustration: "profileData",
    userDescription: "A Ziro está analisando a imagem do rosto fornecido",
    internalDescription: "Fazendo upload da selfie e a enviando para nextcode",
    additionalData: undefined,
};
