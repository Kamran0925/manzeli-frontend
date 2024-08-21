import AccountTypeSelectable from "./pages/AccoutTypeSelectable/AccountTypeSelectable";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <AccountTypeSelectable />;
    </FormProvider>
  );
}

export default App;
