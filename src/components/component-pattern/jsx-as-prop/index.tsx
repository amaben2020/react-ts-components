interface LayoutProps {
  nav: React.ReactNode;
  children: React.ReactNode;
}

export const Layout = ({ nav, children }: LayoutProps) => {
  return (
    <>
      <nav>{nav}</nav>
      <main>{children}</main>
    </>
  );
};

// usage:
{
  /* <Layout nav={<h1>My Site</h1>}>
  <div>Hello!</div>
</Layout>; */
}
