import { FormProvider } from "./context/FormContext";
import Authentication from "./components/authentication/authentication";

function App() {
  return (
    <FormProvider>
      <Authentication />
    </FormProvider>
  );
}

export default App;
