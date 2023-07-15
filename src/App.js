import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Header title="My React Application" />
      <Content />
      <Footer />
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(document.getElementById('text-area').value);
  };

  return (
    <div>
      <textarea id="text-area" />
      <button onClick={handleButtonClick}>Display Text</button>
      {displayText && <p>{displayText}</p>}
    </div>
  );
}

function Footer() {
  return <p>Created by Sreekanto Biswas</p>;
}

export default App;
