import { NextCodePromptData } from "../../index"

export const 
UNKNOWN_ERROR: NextCodePromptData<"0100",418> = {
    code: "0100",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro desconhecido.",
    additionalData: { status: 418 }//error 418 is not used on real HTTP transactions, so it can be mapped to an unknown error
},
BAD_REQUEST: NextCodePromptData<"0101",400> = {
    code: "0101",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Bad Request.",
    additionalData: { status: 400 }
},
UNAUTHORIZED: NextCodePromptData<"0102",401> = {
    code: "0102",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Unauthorized, possivelmente o request de login foi mal-sucedido.",
    additionalData: { status: 401 }
},
FORBIDDEN: NextCodePromptData<"0103",403> = {
    code: "0103",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Forbidden, possivelmente a API mudou.",
    additionalData: { status: 403 }
},
NOT_FOUND: NextCodePromptData<"0104",404> = {
    code: "0104",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Not Found, possivelmente a API mudou.",
    additionalData: { status: 404 }
},
METHOD_NOT_ALLOWED: NextCodePromptData<"0105",405> = {
    code: "0105",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Method Not Allowed, possivelmente a API mudou.",
    additionalData: { status: 405 }
},
TIMEOUT: NextCodePromptData<"0106",408> = {
    code: "0106",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Timeout, verifique os dados adcionais para saber se o timeout foi causado pelas configurações da Ziro ou pela própria NextCode.",
    additionalData: { status: 408 }
},
GONE: NextCodePromptData<"0107",410> = {
    code: "0107",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Gone, como nenhum dado é recuperado da NextCode, é possível que a API tenha mudado.",
    additionalData: { status: 410 }
},
UNPROCESSABLE_ENTITY: NextCodePromptData<"0108",422> = {
    code: "0108",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Unprocessable Entity, o que indica que a imagem não pode ser processada.",
    additionalData: { status: 422 }
},
INTERNAL_SERVER_ERROR: NextCodePromptData<"0109",500> = {
    code: "0109",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Internal Server Error, o que indica um erro desconhecido da própria nextcode e que provavelmente não voltará a acontecer depois de um tempo.",
    additionalData: { status: 500 }
},
SERVICE_UNAVAILABLE: NextCodePromptData<"0110",503> = {
    code: "0110",
    type: "destructive",
    title: "Ocorreu um erro na solicitação",
    illustration: "profileData",
    userDescription: "Ocorreu um erro desconhecido ao fazer a solicitação ao servidor.",
    userResolution: "Tente novamente, se o erro persistir contate o suporte.",
    internalDescription: "A requisição para a NextCode retornou um erro de Service Unavailable, o que indica que os servidores da nextcode estão temporariamente indisponíveis, e deve se normalizar em pouco tempo.",
    additionalData: { status: 503 }
}