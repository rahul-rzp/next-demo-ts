import { Button } from "@razorpay/blade/components";
import styled from "styled-components";
import { Button as MuiButton } from '@mui/material'
import { Alert, AlertIcon, Button as ChakraButton, extendTheme, Heading, Input, InputGroup, InputLeftElement, ChakraProvider, theme as baseTheme, withDefaultColorScheme } from '@chakra-ui/react';



const primary = "#558728";
const secondary = "pink";

export const CButton = styled(ChakraButton)`
  background: orange;
  font-weight: 800;
  letter-spacing: 3px;
  border-radius: 4px;
  padding: 10px 15px;
`
export const PrimaryButton = styled(Button)`
  background-color: ${primary};
  border-color: ${primary};
  color: black;
  & > div {
    text-align: left;
  }
`
export const ButtonMui = styled(MuiButton)`
  background-color: ${secondary};
  border-color: ${secondary};
  color: black;
  & > div {
    text-align: left;
  }
`

export const SecondaryButton = styled.button`
  background-color: ${primary};
  border-color: ${primary};
  color: black;
  & > div {
    text-align: left;
  }
`

export const OtherButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props: any) => props.primary ? "palevioletred" : "white"};
  color: ${(props: any) => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
