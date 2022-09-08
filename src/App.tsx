import "./styles.css";
import { PersonalInfoSection } from "./components/personal-info-section";
import { ValueCalculationsSection } from "./components/value-calculation-section";
import { ActionsSection } from "./components/actions-section";
import { FormDataProvider } from "./FormDataProvider";

const Form = () => {
  return (
    <div className="App">
      <PersonalInfoSection />
      <ValueCalculationsSection />
      <ActionsSection />
    </div>
  );
};

export default function App() {
  return (
    <FormDataProvider>
      <Form />
    </FormDataProvider>
  );
}
