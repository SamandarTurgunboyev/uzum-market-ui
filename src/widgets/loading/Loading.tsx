import { Skeleton } from '@/shared/ui/skeleton';

const Loading = () => {
  return (
    <div className="h-96">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default Loading;
