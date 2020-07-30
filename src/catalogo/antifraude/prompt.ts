import { RegisterCardPromptData, UploadDocumentPromptData, UploadSelfiePromptData, CommonAntifraudePromptData } from "../../../"

export const 

/**
 * REGISTER CARD - 0001 - 0015
 */

/**
 * UPLOAD DOCUMENT - 0025 - 0044
 */
INITIAL_DOCUMENT: UploadDocumentPromptData<"0025"> = {
    code: "0025",
    type: "neutral",
    title: "Documento do portador",
    illustration: "profileData",
    userDescription: "Para poder utilizar o cartão, a Ziro necessita do documento do portador.",
    userResolution: "Envie uma imagem do documento do portador do cartão.",
    internalDescription: "O usuário precisa enviar uma imagem do documento para avaliação junto a nextcode"
},
INITIAL_RG_FRENTE: UploadDocumentPromptData<"0026"> = {
    code: "0026",
    type: "neutral",
    title: "Frente do RG",
    illustration: "profileData",
    userDescription: "Para poder utilizar o cartão, é necessário uma imagem da frente do RG.",
    userResolution: "Envie uma imagem da frente do RG do portador do cartão.",
    internalDescription: "O usuário precisa enviar uma imagem da frente do RG para avaliação junto a nextcode"
},
INITIAL_RG_VERSO: UploadDocumentPromptData<"0027"> = {
    code: "0027",
    type: "neutral",
    title: "Verso do RG",
    illustration: "profileData",
    userDescription: "Para poder utilizar o cartão, é necessário uma imagem do verso do RG.",
    userResolution: "Envie uma imagem do verso do RG do portador do cartão.",
    internalDescription: "O usuário precisa enviar uma imagem do verso do RG para avaliação junto a nextcode"
},
DOC_READABILITY: UploadDocumentPromptData<"0028"> = {
    code: "0028",
    type: "neutral",
    title: "Documento legível",
    illustration: "profileData",
    userDescription: "É necessário que o documento esteja legível para que as informações sejam extraídas.",
    userResolution: "Aproxime bem a câmera e retire-o do plástico.",
    internalDescription: "O usuário precisa enviar uma imagem de boa qualidade para que a nextcode possa extrair as informações"
},
MISSING_EXP_DATE: UploadDocumentPromptData<"0029">  = {
    code: "0029",
    type: "destructive",
    title: "Data de expedição não encontrada",
    illustration: "paymentError",
    userDescription: "A data de expedição do documento enviada não pode ser extraída para a análise.",
    userResolution: "Envie uma nova imagem do documento.",
    internalDescription: "A resposta da nextcode não contém uma data de expedição válida para esse documento"
},
EXPIRED_DOC: UploadDocumentPromptData<"0030"> = {
    code: "0030",
    type: "destructive",
    title: "Documento expirado",
    illustration: "paymentError",
    userDescription: "O documento possui data de expedição maior do que a permitida pela Ziro.",
    userResolution: "Envie uma imagem de um documento mais recente.",
    internalDescription: "O algoritmo de antifraude detectou que a data de expedição excede aquilo que foi estipulado no código, consulte um dev para saber mais"
},
NO_FACE_OBJECT: UploadDocumentPromptData<"0031"> = {
    code: "0031",
    type: "destructive",
    title: "Rosto não encontrado",
    illustration: "paymentError",
    userDescription: "Esse tipo de documento deve possuir a foto do rosto do portador, mas nenhuma foi encontrada.",
    userResolution: "Envie um documento com foto.",
    internalDescription: "A resposta da nextcode não contém nenhum objeto do tipo face, o que indica que a imagem não contém a foto de um rosto"
},
CANNOT_ANALYZE_FACE: UploadDocumentPromptData<"0032"> = {
    code: "0032",
    type: "destructive",
    title: "Problema na análise",
    illustration: "paymentError",
    userDescription: "Houve um erro ao tentar analisar o rosto contido no documento, provavelmente por causa da qualidade da imagem.",
    userResolution: "Envie uma nova imagem do documento, sem reflexos e com boa iluminação.",
    internalDescription: "A resposta da nextcode contém um erro no objeto face, o que indica qua a face não pode ser analisada e portanto não poderá ser comparada com a selfie"
},
UNRECOGNIZED_FACE_OBJECT: UploadDocumentPromptData<"0033"> = {
    code: "0033",
    type: "destructive",
    title: "Problema na análise",
    illustration: "paymentError",
    userDescription: "Houve um erro ao tentar analisar o rosto contido no documento.",
    userResolution: "Entre em contato com o suporte.",
    internalDescription: "A resposta da nextcode contém um objeto desconhecido, entre em contato com os devs."
},
FIRST_NAME_MISTMACTH: UploadDocumentPromptData<"0034"> = {
    code: "0034",
    type: "destructive",
    title: "O documento nõo pertence ao portador",
    illustration: "paymentError",
    userDescription: "",
    userResolution: "",
    internalDescription: "",
},
LAST_NAME_MISTMACTH: UploadDocumentPromptData<"0035"> = {
    code: "0035",
    type: "destructive",
    title: "O documento nõo pertence ao portador",
    illustration: "paymentError",
    userDescription: "",
    userResolution: "",
    internalDescription: "",
},
/**
 * UPLOAD SELFIE - 0051 - 0065
 */

 /**
  * COMMON - 0076 - 0090
  */
 NO_IMAGE: CommonAntifraudePromptData<"0076"> = {
    code: "0076",
    type: "destructive",
    title: "É preciso enviar uma imagem",
    illustration: "paymentError",
    userDescription: "Não é possível passar para a próxima etapa sem enviar uma imagem para análise.",
    userResolution: "Tire uma foto ou escolha uma imagem salva em seu aparelho.",
    internalDescription: "O usuário clicou em próximo sem ter tirado foto alguma."
}