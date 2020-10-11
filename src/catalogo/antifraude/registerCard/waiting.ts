import { RegisterCardWaitingData } from "../../../../codes";

export const REGISTERING_CARD: RegisterCardWaitingData<"0020"> = {
	code: "0020",
	type: "neutral",
	title: "Registrando cartão",
	illustration: "waiting",
	userDescription: "Seu cartão está sendo registrado, uma transação de baixo valor será enviada para validá-lo",
	internalDescription: "O usuário está registrando um novo cartão",
	additionalData: undefined,
};
