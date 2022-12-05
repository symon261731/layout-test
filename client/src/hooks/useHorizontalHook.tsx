import { useRef, useEffect } from "react";
import useWindowDimensions  from './useWindowDimens';

export function useHorizontalScroll() {
  const elRef = useRef<null | HTMLDivElement>(null); 
  const { width } = useWindowDimensions();
  // useEffect(() => {
  //   const el = elRef.current;
  //   if (el) {
  //     const onWheel = (e: any) => {
  //       if (e.deltaY === 0) return;
  //       if (
  //         !(el.scrollLeft === 0 && e.deltaY < 0) &&
  //         !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && 
  //             e.deltaY > 0)
  //       ) {
  //         e.preventDefault();
  //       }
  //       el.scrollTo({
  //         left: el.scrollLeft + e.deltaY,
  //         behavior: 'smooth'
  //       });
  //     };
  //     el.addEventListener('wheel', onWheel);
  //     return () => el.removeEventListener('wheel', onWheel);
  //   }
  // }, []);
  // return elRef;

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
    }, []);
    return elRef;
  }


