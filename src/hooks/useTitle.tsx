import { useEffect } from "react";

const DEFAULT_TITLE = "Nulogy Content Guide";

export default function useTitleUpdate(currentTitle: string) {
	useEffect(() => {
		document.title = currentTitle
			? `${DEFAULT_TITLE} | ${currentTitle}`
			: DEFAULT_TITLE;

		return () => {
			document.title = DEFAULT_TITLE;
		};
	}, [currentTitle]);
}
