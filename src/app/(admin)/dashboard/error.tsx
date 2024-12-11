import Button from '@/app/components/button';

export interface IErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: IErrorProps) => {
  return (
    <div>
      <p>{`Somethink went wrong ${error.message}`}</p>
      <Button onClick={() => reset()}>Reset</Button>
    </div>
  );
};

export default Error;
