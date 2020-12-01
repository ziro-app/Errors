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
		title: "Vendedor não habilitado",
		illustration: "paymentError",
		userDescription: "O vendedor não está habilitado para transacionar na Ziro.",
		userResolution: "Solicite ao vendedor que habilite seu plano de venda.",
		internalDescription: "O vendedor está cadastrado com um plano de venda inválido.",
		additionalData: undefined,
	};
