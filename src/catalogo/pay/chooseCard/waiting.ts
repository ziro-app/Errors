import { ChooseCardWaitingData } from "../../../../codes";

export const DELETING_CARD: ChooseCardWaitingData<"0120"> = {
	code: "0120",
	type: "destructive",
	title: "Excluindo cartão",
	illustration: "paymentError",
	userDescription: "Aguarde a exclusão do cartão no sistema.",
	internalDescription: "O usuário deve aguardar a finalização da requisição de exclusão do cartão no sistema",
	additionalData: undefined,
};
