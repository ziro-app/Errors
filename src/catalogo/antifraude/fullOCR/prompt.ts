import { FullOCRPromptData } from "../../../../codes";

export const /* revisado */
	INITIAL_DOCUMENT: FullOCRPromptData<"0025"> = {
		code: "0025",
		type: "neutral",
		title: "Documento do titular",
		illustration: "profileData",
		userDescription: "Para sua segurança, o vendedor solicitou a validação dos dados do titular.",
		userResolution: "Envie uma imagem do documento do titular do cartão.",
		internalDescription: "O usuário precisa enviar uma imagem do documento para avaliação junto a nextcode",
		additionalData: undefined,
	},
	/* revisado */
	INITIAL_RG_FRENTE: FullOCRPromptData<"0026"> = {
		code: "0026",
		type: "neutral",
		title: "Frente do RG",
		illustration: "profileData",
		userDescription: "",
		userResolution: "Envie uma imagem da frente do RG do titular do cartão.",
		internalDescription: "O usuário precisa enviar uma imagem da frente do RG para avaliação junto a nextcode",
		additionalData: undefined,
	},
	/* revisado */
	INITIAL_RG_VERSO: FullOCRPromptData<"0027"> = {
		code: "0027",
		type: "neutral",
		title: "Verso do RG",
		illustration: "profileData",
		userDescription: "",
		userResolution: "Envie uma imagem do verso do RG do titular do cartão.",
		internalDescription: "O usuário precisa enviar uma imagem do verso do RG para avaliação junto a nextcode",
		additionalData: undefined,
	},
	/* revisado */
	DOC_READABILITY: FullOCRPromptData<"0028"> = {
		code: "0028",
		type: "neutral",
		title: "Documento legível",
		illustration: "profileData",
		userDescription: "O documento precisa estar legível para que as informações sejam extraídas.",
		userResolution: "Aproxime bem a câmera e retire-o do plástico.",
		internalDescription:
			"O usuário precisa enviar uma imagem de boa qualidade para que a nextcode possa extrair as informações",
		additionalData: undefined,
	},
	/* revisado */
	MISSING_EXP_DATE: FullOCRPromptData<"0029"> = {
		code: "0029",
		type: "destructive",
		title: "Data de expedição não encontrada",
		illustration: "paymentError",
		userDescription: "Não foi possível extrair a data de expedição do documento.",
		userResolution: "Envie uma nova imagem do documento. Aproxime bem a câmera e retire qualquer plástico.",
		internalDescription: "A resposta da nextcode não contém uma data de expedição válida para esse documento",
		additionalData: undefined,
	},
	/* revisado */
	EXPIRED_DOC: FullOCRPromptData<"0030"> = {
		code: "0030",
		type: "destructive",
		title: "Documento expirado",
		illustration: "paymentError",
		userDescription: "O documento possui data de expedição muito antiga.",
		userResolution: "Envie uma imagem de um documento mais recente.",
		internalDescription:
			"O algoritmo de antifraude detectou que a data de expedição excede aquilo que foi estipulado no código, consulte um dev para saber mais",
		additionalData: undefined,
	},
	/* revisado */
	NO_FACE_OBJECT: FullOCRPromptData<"0031"> = {
		code: "0031",
		type: "destructive",
		title: "Rosto não encontrado",
		illustration: "paymentError",
		userDescription: "Documento deve mostrar o rosto do titular do cartão.",
		userResolution: "Envie um documento com foto. Aproxime bem a câmera e retire qualquer plástico.",
		internalDescription:
			"A resposta da nextcode não contém nenhum objeto do tipo face, o que indica que a imagem não contém a foto de um rosto",
		additionalData: undefined,
	},
	/* revisado */
	CANNOT_ANALYZE_FACE: FullOCRPromptData<"0032"> = {
		code: "0032",
		type: "destructive",
		title: "Foto com qualidade insuficiente",
		illustration: "paymentError",
		userDescription: "Qualidade insuficiente para análise do rosto.",
		userResolution:
			"Envie uma nova imagem. Melhore iluminação, evite reflexos, aproxime bem a câmera e retire qualquer plástico.",
		internalDescription:
			"A resposta da nextcode contém um erro no objeto face, o que indica qua a face não pode ser analisada devido à baixa qualidade e portanto não poderá ser comparada com a selfie",
		additionalData: undefined,
	},
	/* revisado */
	UNRECOGNIZED_FACE_OBJECT: FullOCRPromptData<"0033"> = {
		code: "0033",
		type: "destructive",
		title: "Erro na análise do rosto",
		illustration: "paymentError",
		userDescription: "Ocorreu um erro ao tentar analisar o documento.",
		userResolution: "Entre em contato com o suporte.",
		internalDescription:
			"A análise do rosto gerou uma resposta da nextcode contendo um objeto desconhecido (necessário tipagem e lógica). Entre em contato com os devs",
		additionalData: undefined,
	},
	/* revisado */
	FIRST_NAME_MISMATCH: FullOCRPromptData<"0034"> = {
		code: "0034",
		type: "destructive",
		title: "Documento não pertence ao titular",
		illustration: "paymentError",
		userDescription: "O documento enviado não pertence ao titular do cartão.",
		userResolution: "Envie um documento no mesmo nome que o do titular do cartão.",
		internalDescription: "O primeiro nome no documento é diferente do primeiro nome no cartão",
		additionalData: undefined,
	},
	/* revisado */
	LAST_NAME_MISMATCH: FullOCRPromptData<"0035"> = {
		code: "0035",
		type: "destructive",
		title: "Documento não pertence ao titular",
		illustration: "paymentError",
		userDescription: "O documento enviado não pertence ao titular do cartão.",
		userResolution: "Envie um documento no mesmo nome que o do titular do cartão.",
		internalDescription: "O sobrenome no documento é diferente do sobrenome no cartão",
		additionalData: undefined,
	},
	/* revisado */
	UNRECOGNIZED_RESPONSE: FullOCRPromptData<"0036"> = {
		code: "0036",
		type: "destructive",
		title: "Erro na análise",
		illustration: "paymentError",
		userDescription: "Ocorreu um erro ao tentar analisar o documento.",
		userResolution: "Entre em contato com o suporte.",
		internalDescription:
			"A resposta recebida da nextcode é diferente da esperada e o código não está pronto para processa-la (necessário tipagem e lógica). Entre em contato com os devs",
		additionalData: undefined,
	},
	/* revisado */
	UNKNOWN_DOCUMENT_TYPE: FullOCRPromptData<"0037"> = {
		code: "0037",
		type: "destructive",
		title: "Erro na análise do tipo",
		illustration: "paymentError",
		userDescription: "Ocorreu um erro no reconhecimento do tipo do documento.",
		userResolution: "Entre em contato com o suporte.",
		internalDescription:
			"A resposta recebida da nextcode categorizou o documento como um formato diferente do esperado",
		additionalData: undefined,
	},
	/* revisado */
	SELFIE_TYPE: FullOCRPromptData<"0038"> = {
		code: "0038",
		type: "destructive",
		title: "Upload do documento",
		illustration: "paymentError",
		userDescription: "Parece que você enviou uma selfie. Imagem deve ser de um documento.",
		userResolution: "Envie um documento pertencente ao titular do cartão.",
		internalDescription:
			"O usuário tentou enviar uma selfie no momento que deveria ter enviado uma foto do documento.",
		additionalData: undefined,
	},
	SAME_DOC_RGF: FullOCRPromptData<"0039"> = {
		code: "0039",
		type: "destructive",
		title: "Upload do documento",
		illustration: "paymentError",
		userDescription: "Parece que você enviou uma selfie. Imagem deve ser de um documento.",
		userResolution: "Envie um documento pertencente ao titular do cartão.",
		internalDescription:
			"O usuário tentou enviar uma selfie no momento que deveria ter enviado uma foto do documento.",
		additionalData: undefined,
	},
	SAME_DOC_RGV: FullOCRPromptData<"0040"> = {
		code: "0040",
		type: "destructive",
		title: "Upload do documento",
		illustration: "paymentError",
		userDescription: "Parece que você enviou uma selfie. Imagem deve ser de um documento.",
		userResolution: "Envie um documento pertencente ao titular do cartão.",
		internalDescription:
			"O usuário tentou enviar uma selfie no momento que deveria ter enviado uma foto do documento.",
		additionalData: undefined,
	},
	SAME_DOC_CNHV: FullOCRPromptData<"0041"> = {
		code: "0041",
		type: "destructive",
		title: "Upload do documento",
		illustration: "paymentError",
		userDescription: "Parece que você enviou uma selfie. Imagem deve ser de um documento.",
		userResolution: "Envie um documento pertencente ao titular do cartão.",
		internalDescription:
			"O usuário tentou enviar uma selfie no momento que deveria ter enviado uma foto do documento.",
		additionalData: undefined,
	},
	/* revisado */
	INITIAL_CNH_FRENTE: FullOCRPromptData<"0042"> = {
		code: "0042",
		type: "neutral",
		title: "Frente da CNH",
		illustration: "profileData",
		userDescription: "",
		userResolution: "Envie uma imagem da frente da CNH do titular do cartão.",
		internalDescription: "O usuário precisa enviar uma imagem da frente da CNH para avaliação junto a nextcode",
		additionalData: undefined,
	},
	PROBABILITY_UNDER_60: FullOCRPromptData<"0043"> = {
		code: "0043",
		type: "destructive",
		title: "Cartão recusado",
		illustration: "profileData",
		userDescription: "Não foi possivel aprovar seu cartão.",
		userResolution: "Entre em contato com o suporte para maiores detalhes.",
		internalDescription: "O score de confiança da nextcode ficou abaixo de 60. Isso indica uma rejeição do cartão.",
		additionalData: undefined,
	},
	PROBABILITY_UNDER_90: FullOCRPromptData<"0044"> = {
		code: "0044",
		type: "destructive",
		title: "Análise adicional",
		illustration: "profileData",
		userDescription: "Seu cartão foi para análise adicional.",
		userResolution: "Aguarde alguns minutos enquanto finalizamos.",
		internalDescription: "O score de confiança da nextcode ficou abaixo de 90. Isso indica a necessidade de aprovação manual do cartão.",
		additionalData: undefined,
	};
