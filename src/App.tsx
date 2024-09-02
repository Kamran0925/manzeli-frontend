import { FormProvider } from "./context/FormContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./components/authentication/authentication";

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<Authentication />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
