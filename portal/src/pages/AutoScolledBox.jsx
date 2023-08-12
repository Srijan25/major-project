import React, { useRef, useEffect } from 'react';
import './styles/AutoScrollBox.css';

const AutoScrollBox = ({ paragraphs }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [paragraphs]);

  return (
    <div className="auto-scroll-box" ref={containerRef}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default AutoScrollBox;
