import Login from "./src/Login";
import { NativeBaseProvider, StatusBar } from 'native-base';
import { themes } from "./src/styles/themes";

export default function App() {
  return (
    <NativeBaseProvider theme={themes}>
      <StatusBar backgroundColor={themes.colors.blue[800]} />
      <Login />
    </NativeBaseProvider>
  );
}