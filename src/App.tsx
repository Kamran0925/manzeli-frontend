import { ThemeProvider } from "@mui/material/styles";
import AccountTypeSelectable from './pages/AccoutTypeSelectable/AccountTypeSelectable';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AccountTypeSelectable />;
    </ThemeProvider>
  );
}

export default App;
