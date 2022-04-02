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
      <button onClick={handleToggle} type="button">
        Toggle
      </button>

      <input type='text' value={greeting} onChange={handleClick} />
      {isShow ? <Welcome text={greeting} /> : null}
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default App;