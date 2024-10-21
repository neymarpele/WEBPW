import React, { useEffect, useState } from 'react';

const Tabs = ({ messages }) => {
  const [receivedMessages, setReceivedMessages] = useState([]);

  const handleMessage = (event) => {
    // Solo agrega mensajes de tipo string
    if (typeof event.data === 'string') {
      setReceivedMessages((prevMessages) => [...prevMessages, event.data]);
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div>
      <h2>Mensajes de otras pestañas:</h2>
      <ul>
        {[...messages, ...receivedMessages].map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;

