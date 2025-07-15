import React from 'react';

interface Props {
  desc: string;
}

const Description = ({ desc }: Props) => {
  return <div>{desc}</div>;
};

export default Description;
