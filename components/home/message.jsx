import React, { useState, useEffect, useRef } from 'react';

function Messenger() {
  const codeletters = "&#*+%?£@§$";
  const [messageIndex, setMessageIndex] = useState(0);
  const [currentLength, setCurrentLength] = useState(0);
  const [fadeBuffer, setFadeBuffer] = useState(false);
  const messages = [
    'This is a message, which can be long and all.',
    'This could be another message.',
    'Also short ones work!',
    'Cool.'
  ];
  const elementRef = useRef(null);

  // Function to generate random string
  const generateRandomString = length => {
    let random_text = '';
    while (random_text.length < length) {
      random_text += codeletters.charAt(Math.floor(Math.random() * codeletters.length));
    }
    return random_text;
  };

  // Animation function
  const animateIn = () => {
    if (currentLength < messages[messageIndex].length) {
      let newLength = currentLength + 2;
      if (newLength > messages[messageIndex].length) {
        newLength = messages[messageIndex].length;
      }
      setCurrentLength(newLength);

      const message = generateRandomString(newLength);
      elementRef.current.innerHTML = message;

      setTimeout(animateIn, 20);
    } else {
      setTimeout(animateFadeBuffer, 20);
    }
  };

  // Fade effect
  const animateFadeBuffer = () => {
    let newFadeBuffer = [];
    if (!fadeBuffer) {
      for (let i = 0; i < messages[messageIndex].length; i++) {
        newFadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: messages[messageIndex].charAt(i) });
      }
      setFadeBuffer(newFadeBuffer);
    } else {
      let doCycles = false;
      let message = '';

      newFadeBuffer = fadeBuffer.map(fader => {
        if (fader.c > 0) {
          doCycles = true;
          fader.c--;
          return { ...fader, c: fader.c };
        }
        return fader;
      });

      newFadeBuffer.forEach(fader => {
        message += fader.c > 0 ? codeletters.charAt(Math.floor(Math.random() * codeletters.length)) : fader.l;
      });

      elementRef.current.innerHTML = message;
      setFadeBuffer(newFadeBuffer);

      if (doCycles) {
        setTimeout(animateFadeBuffer, 50);
      } else {
        setTimeout(cycleText, 2000);
      }
    }
  };

  // Cycle through messages
  const cycleText = () => {
    let newIndex = messageIndex + 1;
    if (newIndex >= messages.length) {
      newIndex = 0;
    }
    setMessageIndex(newIndex);
    setCurrentLength(0);
    setFadeBuffer(false);
    elementRef.current.innerHTML = '';
    setTimeout(animateIn, 200);
  };

  // Initialize
  useEffect(() => {
    animateIn();
  }, []);

  return <div ref={elementRef} />;
}

export default Messenger;
