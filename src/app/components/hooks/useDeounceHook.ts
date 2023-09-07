import { SetStateAction, useEffect, useState } from "react";

export default function useDebounce(
  value: string,
  delay: number
) {
  const [debounceValue, setDebounceValue] = useState<any>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceValue;
}
