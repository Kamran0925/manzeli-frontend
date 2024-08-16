import { ThemeProvider } from "@mui/material/styles";
import AccountTypeSelectable from "./pages/AccoutTypeSelectable/AccountTypeSelectable";
import theme from "./theme/theme";
import IndividualAccountRegistration from "./pages/IndividualAccountRegistration/IndividualAccountRegistration";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IndividualAccountRegistration />
      {/* <AccountTypeSelectable />; */}
    </ThemeProvider>
  );
}

export default App;
