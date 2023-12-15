import { MDXProvider } from "@mdx-js/react";
import {
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Text,
	List,
	ListItem,
	Link,
	Alert,
} from "@nulogy/components";
import { COPY_WIDTH } from "./CONSTANTS";
import YesExample from "./YesExample";
import NoExample from "./NoExample";

export function CustomMDXProvider({ children }: { children: React.ReactNode }) {
	return (
		<MDXProvider
			components={{
				h1: (props) => (
					<Heading1
						fontSize="38px"
						maxWidth={COPY_WIDTH}
						m="0 auto"
						mb="x6"
						{...props}
					/>
				),
				h2: (props) => (
					<Heading2 maxWidth={COPY_WIDTH} mt="x6" mx="auto" {...props} />
				),
				h3: (props) => (
					<Heading3 maxWidth={COPY_WIDTH} mt="x4" mx="auto" {...props} />
				),
				h4: (props) => (
					<Heading4 maxWidth={COPY_WIDTH} mt="x4" mx="auto" {...props} />
				),
				YesExample: (props) => <YesExample {...props} />,
				NoExample: (props) => <NoExample {...props} />,
				p: (props) => (
					<Text maxWidth={COPY_WIDTH} mb="x4" mx="auto" {...props} />
				),
				blockquote: (props) => (
					<Text
						maxWidth={COPY_WIDTH}
						fontSize="24px"
						mb="x4"
						mx="auto"
						{...props}
					/>
				),
				ul: (props) => (
					<List maxWidth={COPY_WIDTH} mb="x4" mx="auto" {...props} />
				),
				li: (props) => <ListItem maxWidth={COPY_WIDTH} {...props} />,
				// @ts-ignore
				a: (props) => <Link maxWidth={COPY_WIDTH} {...props} />,
				table: (props) => (
					<table
						style={{
							width: "100%",
							textAlign: "left",
							maxWidth: COPY_WIDTH,
							margin: "32px auto",
						}}
						{...props}
					/>
				),
				Alert: (props) => (
					<Alert maxWidth={COPY_WIDTH} m="0 auto" mb="x4" {...props} />
				),
			}}
		>
			{children}
		</MDXProvider>
	);
}
