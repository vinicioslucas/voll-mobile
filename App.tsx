import { NativeBaseProvider, StatusBar } from 'native-base';
import { themes } from "./src/styles/themes";
import React, { useEffect } from "react";
import Routes from './src/Routes';


export default function App() {
  return (
    <NativeBaseProvider theme={themes}>
      <StatusBar backgroundColor={themes.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}