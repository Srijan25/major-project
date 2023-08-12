import React from 'react';
import AutoScrollBox from './AutoScolledBox';
import './styles/ann.css';
const Ann = () => {
  const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    // Add more paragraphs here
  ];

  return (
    <div className="ann">
      <h1>Announcments</h1>
      <AutoScrollBox paragraphs={paragraphs} />
    </div>
  );
};

export default Ann;
