import { ThemeProvider } from "@mui/material/styles";
import AccountTypeSelectable from "./pages/AccoutTypeSelectable/AccountTypeSelectable";
import theme from "./theme/theme";
import { FormProvider } from "./context/FormContext";

import IndividualAccountRegistration from "./pages/IndividualAccountRegistration/IndividualAccountRegistration";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FormProvider>
        <IndividualAccountRegistration />
      </FormProvider>
      {/* <AccountTypeSelectable />; */}
    </ThemeProvider>
  );
}

export default App;
