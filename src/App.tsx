import Layout from "./components/properties/layout/Layout";
import { FormProvider } from "./context/FormContext";
// import Authentication from "./components/authentication/authentication";

function App() {
  return (
    <FormProvider>
      <Layout />
    </FormProvider>
  );
}

export default App;
