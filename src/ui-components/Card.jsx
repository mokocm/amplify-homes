/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Card(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="12px 10px 12px 10px"
      backgroundColor="rgba(255,255,255,1)"
      overflow="hidden"
      position="relative"
      gap="5px"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="left"
        shrink="0"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        fontSize="24px"
        lineHeight="28.125px"
        position="relative"
        fontWeight="700"
        direction="column"
        children="Title"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(79.00000289082527,79.00000289082527,79.00000289082527,1)"
        textAlign="left"
        shrink="0"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        fontSize="14px"
        lineHeight="16.40625px"
        position="relative"
        fontWeight="400"
        direction="column"
        children="Subtitle"
        {...getOverrideProps(overrides, "Flex.Text[1]")}
      ></Text>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(51.00000075995922,51.00000075995922,51.00000075995922,1)"
        textAlign="left"
        shrink="0"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        width="249px"
        fontSize="12px"
        lineHeight="14.0625px"
        position="relative"
        fontWeight="400"
        direction="column"
        children="Body&#xA;Body&#xA;Body Body Body Body Body "
        {...getOverrideProps(overrides, "Flex.Text[2]")}
      ></Text>
    </Flex>
  );
}
