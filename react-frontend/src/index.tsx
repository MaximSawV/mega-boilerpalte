import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render (
	<StrictMode>
		<div>Hey</div>
	</StrictMode>
)