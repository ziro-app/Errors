import { RegisterCardWaitingData } from "../../../../codes";

export const REGISTERING_CARD: RegisterCardWaitingData<"0020"> = {
	code: "0020",
	type: "neutral",
	title: "Vinculando cartão",
	illustration: "waiting",
	userDescription: "Estamos vinculando seu cartão de forma segura. Uma transação de baixo valor será enviada para validá-lo",
	internalDescription: "O usuário está registrando um novo cartão",
	additionalData: undefined,
},
SENDING_TRANSACTION: RegisterCardWaitingData<"0021"> = {
	code: "0021",
	type: "neutral",
	title: "Enviando nova transação",
	illustration: "waiting",
	userDescription: "Uma nova transação de baixo valor está sendo enviada para sua fatura.",
	internalDescription: "O usuário está requisitando uma nova transação",
	additionalData: undefined,
};
