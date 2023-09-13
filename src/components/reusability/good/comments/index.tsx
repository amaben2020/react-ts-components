export const Comments = () => {
  return (
    // We used injected ListItem component.
    <List<Comment> items={comments}>
      {({ item, ListItem }) => <ListItem {...item} key={item.id} />}
    </List>
  );
};
