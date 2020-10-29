import * as antifraude from "./antifraude";
import { CatalogUnknownData } from "../../codes";
import { createPromptClassObject } from "../utils";

const UNKNOWN_ERROR: CatalogUnknownData<"0000"> = {
	code: "0000",
	type: "destructive",
	title: "Ocorreu um erro desconhecido",
	illustration: "noData",
	userDescription:
		"Nossos desenvolvedores já estão tentando encontrar uma solução para que isso não aconteça novamente.",
	userResolution: "Se o erro persistir entre em contato com nosso suporte.",
	internalDescription: "Ocorreu um erro que não está mapeado",
	additionalData: undefined,
};

export { antifraude };
export const prompt = createPromptClassObject({ UNKNOWN_ERROR });
