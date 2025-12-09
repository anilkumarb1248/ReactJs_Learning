import { useEffect, useRef } from "react";

export const DomRef = () => {
  //   const inputRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    //inputRef.current.focus(); // 'inputRef.current' is possibly 'null'. So added ? after current
    // inputRef.current?.focus(); // Getting one more error: Property 'focus' does not exist on type 'never'
    //inputRef.current?.focus(); // useRef<HTMLInputElement> fixed the above issue
    inputRef.current.focus(); // Removed ?, by adding null! - means it never null
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
