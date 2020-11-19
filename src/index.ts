import packageJson from "../package.json";

export * from "./ZiroMessage";
export * from "./ZiroPromptMessage";
export * from "./ZiroWaitingMessage";

fetch("https://cors-anywhere.herokuapp.com/https://registry.npmjs.org/ziro-messages", { mode: "no-cors" })
	.then((r) => r.json())
	.then((data) => {
		const current = packageJson.version;
		const { latest } = data["dist-tags"];
		if (current < latest)
			// eslint-disable-next-line no-console
			console.error("YOU ARE RUNNING AN OUTDATED VERSION OF ZIRO-MESSAGES, PLEASE UPDATE", { current, latest });
	})
	.catch(() => null);
