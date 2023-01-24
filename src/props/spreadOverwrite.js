import * as React from 'react';

const App = () => {
  const title = 'React';
  const description = 'Your component library for ...';

  return (
    <div>
      <Welcome title={title} description={description} />
    </div>
  );
};

const Welcome = (props) => {
  return (
    <div style={{
      border: '1px solid black',
      height: '200px',
      width: '400px',
    }}>
      <Message   {...props} title='Can  overwrite' />
      <Message   title='Can\t overwrite' {...props}  />  {/* it will overwrite */}
    </div>
  );
};

const Message = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

export default App;