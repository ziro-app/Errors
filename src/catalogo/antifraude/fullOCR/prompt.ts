import { FullOCRPromptData } from "../../../../"

export const 
INITIAL_DOCUMENT: FullOCRPromptData<"0025"> = {
    code: "0025",
    type: "neutral",
    title: "Documento do portador",
    illustration: "profileData",
    userDescription: "Para poder utilizar o cartão, a Ziro necessita do documento do portador.",
    userResolution: "Envie uma imagem do documento do portador do cartão.",
    internalDescription: "O usuário precisa enviar uma imagem do documento para avaliação junto a nextcode",
    additionalData: undefined
},
INITIAL_RG_FRENTE: FullOCRPromptData<"0026"> = {
    code: "0026",
    type: "neutral",
    title: "Frente do RG",
    illustration: "profileData",
    userDescription: "Para poder utilizar o cartão, é necessário uma imagem da frente do RG.",
    userResolution: "Envie uma imagem da frente do RG do portador do cartão.",
    internalDescription: "O usuário precisa enviar uma imagem da frente do RG para avaliação junto a nextcode",
    additionalData: undefined
},
INITIAL_RG_VERSO: FullOCRPromptData<"0027"> = {
    code: "0027",
    type: "neutral",
    title: "Verso do RG",
    illustration: "profileData",
    userDescription: "Para poder utilizar o cartão, é necessário uma imagem do verso do RG.",
    userResolution: "Envie uma imagem do verso do RG do portador do cartão.",
    internalDescription: "O usuário precisa enviar uma imagem do verso do RG para avaliação junto a nextcode",
    additionalData: undefined
},
DOC_READABILITY: FullOCRPromptData<"0028"> = {
    code: "0028",
    type: "neutral",
    title: "Documento legível",
    illustration: "profileData",
    userDescription: "É necessário que o documento esteja legível para que as informações sejam extraídas.",
    userResolution: "Aproxime bem a câmera e retire-o do plástico.",
    internalDescription: "O usuário precisa enviar uma imagem de boa qualidade para que a nextcode possa extrair as informações",
    additionalData: undefined
},
MISSING_EXP_DATE: FullOCRPromptData<"0029">  = {
    code: "0029",
    type: "destructive",
    title: "Data de expedição não encontrada",
    illustration: "paymentError",
    userDescription: "A data de expedição do documento enviada não pode ser extraída para a análise.",
    userResolution: "Envie uma nova imagem do documento.",
    internalDescription: "A resposta da nextcode não contém uma data de expedição válida para esse documento",
    additionalData: undefined
},
EXPIRED_DOC: FullOCRPromptData<"0030"> = {
    code: "0030",
    type: "destructive",
    title: "Documento expirado",
    illustration: "paymentError",
    userDescription: "O documento possui data de expedição maior do que a permitida pela Ziro.",
    userResolution: "Envie uma imagem de um documento mais recente.",
    internalDescription: "O algoritmo de antifraude detectou que a data de expedição excede aquilo que foi estipulado no código, consulte um dev para saber mais",
    additionalData: undefined
},
NO_FACE_OBJECT: FullOCRPromptData<"0031"> = {
    code: "0031",
    type: "destructive",
    title: "Rosto não encontrado",
    illustration: "paymentError",
    userDescription: "Esse tipo de documento deve possuir a foto do rosto do portador, mas nenhuma foi encontrada.",
    userResolution: "Envie um documento com foto.",
    internalDescription: "A resposta da nextcode não contém nenhum objeto do tipo face, o que indica que a imagem não contém a foto de um rosto",
    additionalData: undefined
},
CANNOT_ANALYZE_FACE: FullOCRPromptData<"0032"> = {
    code: "0032",
    type: "destructive",
    title: "Problema na análise",
    illustration: "paymentError",
    userDescription: "Houve um erro ao tentar analisar o rosto contido no documento, provavelmente por causa da qualidade da imagem.",
    userResolution: "Envie uma nova imagem do documento, sem reflexos e com boa iluminação.",
    internalDescription: "A resposta da nextcode contém um erro no objeto face, o que indica qua a face não pode ser analisada e portanto não poderá ser comparada com a selfie",
    additionalData: undefined
},
UNRECOGNIZED_FACE_OBJECT: FullOCRPromptData<"0033"> = {
    code: "0033",
    type: "destructive",
    title: "Problema na análise",
    illustration: "paymentError",
    userDescription: "Houve um erro ao tentar analisar o rosto contido no documento.",
    userResolution: "Entre em contato com o suporte.",
    internalDescription: "A resposta da nextcode contém um objeto desconhecido, entre em contato com os devs.",
    additionalData: undefined
},
FIRST_NAME_MISMATCH: FullOCRPromptData<"0034"> = {
    code: "0034",
    type: "destructive",
    title: "Documento reprovado",
    illustration: "paymentError",
    userDescription: "O documento enviado não pertence ao portador do cartão.",
    userResolution: "Envie um documento pertencente ao portador do cartão que está sendo cadastrado.",
    internalDescription: "O primeiro nome no documento é diferente do primeiro nome no cartão",
    additionalData: undefined
},
LAST_NAME_MISMATCH: FullOCRPromptData<"0035"> = {
    code: "0035",
    type: "destructive",
    title: "O documento nõo pertence ao portador",
    illustration: "paymentError",
    userDescription: "O documento enviado não pertence ao portador do cartão.",
    userResolution: "Envie um documento pertencente ao portador do cartão que está sendo cadastrado.",
    internalDescription: "O segundo sobrenome no documento é diferente do sobrenome no cartão",
    additionalData: undefined
},
UNRECOGNIZED_RESPONSE: FullOCRPromptData<"0036"> = {
    code: "0036",
    type: "destructive",
    title: "Erro na análise",
    illustration: "paymentError",
    userDescription: "A Ziro não pode analisar o documento enviado.",
    userResolution: "Entre em contato com o suporte.",
    internalDescription: "A resposta recebida da nextcode é diferente da esperada e o código não está pronto para processa-la, entre em contato com os devs",
    additionalData: undefined
},
UNKNOWN_DOCUMENT_TYPE: FullOCRPromptData<"0037"> = {
    code: "0037",
    type: "destructive",
    title: "Erro na análise",
    illustration: "paymentError",
    userDescription: "A Ziro não pode reconher o documento.",
    userResolution: "Entre em contato com o suporte.",
    internalDescription: "A resposta recebida da nextcode categorizou o documento como um formato diferente do esperado",
    additionalData: undefined
},
SELFIE_TYPE: FullOCRPromptData<"0038"> = {
    code: "0038",
    type: "destructive",
    title: "Upload do documento",
    illustration: "paymentError",
    userDescription: "Antes de fazer upload da selfie, é necessário enviar uma foto do documento do portador.",
    userResolution: "Envie um documento pertencente ao portador do cartão que está sendo cadastrado.",
    internalDescription: "O usuário tentou enviar uma selfie no momento que deveria ter enviado uma foto do documento.",
    additionalData: undefined
},
SAME_DOC_RGF: FullOCRPromptData<"0039"> = {
    code: "0039",
    type: "destructive",
    title: "Upload do documento",
    illustration: "paymentError",
    userDescription: "Antes de fazer upload da selfie, é necessário enviar uma foto do documento do portador.",
    userResolution: "Envie um documento pertencente ao portador do cartão que está sendo cadastrado.",
    internalDescription: "O usuário tentou enviar uma selfie no momento que deveria ter enviado uma foto do documento.",
    additionalData: undefined
},
SAME_DOC_RGV: FullOCRPromptData<"0040"> = {
    code: "0040",
    type: "destructive",
    title: "Upload do documento",
    illustration: "paymentError",
    userDescription: "Antes de fazer upload da selfie, é necessário enviar uma foto do documento do portador.",
    userResolution: "Envie um documento pertencente ao portador do cartão que está sendo cadastrado.",
    internalDescription: "O usuário tentou enviar uma selfie no momento que deveria ter enviado uma foto do documento.",
    additionalData: undefined
},
SAME_DOC_CNHV: FullOCRPromptData<"0041"> = {
    code: "0041",
    type: "destructive",
    title: "Upload do documento",
    illustration: "paymentError",
    userDescription: "Antes de fazer upload da selfie, é necessário enviar uma foto do documento do portador.",
    userResolution: "Envie um documento pertencente ao portador do cartão que está sendo cadastrado.",
    internalDescription: "O usuário tentou enviar uma selfie no momento que deveria ter enviado uma foto do documento.",
    additionalData: undefined
},
INITIAL_CNH_FRENTE: FullOCRPromptData<"0042"> = {
    code: "0042",
    type: "neutral",
    title: "Frente da CNH",
    illustration: "profileData",
    userDescription: "Para poder utilizar o cartão, é necessário uma imagem da frente da CNH.",
    userResolution: "Envie uma imagem da frente da CNH do portador do cartão.",
    internalDescription: "O usuário precisa enviar uma imagem da frente da CNH para avaliação junto a nextcode",
    additionalData: undefined
}