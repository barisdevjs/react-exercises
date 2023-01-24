import React from "react";
import { CurrencyContext } from "./contextEx1/contextGlobal";

const DATA = [
  {
    id: '1',
    title: 'The Road to React',
    price: 19.99,
  },
  {
    id: '2',
    title: 'The Road to GraphQL',
    price: 29.99,
  },
];

const CURRENCIES = {
  Euro: {
    code: 'EUR',
    label: 'Euro',
    conversionRate: 1, // base conversion rate
  },
  Usd: {
    code: 'USD',
    label: 'US Dollar',
    conversionRate: 1.19,
  },
};

const App = () => {
  const [currency, setCurrency] = React.useState(CURRENCIES.Euro);
  return (
    <CurrencyContext.Provider value={currency}>
      <CurrencyButtons onChange={setCurrency} />
      <Books list={DATA} />
    </CurrencyContext.Provider>
  );
};

const CurrencyButtons = ({ onChange }) => {
  return Object.values(CURRENCIES).map((item) => (
    <CurrencyButton key={item.label} onClick={() => onChange(item)}>
      {item.label}
    </CurrencyButton>
  ));
};

const CurrencyButton = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

const Books = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </ul>
  );
};

const Book = ({ item }) => {
  const currency = React.useContext(CurrencyContext);

  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.code,
  }).format(item.price * currency.conversionRate);

  return (
    <li>
      {item.title} - {price} 
    </li>
  );
};
export default App;