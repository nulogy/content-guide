import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/index.mdx";
import VoiceAndTone from "./pages/voice-and-tone/overview.mdx";
import Voice from "./pages/voice-and-tone/voice.mdx";
import Tone from "./pages/voice-and-tone/tone.mdx";
import Tenses from "./pages/grammar-and-mechanics/tenses.mdx";
import Capitalization from "./pages/grammar-and-mechanics/capitalization.mdx";
import Headings from "./pages/grammar-and-mechanics/headings.mdx";
import Lists from "./pages/grammar-and-mechanics/lists.mdx";
import Numbers from "./pages/grammar-and-mechanics/numbers.mdx";
import ContractionsAndAbbreviations from "./pages/grammar-and-mechanics/contractions-and-abbreviations.mdx";
import Symbols from "./pages/grammar-and-mechanics/symbols.mdx";
import DatesAndTimes from "./pages/grammar-and-mechanics/dates-and-times.mdx";
import WebElements from "./pages/grammar-and-mechanics/web-elements.mdx";
import WritingForTranslation from "./pages/writing-for-translation/overview.mdx";
import BeConcise from "./pages/writing-for-translation/be-concise.mdx";
import BeClear from "./pages/writing-for-translation/be-clear.mdx";
import UseActiveVoice from "./pages/writing-for-translation/use-active-voice.mdx";
import UsePositiveVoice from "./pages/writing-for-translation/use-positive-voice.mdx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <div>Page not found</div>,
		children: [
			{
				Component: Index,
				path: "/",
			},
			{
				Component: VoiceAndTone,
				path: "/voice-and-tone/overview",
			},
			{
				Component: VoiceAndTone,
				path: "/voice-and-tone/overview",
			},
			{
				Component: Voice,
				path: "/voice-and-tone/voice",
			},
			{
				Component: Tone,
				path: "/voice-and-tone/tone",
			},
			{
				Component: Tenses,
				path: "/grammar-and-mechanics/tenses",
			},
			{
				Component: Capitalization,
				path: "/grammar-and-mechanics/capitalization",
			},
			{
				Component: Headings,
				path: "/grammar-and-mechanics/headings",
			},
			{
				Component: Lists,
				path: "/grammar-and-mechanics/lists",
			},
			{
				Component: Numbers,
				path: "/grammar-and-mechanics/numbers",
			},
			{
				Component: ContractionsAndAbbreviations,
				path: "/grammar-and-mechanics/contractions-and-abbreviations",
			},
			{
				Component: Symbols,
				path: "/grammar-and-mechanics/symbols",
			},
			{
				Component: DatesAndTimes,
				path: "/grammar-and-mechanics/dates-and-times",
			},
			{
				Component: WebElements,
				path: "/grammar-and-mechanics/web-elements",
			},
			{
				Component: WritingForTranslation,
				path: "/writing-for-translation/overview",
			},
			{
				Component: BeConcise,
				path: "/writing-for-translation/be-concise",
			},
			{
				Component: BeClear,
				path: "/writing-for-translation/be-clear",
			},
			{
				Component: UseActiveVoice,
				path: "/writing-for-translation/use-active-voice",
			},
			{
				Component: UsePositiveVoice,
				path: "/writing-for-translation/use-positive-voice",
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
