export default function ListMapper({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) {
  return items ? (
    <>
      {items.map((item, idx) => (
        <ItemComponent key={idx} {...{ [resourceName]: item }} />
      ))}
    </>
  ) : null;
}
