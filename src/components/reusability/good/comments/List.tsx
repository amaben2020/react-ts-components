export const CommentsWithOwnListItem = () => {
  return (
    // Here we want to use our custom
    // list item component.
    <List<Comment> items={comments}>
      {({ item }) => (
        <li key={item.id} className="different-item">
          {item.content}
        </li>
      )}
    </List>
  );
};
