import { ChooseCardWaitingData } from "../../../../codes";

export const SENDING_PAYMENT: ChooseCardWaitingData<"0120"> = {
	code: "0120",
	type: "destructive",
	title: "Realizando pagamento",
	illustration: "waiting",
	userDescription: "Aguarde enquanto realizamos o pagamento",
	internalDescription: "A transação está sendo realizada junto a zoop",
	additionalData: undefined,
};
