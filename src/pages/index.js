import React from "react";
import { Box, Text, Heading1, List, ListItem } from "@nulogy/components";
import Layout from "../components/Layout";
import { COPY_WIDTH } from "../components/CONSTANTS";

const IndexPage = ({ location }) => {
  return (
    <>
      <Layout noPadding location={location}>
        <Box maxWidth={COPY_WIDTH} mx="auto" mt="x6">
          <Heading1>Nulogy content guide</Heading1>
          <Text mb="x3">
            The purpose of this guide is to equip Nulogy employees with the
            tools and guidance necessary to approach writing copy in a
            consisitent manner. This will result in copy across our
            applicatioins being written in the voice of the company, not the
            voice of the individual.
          </Text>
          <Text mb="x3">
            This guide addresses how to write in Nulogy’s voice, how to identify
            the proper tone for a given situation, the grammar rules we adhere
            to, and best practices for writing for translation and
            accessibility. When applied across our organization, this will
            improve the experiences of our customers on a global platform.
          </Text>
          <Text mb="x3">
            This guide can be used for any type of writing meant to be read with
            the voice of the organization. This includes, but is not limited to:
          </Text>
          <List>
            <ListItem>Copywriting</ListItem>
            <ListItem>Marketing collateral</ListItem>
            <ListItem>In-application messages</ListItem>
            <ListItem>Training materials</ListItem>
            <ListItem>Standard Operating Procedures (SOPs)</ListItem>
            <ListItem>Help desk articles</ListItem>
          </List>
        </Box>
      </Layout>
    </>
  );
};

export default IndexPage;
