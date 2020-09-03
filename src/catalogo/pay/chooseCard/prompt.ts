import { ChooseCardPromptData } from "../../../../codes";

export const DELETE_CARD: ChooseCardPromptData<"0100"> = {
		code: "0100",
		type: "destructive",
		title: "Excluir cartão",
		illustration: "paymentError",
		userDescription: "Nova validação de dados pode ser necessária.",
		userResolution: "Deseja mesmo excluir o cartão?",
		internalDescription: "O usuário está excluindo o cartão",
		additionalData: undefined,
	},
	CANNOT_DELETE_FROM_FIRESTORE: ChooseCardPromptData<"0101"> = {
		code: "0101",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "A requisição para a base de dados no Firebase gerou erro. Contate os devs",
		additionalData: undefined,
	},
	PENDING_MANUAL_APPROVAL: ChooseCardPromptData<"0102"> = {
		code: "0102",
		type: "destructive",
		title: "Pendente aprovação",
		illustration: "paymentError",
		userDescription: "Seu cartão está em análise.",
		userResolution: "Aguarde alguns minutos até a aprovação.",
		internalDescription: "O usuário tentou usar um cartão pendente de aprovação manual",
		additionalData: undefined,
	};
