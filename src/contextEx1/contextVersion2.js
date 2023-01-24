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

const App = () => {
  const [currency, setCurrency] = React.useState('€');
  return (
    <CurrencyContext.Provider value={currency}>
      <button type="button" onClick={() => setCurrency('€')}>Euro</button>
      <button type="button" onClick={() => setCurrency('$')}>Dollar</button>
      <Books list={DATA} />
    </CurrencyContext.Provider>
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
  return (
    <CurrencyContext.Consumer>
      {(currency) => (
        <li>
          {item.title} - {item.price} {currency}
        </li>
      )}
    </CurrencyContext.Consumer>
  );
};
export default App;