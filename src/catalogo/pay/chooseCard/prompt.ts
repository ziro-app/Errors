import { ChooseCardPromptData } from "../../../../codes";

export const DELETE_CARD: ChooseCardPromptData<"0100"> = {
		code: "0100",
		type: "destructive",
		title: "DELETE_CARD",
		illustration: "paymentError",
		userDescription: "DELETE_CARD",
		userResolution: "DELETE_CARD",
		internalDescription: "DELETE_CARD",
		additionalData: undefined,
	},
	CANNOT_DELETE_FROM_FIRESTORE: ChooseCardPromptData<"0101"> = {
		code: "0101",
		type: "destructive",
		title: "CANNOT_DELETE_FROM_FIRESTORE",
		illustration: "paymentError",
		userDescription: "CANNOT_DELETE_FROM_FIRESTORE",
		userResolution: "CANNOT_DELETE_FROM_FIRESTORE",
		internalDescription: "CANNOT_DELETE_FROM_FIRESTORE",
		additionalData: undefined,
	};
