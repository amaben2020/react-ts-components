const Row = (props: {
  element: React.ElementType<{
    className?: string;
  }>;
}) => {
  return (
    <div>
      <props.element className="h-8 w-8" />
    </div>
  );
};

<Row element={"div"} />;
