import { FormProvider } from "./context/FormContext";
import Registration from "./components/registration/registration";

function App() {
  return (
    <FormProvider>
      <Registration />
    </FormProvider>
  );
}

export default App;
