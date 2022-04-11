import * as React from 'react'; // means import everything from react

const App = () => {
  const greeting = {
    title: 'React',
    description: 'Your component library for ...',
  };

  return (
    <div>
      <Welcome text={greeting}  />
    </div>
  ); 
};




const Welcome = ({ text }) => {
  return (
    <div>
      <Headline title={`Welcome to ${text.title}`} />
      <Description paragraph={text.description} />
    </div>
  );
};

const Headline = ({ title }) => <h1>{title}</h1>;
const Description = ({ paragraph }) => <p>{paragraph}</p>;

export default App;  
  