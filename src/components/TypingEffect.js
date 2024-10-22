import React, { useState, useEffect, useCallback } from 'react';
import './TypingEffect.css'; // Ensure you have the CSS styles in this file

const TypingEffect = ({ segments, typingSpeed = 100, delay = 2000 }) => {
  const [displayedTexts, setDisplayedTexts] = useState([]);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);

  const typeText = useCallback(() => {
    if (currentSegmentIndex >= segments.length) return; // Stop if all segments are done

    const { text, color } = segments[currentSegmentIndex];
    let index = 0;

    // Ensure the current segment is initialized in the array
    setDisplayedTexts(prev => {
      const updatedTexts = [...prev];
      if (updatedTexts.length < segments.length) {
        // Initialize with empty values if the length is not enough
        updatedTexts.push({ text: '', color: '', position: {} });
      }
      return updatedTexts;
    });

    const typingInterval = setInterval(() => {
      setDisplayedTexts(prev => {
        const updatedTexts = [...prev];
        updatedTexts[currentSegmentIndex] = {
          text: text.slice(0, index + 1),
          color,
          position: segments[currentSegmentIndex].position || {}
        };
        return updatedTexts;
      });
      index += 1;
      if (index >= text.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentSegmentIndex(prevIndex => prevIndex + 1);
        }, delay);
      }
    }, typingSpeed);
  }, [currentSegmentIndex, segments, typingSpeed, delay]);

  useEffect(() => {
    typeText();
  }, [currentSegmentIndex, typeText]);

  useEffect(() => {
    if (currentSegmentIndex === segments.length) {
      // Ensure all texts are fully displayed at the end
      setDisplayedTexts(prev => prev.map((item, index) => ({
        ...item,
        text: segments[index]?.text || ''
      })));
    }
  }, [currentSegmentIndex, segments]);

  return (
    <div className="typing-effect">
      {displayedTexts.map((item, index) => (
        <h3
          key={index}
          style={{
            color: item.color,
            position: 'absolute',
            top: item.position.top || '0',
            left: item.position.left || '0',
            ...item.position
          }}
        >
          {item.text}
        </h3>
      ))}
    </div>
  );
};

export default TypingEffect;
