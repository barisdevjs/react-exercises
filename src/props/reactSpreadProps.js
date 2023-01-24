import * as React from 'react';

const App = () => {
  const greeting = {
    title: 'React with Spread Operator',
    description: 'Your component library for ...',
  };

  return (
    <div>
      <Welcome {...greeting} />
    </div>
  );
};

const Welcome = ({ title, description }) => {
  return (
    <div>
      <Headline title={`Welcome to ${title}`} />
      <Description paragraph={description} />
    </div>
  );
};

const Headline = ({ title }) => <h1>{title}</h1>;
const Description = ({ paragraph }) => <p>{paragraph}</p>;

export default App;