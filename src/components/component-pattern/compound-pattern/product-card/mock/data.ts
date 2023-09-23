type TData = {
  id: number;
  title: string;
  image: string;
  category: string[];
  price: number;
  description: string;
};
export const data = {
  id: 1,
  title: "Beats Headphone",
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM1MjkzOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  category: ["Music", "Tech"],
  price: 3000,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium, voluptate minima quia quae ut consequatur asperiores, facere sit itaque sequi. Voluptate quaerat architecto est harum accusamus quae, debitis recusandae.",
} satisfies TData;
