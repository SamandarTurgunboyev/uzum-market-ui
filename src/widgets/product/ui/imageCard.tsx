import { ScrollArea } from '@/shared/ui/scroll-area';
import Image from 'next/image';
import React from 'react';

const ImageCard = () => {
  return (
    <ScrollArea className="h-[800px]">
      <ScrollArea className="h-[800px]">
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 5 }).map((e, index) => (
            <Image
              key={index}
              src="https://placehold.co/300x400.jpg"
              alt={String(index)}
              width={300}
              height={400}
            />
          ))}
        </div>
      </ScrollArea>
    </ScrollArea>
  );
};

export default ImageCard;
