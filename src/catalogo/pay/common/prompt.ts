import { CommonPayPromptData } from "../../../../codes";

export const CLOSE: CommonPayPromptData<"0125"> = {
	code: "0125",
	type: "destructive",
	title: "Sair",
	illustration: "paymentError",
	userDescription: "Você perderá o pagamento.",
	userResolution: "Deseja retornar para a página principal?",
	internalDescription: "O usuário está saindo do flow Pay",
	additionalData: undefined,
};
