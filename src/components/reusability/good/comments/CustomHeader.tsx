export const CommentsWithHeaderAndFooter = () => {
  return (
    // Here we added header and footer.
    <List<Comment>
      items={comments}
      header={<h1>My header!</h1>}
      footer={
        <footer>
          <button>First click button</button>
          <button>Second button</button>
        </footer>
      }
    >
      {({ item, ListItem }) => <ListItem {...item} key={item.id} />}
    </List>
  );
};
