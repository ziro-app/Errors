import { NextCodePromptData } from "../../codes";

export const /* revisado */
	UNKNOWN_ERROR: NextCodePromptData<"1000", 418> = {
		code: "1000",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "A requisição para a NextCode retornou um erro desconhecido.",
		additionalData: { status: 418 }, // error 418 is not used on real HTTP transactions, so it can be mapped to an unknown error
	},
	/* revisado */
	BAD_REQUEST: NextCodePromptData<"1001", 400> = {
		code: "1001",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "A requisição para a NextCode retornou um erro de Bad Request.",
		additionalData: { status: 400 },
	},
	/* revisado */
	UNAUTHORIZED: NextCodePromptData<"1002", 401> = {
		code: "1002",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription:
			"A requisição para a NextCode retornou um erro de Unauthorized, possivelmente o request de login foi mal-sucedido.",
		additionalData: { status: 401 },
	},
	/* revisado */
	FORBIDDEN: NextCodePromptData<"1003", 403> = {
		code: "1003",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "A requisição para a NextCode retornou um erro de Forbidden, possivelmente a API mudou.",
		additionalData: { status: 403 },
	},
	/* revisado */
	NOT_FOUND: NextCodePromptData<"1004", 404> = {
		code: "1004",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "A requisição para a NextCode retornou um erro de Not Found, possivelmente a API mudou.",
		additionalData: { status: 404 },
	},
	/* revisado */
	METHOD_NOT_ALLOWED: NextCodePromptData<"1005", 405> = {
		code: "1005",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription:
			"A requisição para a NextCode retornou um erro de Method Not Allowed, possivelmente a API mudou.",
		additionalData: { status: 405 },
	},
	/* revisado */
	TIMEOUT: NextCodePromptData<"1006", 408> = {
		code: "1006",
		type: "destructive",
		title: "Ocorreu uma falha na conexão",
		illustration: "paymentError",
		userDescription: "A conexão falhou temporariamente.",
		userResolution: "Aguarde uns minutos e tente novamente. Se o erro persistir contate o suporte.",
		internalDescription:
			"A requisição para a NextCode retornou um erro de Timeout, verifique os dados adcionais para saber se o timeout foi causado pelas configurações da Ziro ou pela própria NextCode.",
		additionalData: { status: 408 },
	},
	/* revisado */
	GONE: NextCodePromptData<"1007", 410> = {
		code: "1007",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription:
			"A requisição para a NextCode retornou um erro de Gone, como nenhum dado é recuperado da NextCode, é possível que a API tenha mudado.",
		additionalData: { status: 410 },
	},
	/* revisado */
	UNPROCESSABLE_ENTITY: NextCodePromptData<"1008", 422> = {
		code: "1008",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription:
			"A requisição para a NextCode retornou um erro de Unprocessable Entity, o que indica que a imagem não pode ser processada.",
		additionalData: { status: 422 },
	},
	/* revisado */
	INTERNAL_SERVER_ERROR: NextCodePromptData<"1009", 500> = {
		code: "1009",
		type: "destructive",
		title: "Ocorreu uma falha na conexão",
		illustration: "paymentError",
		userDescription: "A conexão falhou temporariamente.",
		userResolution: "Aguarde uns minutos e tente novamente. Se o erro persistir contate o suporte.",
		internalDescription:
			"A requisição para a NextCode retornou um erro de Internal Server Error, o que indica um erro desconhecido da própria nextcode e que provavelmente não voltará a acontecer depois de um tempo.",
		additionalData: { status: 500 },
	},
	/* revisado */
	SERVICE_UNAVAILABLE: NextCodePromptData<"1010", 503> = {
		code: "1010",
		type: "destructive",
		title: "Ocorreu uma falha na conexão",
		illustration: "paymentError",
		userDescription: "A conexão falhou temporariamente.",
		userResolution: "Aguarde uns minutos e tente novamente. Se o erro persistir contate o suporte.",
		internalDescription:
			"A requisição para a NextCode retornou um erro de Service Unavailable, o que indica que os servidores da nextcode estão temporariamente indisponíveis, e deve se normalizar em pouco tempo.",
		additionalData: { status: 503 },
	};
