import { Box, Icon, Text } from "@nulogy/components";
import { COPY_WIDTH } from "./CONSTANTS";
import styled from "styled-components";

export const InlineBox = styled(Box)`
  ${Text}, p {
    display: inline;
  }
`;

export default function YesExample(props: any) {
  return (
    <InlineBox
      maxWidth={COPY_WIDTH}
      m="0 auto"
      mb="x2"
      fontStyle="italic"
      {...props}
    >
      <Box display="inline" position="relative" top="half">
        <Icon icon="check" color="green" mr="x2" />
      </Box>
      {props.children}
    </InlineBox>
  );
}
