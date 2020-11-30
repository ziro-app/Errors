import { CheckoutPromptData } from "../../../../codes";

export const PAYMENT_SUCCESS: CheckoutPromptData<"0150"> = {
		code: "0150",
		type: "success",
		title: "Pagamento realizado",
		illustration: "paymentSuccess",
		userDescription: "O pagamento foi realizado com sucesso",
		userResolution: "",
		internalDescription: "O pagamento foi bem sucedido",
		additionalData: undefined,
	},
	NO_INSTALLMENTS: CheckoutPromptData<"0151"> = {
		code: "0151",
		type: "destructive",
		title: "Nenhum parcelamento",
		illustration: "noData",
		userDescription: "Nenhum parcelamento foi escolhido.",
		userResolution: "Para continuar é necessário escolher o parcelamento.",
		internalDescription: "O usuario tentou pagar antes de escolher o parcelamento",
		additionalData: undefined,
	},
	ERROR_CREATING_SPLIT_OBJECT: CheckoutPromptData<"0152"> = {
		code: "0152",
		type: "destructive",
		title: "Ocorreu um erro no pagamento",
		illustration: "noData",
		userDescription: "Fique tranquilo, você não foi cobrado!",
		userResolution: "Aconteceu um erro de split, contate o suporte!",
		internalDescription: "As porcentagens do split de pagamento não foram encontradas",
		additionalData: undefined,
	};
