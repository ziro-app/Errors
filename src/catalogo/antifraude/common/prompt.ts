import { CommonAntifraudePromptData } from "../../../../"

export const 
NO_IMAGE: CommonAntifraudePromptData<"0075"> = {
    code: "0075",
    type: "destructive",
    title: "É preciso enviar uma imagem",
    illustration: "paymentError",
    userDescription: "",
    userResolution: "Tire uma foto ou escolha uma imagem salva em seu aparelho.",
    internalDescription: "O usuário clicou em próximo sem ter enviado foto alguma.",
    additionalData: undefined
},
CLOSE: CommonAntifraudePromptData<"0076"> = {
    code: "0076",
    type: "destructive",
    title: "Sair",
    illustration: "paymentError",
    userDescription: "É preciso concluir o upload de documento e selfie para utilizar esse cartão.",
    userResolution: "Tem certeza que deseja sair?",
    internalDescription: "O usuário está saindo do flow antifraude",
    additionalData: undefined
},
TOO_MANY_ATTEMPTS: CommonAntifraudePromptData<"0077"> = {
    code: "0077",
    type: "destructive",
    title: "Tentativas excedidas",
    illustration: "paymentError",
    userDescription: "Parece que o processo falhou muitas vezes seguidas.",
    userResolution: "Contate o suporte para continuar.",
    internalDescription: "O usuário tentou realizar o mesmo procedimento muitas vezes sem sucesso e por isso foi impossibilitado de continuar.",
    additionalData: undefined
},
CANNOT_SAVE_TO_FIRESTORE: CommonAntifraudePromptData<"0078"> = {
    code: "0078",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "paymentError",
    userDescription: "",
    userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a base de dados no Firebase gerou erro. Contate os devs",
    additionalData: undefined
},
CANNOT_UPLOAD_PICTURE_TO_STORAGE: CommonAntifraudePromptData<"0079"> = {
    code: "0079",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "paymentError",
    userDescription: "",
    userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
    internalDescription: "A requisição para o storage de imagens no Firebase gerou erro. Contate os devs",
    additionalData: undefined
}