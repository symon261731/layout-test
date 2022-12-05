
import { useRef, useEffect } from "react";
import useWindowDimensions  from './useWindowDimens';

export function useHorizontalScroll() {
  const elRef = useRef<null | HTMLDivElement>(null); 
  const { width } = useWindowDimensions();

    useEffect(() => {
      const el = elRef.current;
      if (el && width >=770) {
        const onWheel = (e:any) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollBy(e.deltaY, 0);
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, [width]);
    console.log('render');
    
    return elRef;
  }


