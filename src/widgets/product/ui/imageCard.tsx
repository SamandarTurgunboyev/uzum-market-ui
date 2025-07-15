import { IMAGE_URL } from '@/shared/config/api/URLs';
import { ScrollArea } from '@/shared/ui/scroll-area';
import Image from 'next/image';

interface Props {
  images: string[];
}

const ImageCard = ({ images }: Props) => {
  return (
    <ScrollArea className="min-h-fit max-h-[800px]">
      <ScrollArea className="min-h-fit max-h-[800px]">
        <div className="grid grid-cols-4 gap-4">
          {images?.map((e, index) => (
            <Image
              key={index}
              src={IMAGE_URL + '/' + e}
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
