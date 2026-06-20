import { useState, useEffect } from 'react';

interface TypewriterOptions {
  speed?: number;     // ms per character when typing
  deleteSpeed?: number; // ms per character when deleting
  pause?: number;     // ms to pause when word is complete
}

export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { speed = 90, deleteSpeed = 45, pause = 2200 } = options;

  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    if (isPausing) return;

    const current = words[wordIndex];

    // Finished typing → pause before deleting
    if (!deleting && charIndex === current.length) {
      setIsPausing(true);
      const pauseTimer = setTimeout(() => {
        setIsPausing(false);
        setDeleting(true);
      }, pause);
      return () => clearTimeout(pauseTimer);
    }

    // Finished deleting → move to next word
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((i) => (deleting ? i - 1 : i + 1));
    }, deleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex, isPausing, words, speed, deleteSpeed, pause]);

  useEffect(() => {
    setDisplayed(words[wordIndex].substring(0, charIndex));
  }, [charIndex, wordIndex, words]);

  return displayed;
}
