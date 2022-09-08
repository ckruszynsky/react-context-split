import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer
} from "react";
import { Country } from "./select-country-library";

type State = {
  name: string;
  country: Country;
  discount: number;
};

type API = {
  onNameChange: (name: string) => void;
  onCountryChange: (name: Country) => void;
  onDiscountChange: (price: number) => void;
  onSave: () => void;
};

type Actions =
  | { type: "updateName"; name: string }
  | { type: "updateCountry"; country: Country }
  | { type: "updateDiscount"; discount: number };

const FormDataContext = createContext<State>({} as State);
const FormAPIContext = createContext<API>({} as API);

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.name };
    case "updateDiscount":
      return { ...state, discount: action.discount };
    case "updateCountry":
      return { ...state, country: action.country };
  }
};

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {} as State);

  const api = useMemo(() => {
    const onSave = () => {
      // send the request to the backend here
    };

    const onDiscountChange = (discount: number) => {
      dispatch({ type: "updateDiscount", discount });
    };

    const onNameChange = (name: string) => {
      dispatch({ type: "updateName", name });
    };

    const onCountryChange = (country: Country) => {
      dispatch({ type: "updateCountry", country });
    };

    return {
      onSave,
      onDiscountChange,
      onNameChange,
      onCountryChange
    };
  }, []);

  return (
    <FormAPIContext.Provider value={api}>
      <FormDataContext.Provider value={state}>
        {children}
      </FormDataContext.Provider>
    </FormAPIContext.Provider>
  );
};

export const useFormState = () => useContext(FormDataContext);
export const useFormAPI = () => useContext(FormAPIContext);
