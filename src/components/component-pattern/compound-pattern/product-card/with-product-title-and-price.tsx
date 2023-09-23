const withProductTitleAndPrice =
  (Component1: React.ReactNode, Component2: React.ReactNode) =>
  ({ ...props }) => {
    return (
      <div {...props} className="flex justify-between">
        {Component1}
        {Component2}
      </div>
    );
  };

export default withProductTitleAndPrice;
