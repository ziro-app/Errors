import { RegisterCardPromptData } from "../../../../codes";

export const WRONG_TRANSACTION_VALUE: RegisterCardPromptData<"0001"> = {
		code: "0001",
		type: "destructive",
		title: "Valor incorreto",
		illustration: "paymentError",
		userDescription: "O valor informado não corresponde ao valor da transação enviada",
		userResolution: "Tente novamente, inserindo o valor que consta em sua fatura.",
		internalDescription: "O usuário colocou o valor errado.",
		additionalData: undefined,
	},
	CONFIRM_TRANSACTION: RegisterCardPromptData<"0002"> = {
		code: "0002",
		type: "destructive",
		title: "Uma transação será enviada",
		illustration: "paymentError",
		userDescription:
			"Uma transação de pequeno valor será enviada e estornada. Utilize o valor para validar seu cartão.",
		userResolution: "Caso seu cartão expire após uma compra, utilize outro método de validação.",
		internalDescription: "O usuário está requisitando uma nova transação",
		additionalData: undefined,
	};
