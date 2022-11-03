interface ErrorProps {
  error: string;
};

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <>
      <p>{error}</p>
    </>
  );
};

export { Error };
