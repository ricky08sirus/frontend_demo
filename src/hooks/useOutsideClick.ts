import { useEffect, useRef } from "react";

export function useOutsideClick(handler:any, listenCapturing = true) {
  //click outside the modal use a ref

  const ref = useRef<any>();
  useEffect(
    function () {
      function handleClick(e:any) {
        //if the ref.current does not contain the event that was clicked close the modal
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
