import Cadastro from "./src/Cadastro";
import { NativeBaseProvider, StatusBar } from 'native-base';
import { themes } from "./src/styles/themes";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider theme={themes}>
      <StatusBar backgroundColor={themes.colors.blue[800]} />
      <Cadastro />
    </NativeBaseProvider>
  );
}