import { useState} from 'react';

const App = () => {
  const [isShow, setShow] = useState(true);
  const [greeting, setGreeting] = useState('Hello');

  const handleClick = (e) => {
    setGreeting(e.target.value);
  }

  const handleToggle = () => {
    setShow(!isShow);
  };

  return (
    <div>
      <Button label="Toggle" onClick={handleToggle} />

      <input type='text' value={greeting} onChange={handleClick} />
      {isShow ? <Welcome text={greeting} /> : null}
    </div>
  );
};

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default App;
