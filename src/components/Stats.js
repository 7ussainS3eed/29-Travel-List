export function Stats({ items }) {
  if (!items.length) return (
    <footer className="stats">
      <em>start adding some items to your packing list 🚀</em>
    </footer>
  );
  const numItems = items.length;
  const countPacked = items.filter(item => item.packed).length;
  const countPackedPercent = Math.round(countPacked / numItems * 100);
  return (
    <footer className="stats">
      <em>
        {countPackedPercent === 100 ?
          "You got everything! Ready to go 🚍"
          : `💼 You have ${numItems} items on your list, and you already packed 
        ${countPacked} (${countPackedPercent}%)`}
      </em>
    </footer>
  );
}
