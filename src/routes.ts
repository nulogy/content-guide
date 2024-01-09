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

const routes = [
	{
		name: "Voice and tone",
		links: [
			{
				name: "Overview",
				title: "Voice and tone",
				Component: VoiceAndTone,
				path: "/voice-and-tone/overview",
			},
			{
				Component: Voice,
				name: "Voice",
				path: "/voice-and-tone/voice",
			},
			{
				Component: Tone,
				name: "Tone",
				path: "/voice-and-tone/tone",
			},
		],
	},
	{
		name: "Grammar and mechanics",
		links: [
			{
				Component: Tenses,
				name: "Tenses",
				path: "/grammar-and-mechanics/tenses",
			},
			{
				name: "Capitalization",
				Component: Capitalization,

				path: "/grammar-and-mechanics/capitalization",
			},
			{
				Component: Headings,
				name: "Headings",
				path: "/grammar-and-mechanics/headings",
			},
			{
				Component: Lists,
				name: "Lists",
				path: "/grammar-and-mechanics/lists",
			},
			{
				Component: Numbers,
				name: "Numbers",
				path: "/grammar-and-mechanics/numbers",
			},
			{
				Component: ContractionsAndAbbreviations,
				name: "Contractions and abbreviations",
				path: "/grammar-and-mechanics/contractions-and-abbreviations",
			},
			{
				Component: Symbols,
				name: "Symbols",
				path: "/grammar-and-mechanics/symbols",
			},
			{
				Component: DatesAndTimes,
				name: "Dates and times",
				path: "/grammar-and-mechanics/dates-and-times",
			},
			{
				Component: WebElements,
				name: "Web elements",
				path: "/grammar-and-mechanics/web-elements",
			},
		],
	},
	{
		name: "Writing for translation",
		links: [
			{
				Component: WritingForTranslation,
				name: "Overview",
				title: "Writing for translation",
				path: "/writing-for-translation/overview",
			},
			{
				Component: BeConcise,
				name: "Be concise",
				path: "/writing-for-translation/be-concise",
			},
			{
				name: "Be clear",
				Component: BeClear,

				path: "/writing-for-translation/be-clear",
			},
			{
				name: "Use active voice",
				Component: UseActiveVoice,

				path: "/writing-for-translation/use-active-voice",
			},
			{
				name: "Use positive voice",
				Component: UsePositiveVoice,

				path: "/writing-for-translation/use-positive-voice",
			},
		],
	},
];

export default routes;
