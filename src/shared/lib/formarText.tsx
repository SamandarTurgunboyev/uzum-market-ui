import { JSX } from 'react';

const formatText = (text: string, count: number): JSX.Element[] => {
  if (!text) return [];

  const maxLength = window.innerWidth <= 480 ? Math.floor(count / 2) : count;

  const chunks = [];
  for (let i = 0; i < text.length; i += maxLength) {
    chunks.push(text.slice(i, i + maxLength));
  }

  return chunks.map((chunk, index) => (
    <span key={index}>
      {chunk}
      <br />
    </span>
  ));
};

export default formatText;
