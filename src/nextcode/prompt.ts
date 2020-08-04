import { NextCodePromptData } from "../../index"

export const 
UNKNOWN_ERROR: NextCodePromptData<"0100"> = {
    code: "0100",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro desconhecido."
},
BAD_REQUEST: NextCodePromptData<"0101"> = {
    code: "0101",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Bad Request."
},
UNAUTHORIZED: NextCodePromptData<"0102"> = {
    code: "0102",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Unauthorized, possivelmente o request de login foi mal-sucedido."
},
FORBIDDEN: NextCodePromptData<"0103"> = {
    code: "0103",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Forbidden, possivelmente a API mudou."
},
NOT_FOUND: NextCodePromptData<"0104"> = {
    code: "0104",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Not Found, possivelmente a API mudou."
},
METHOD_NOT_ALLOWED: NextCodePromptData<"0105"> = {
    code: "0105",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Method Not Allowed, possivelmente a API mudou."
},
TIMEOUT: NextCodePromptData<"0106"> = {
    code: "0106",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Timeout, verifique os dados adcionais para saber se o timeout foi causado pelas configurações da Ziro ou pela própria NextCode."
},
GONE: NextCodePromptData<"0107"> = {
    code: "0107",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Gone, como nenhum dado é recuperado da NextCode, é possível que a API tenha mudado."
},
UNPROCESSABLE_ENTITY: NextCodePromptData<"0108"> = {
    code: "0108",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Unprocessable Entity, o que indica que a imagem não pode ser processada."
},
INTERNAL_SERVER_ERROR: NextCodePromptData<"0109"> = {
    code: "0109",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Internal Server Error, o que indica um erro desconhecido da própria nextcode e que provavelmente não voltará a acontecer depois de um tempo."
},
SERVICE_UNAVAILABLE: NextCodePromptData<"0110"> = {
    code: "0110",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Service Unavailable, o que indica que os servidores da nextcode estão temporariamente indisponíveis, e deve se normalizar em pouco tempo."
}