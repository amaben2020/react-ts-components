const components = {
  loading: () => <LoadingSpinner />,
  error: ({ error }) => <ErrorMessage message={error.message} />,
  success: ({ data }) => <ItemList items={data.items} />,
};

function ListPage() {
  const { data, error, status } = useGetData();

  return <Layout>{components[status]({ data, error })}</Layout>;
}
