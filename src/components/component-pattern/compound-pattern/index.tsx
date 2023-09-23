const ProductCard = () => {
  const data = {
    title: "Beats Headphone",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM1MjkzOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    category: ["Music", "Tech"],
    price: 3000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium, voluptate minima quia quae ut consequatur asperiores, facere sit itaque sequi. Voluptate quaerat architecto est harum accusamus quae, debitis recusandae.",
  };
  return (
    <div className="max-w-[400px] border shadow-md">
      <img src={data.image} alt={data.title} />
      <div className="p-5">
        <div className="flex justify-between">
          <p>{data.title}</p>
          <p>${data.price}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <button className="bg-yellow-500 p-2 my-2 text-white">
              Buy now
            </button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            {data.category.map((category) => (
              <div
                style={{
                  color: "white",
                  margin: "10px 0 0 0",
                  padding: 8,
                  background:
                    "#" + Math.floor(Math.random() * 16777215).toString(16),
                }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        <div className="text-left my-4">
          <h3 className="line-clamp-4"> {data?.description}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
