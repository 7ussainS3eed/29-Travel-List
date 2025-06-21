export function ItemComp({ passedObj, onDeleteItems, onCheck }) {
  return (
    <li>
      <input
        type="checkbox"
        value={passedObj.packed}
        onClick={() => onCheck(passedObj.id)} />
      <span style={passedObj.packed ? { textDecoration: "line-through" } : {}}>
        {passedObj.quantity} {passedObj.description}
      </span>
      <button onClick={() => onDeleteItems(passedObj.id)}>❌</button>
    </li>
  );
}
