import { RegisterCardWaitingData } from "../../../../codes";

export const REGISTERING_CARD: RegisterCardWaitingData<"0020"> = {
	code: "0020",
	type: "neutral",
	title: "Vinculando cartão",
	illustration: "waiting",
	userDescription: "Estamos vinculando seu cartão de forma segura. Uma transação de baixo valor será enviada para validá-lo",
	internalDescription: "O usuário está registrando um novo cartão",
	additionalData: undefined,
};
