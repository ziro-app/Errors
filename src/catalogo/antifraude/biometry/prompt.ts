import { BiometryPromptData } from "../../../../codes";

export const DOC_TOO_MANY_FACES: BiometryPromptData<"0050"> = {
		code: "0050",
		type: "destructive",
		title: "Múltiplas pessoas",
		illustration: "paymentError",
		userDescription: "A foto do documento apresentou múltiplas pessoas.",
		userResolution: "Retorne à página anterior e envie um documento do titular do cartão.",
		internalDescription:
			"A resposta da nextcode indicou múltiplas pessoas na foto do documento. Deve haver apenas o rosto do titular do cartão.",
		additionalData: undefined,
	},
	SELFIE_TOO_MANY_FACES: BiometryPromptData<"0051"> = {
		code: "0051",
		type: "destructive",
		title: "Múltiplas pessoas",
		illustration: "paymentError",
		userDescription: "A foto apresentou múltiplas pessoas.",
		userResolution: "Envie uma nova foto contendo apenas o titular do cartão.",
		internalDescription:
			"A resposta da nextcode indicou múltiplas pessoas na foto. Deve haver apenas o rosto do titular do cartão.",
		additionalData: undefined,
	},
	DOC_NO_FACE: BiometryPromptData<"0052"> = {
		code: "0052",
		type: "destructive",
		title: "Rosto não encontrado",
		illustration: "paymentError",
		userDescription: "Documento deve mostrar o rosto do titular do cartão.",
		userResolution: "Retorne à página anterior e envie um documento com foto.",
		internalDescription:
			"A resposta da nextcode não contém nenhum objeto do tipo face, o que indica que a imagem não contém a foto de um rosto",
		additionalData: undefined,
	},
	SELFIE_NO_FACE: BiometryPromptData<"0053"> = {
		code: "0053",
		type: "destructive",
		title: "Rosto não encontrado",
		illustration: "paymentError",
		userDescription: "A foto enviada não contém um rosto.",
		userResolution: "Envie uma foto do rosto da mesma pessoa do documento.",
		internalDescription: "A resposta recebida da nextcode indica que não foi reconhecido um rosto na selfie",
		additionalData: undefined,
	},
	FAILED_COMPARISON: BiometryPromptData<"0054"> = {
		code: "0054",
		type: "destructive",
		title: "Foto com qualidade insuficiente",
		illustration: "paymentError",
		userDescription: "Não foi possível comparar a foto com o rosto do documento.",
		userResolution: "Retire bonés, óculos e encontre um lugar bem iluminado.",
		internalDescription:
			"A resposta recebida da nextcode indica que a comparação entre selfie e documento não foi possível.",
		additionalData: undefined,
	},
	NOT_IDENTICAL: BiometryPromptData<"0055"> = {
		code: "0055",
		type: "destructive",
		title: "Rosto diferente",
		illustration: "paymentError",
		userDescription: "O rosto da foto está diferente do rosto do documento.",
		userResolution: "Faça um novo envio de foto ou novo envio de documento.",
		internalDescription:
			"A resposta recebida da nextcode indica que não houve match entre selfie e rosto no documento.",
		additionalData: undefined,
	},
	CONFIDENCE_UNDER_60: BiometryPromptData<"0056"> = {
		code: "0056",
		type: "destructive",
		title: "Foto recusada",
		illustration: "paymentError",
		userDescription: "Não foi possivel aprovar seu cartão.",
		userResolution: "Entre em contato com o suporte para maiores detalhes.",
		internalDescription: "O score de confiança da nextcode ficou abaixo de 60. Isso indica uma rejeição da foto.",
		additionalData: undefined,
	},
	CONFIDENCE_UNDER_90: BiometryPromptData<"0057"> = {
		code: "0057",
		type: "destructive",
		title: "Análise adicional",
		illustration: "paymentError",
		userDescription: "Seu cartão foi para análise adicional.",
		userResolution: "Aguarde alguns minutos enquanto finalizamos.",
		internalDescription:
			"O score de confiança da nextcode ficou abaixo de 90. Isso indica a necessidade de aprovação manual do cartão.",
		additionalData: undefined,
	},
	UNRECOGNIZED_RESPONSE: BiometryPromptData<"0058"> = {
		code: "0058",
		type: "destructive",
		title: "Erro na análise",
		illustration: "paymentError",
		userDescription: "Ocorreu um erro ao tentar analisar a selfie.",
		userResolution: "Entre em contato com o suporte.",
		internalDescription:
			"A resposta recebida da nextcode é diferente da esperada e o código não está pronto para processa-la (necessário tipagem e lógica). Entre em contato com os devs",
		additionalData: undefined,
	},
	UNEXPECTED_CARD_STATUS: BiometryPromptData<"0059"> = {
		code: "0059",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "Aplicativo tentou mudar para um estado não previsto no mapa de estados. Contate devs",
		additionalData: undefined,
	},
	INITIAL_SELFIE: BiometryPromptData<"0060"> = {
		code: "0060",
		type: "neutral",
		title: "Foto do titular",
		illustration: "selfieOne",
		userDescription: "Agora envie uma foto da mesma pessoa do documento.",
		userResolution: "Enquadre bem e procure ambiente iluminado.",
		internalDescription:
			"O usuário precisa enviar uma selfie para comparação com o rosto no documento junto a nextcode",
		additionalData: undefined,
	},
	DOC_INSTEAD_SELFIE: BiometryPromptData<"0061"> = {
		code: "0061",
		type: "destructive",
		title: "Foto não é válida",
		illustration: "paymentError",
		userDescription: "Nesta etapa deve-se enviar uma foto do titular do cartão.",
		userResolution: "A foto do documento não é permitida.",
		internalDescription:
			"O usuário enviou a foto do documento ao invés de enviar uma selfie do titular.",
		additionalData: undefined,
	};
