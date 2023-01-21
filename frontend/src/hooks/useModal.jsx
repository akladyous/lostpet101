import { useState, useRef, useCallback } from 'react';

export default function useModal() {
  const ref = useRef();
  const [state, setState] = useState(null);

  const close = useCallback(() => {
    setState(false);
  }, []);

  return {
    open: state,
    close,
    initialFocusRef: ref,
  };
}
