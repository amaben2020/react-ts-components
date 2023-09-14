interface LayoutProps {
  nav: React.ReactNode;
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <nav>{props.nav}</nav>
      <main>{props.children}</main>
    </>
  );
};

// usage:
{
  /* <Layout nav={<h1>My Site</h1>}>
  <div>Hello!</div>
</Layout>; */
}
