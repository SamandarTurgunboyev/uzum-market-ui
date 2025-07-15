interface Props {
  title: string;
}

const IsError = ({ title }: Props) => {
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <h1 className="text-red-600 text-center">{title}</h1>
    </div>
  );
};

export default IsError;
