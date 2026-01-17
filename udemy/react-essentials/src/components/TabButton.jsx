// export default function TabButton({ children, onSelect, isSelected, ...props }) {
export default function TabButton({ children, isSelected, ...props }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      {/* <button className={isSelected ? "active" : undefined} onClick={onSelect}> */}
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
