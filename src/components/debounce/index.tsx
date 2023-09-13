const Debounce = ({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return <input onChange={handleChange} />;
};

export default Debounce;
