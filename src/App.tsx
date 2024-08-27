import { FormProvider } from "./context/FormContext";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/registration/registration";
import Login from "./components/login/Login";
import ForgotPassword from "./components/forgot-password/Forgot-Password";
import ResetPassword from "./components/reset-password/reset-password";

function App() {
  return (
    <FormProvider>
      <Routes>
        <Route path="/" Component={Registration} />
        <Route path="/login" Component={Login} />
        <Route path="/forgot-password" Component={ForgotPassword} />
        <Route path="/reset-password" Component={ResetPassword} />
      </Routes>
    </FormProvider>
  );
}

export default App;
