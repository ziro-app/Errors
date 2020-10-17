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
};
