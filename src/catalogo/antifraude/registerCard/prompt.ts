import { RegisterCardPromptData } from "../../../../codes";

export const WRONG_TRANSACTION_VALUE: RegisterCardPromptData<"0001"> = {
	code: "0001",
	type: "destructive",
	title: "Valor incorreto",
	illustration: "paymentError",
	userDescription: "O valor informado não corresponde ao valor da transação enviada",
	userResolution: "Tente novamente, inserindo o valor que consta em sua fatura.",
	internalDescription: "O usuário está registrando um novo cartão",
	additionalData: undefined,
};
