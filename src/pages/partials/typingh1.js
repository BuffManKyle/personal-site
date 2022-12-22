import React, { useState } from 'react';

function TypingH1() {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const typeText = () => {
    const words = ['Hello', 'World'];
    let i = 0;
    const interval = setInterval(() => {
      setText(text => text + words[i][text.length]);
      if (text.length === words[i].length) {
        i++;
        if (i === words.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }
    }, 50);
  };

  if (isTyping) {
    typeText();
  }

  return (
    <>
      <div>
        <h1>{text}</h1>
      </div>
      <div>
        <h1>{text}</h1>
      </div>
    </>
  );
}

export default TypingH1;