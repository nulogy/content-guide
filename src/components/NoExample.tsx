import { Box, Icon } from "@nulogy/components";
import { COPY_WIDTH } from "./CONSTANTS";
import { InlineBox } from "./YesExample";

export default function NoExample(props: any) {
  return (
    <InlineBox
      maxWidth={COPY_WIDTH}
      m="0 auto"
      mb="x2"
      fontStyle="italic"
      {...props}
    >
      <Box display="inline" position="relative" top="half">
        <Icon icon="close" color="red" mr="x2" />
      </Box>
      {props.children}
    </InlineBox>
  );
}
