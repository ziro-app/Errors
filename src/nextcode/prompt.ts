import { NextCodePromptData } from "../../index"

export const 
UNKNOWN_ERROR: NextCodePromptData<"1000"> = {
    code: "1000",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro desconhecido."
},
BAD_REQUEST: NextCodePromptData<"1400"> = {
    code: "1400",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Bad Request."
},
UNAUTHORIZED: NextCodePromptData<"1401"> = {
    code: "1401",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Unauthorized, possivelmente o request de login foi mal-sucedido."
},
FORBIDDEN: NextCodePromptData<"1403"> = {
    code: "1403",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Forbidden, possivelmente a API mudou."
},
NOT_FOUND: NextCodePromptData<"1404"> = {
    code: "1404",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Not Found, possivelmente a API mudou."
},
METHOD_NOT_ALLOWED: NextCodePromptData<"1405"> = {
    code: "1405",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Method Not Allowed, possivelmente a API mudou."
},
TIMEOUT: NextCodePromptData<"1408"> = {
    code: "1408",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Timeout, verifique os dados adcionais para saber se o timeout foi causado pelas configurações da Ziro ou pela própria NextCode."
},
GONE: NextCodePromptData<"1410"> = {
    code: "1410",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Gone, como nenhum dado é recuperado da NextCode, é possível que a API tenha mudado."
},
UNPROCESSABLE_ENTITY: NextCodePromptData<"1422"> = {
    code: "1422",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Unprocessable Entity, o que indica que a imagem não pode ser processada."
},
INTERNAL_SERVER_ERROR: NextCodePromptData<"1500"> = {
    code: "1500",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Internal Server Error, o que indica um erro desconhecido da própria nextcode e que provavelmente não voltará a acontecer depois de um tempo."
},
SERVICE_UNAVAILABLE: NextCodePromptData<"1503"> = {
    code: "1503",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Service Unavailable, o que indica que os servidores da nextcode estão temporariamente indisponíveis, e deve se normalizar em pouco tempo."
}