import { useRef, type MutableRef } from "preact/hooks";
import { handleOnTransitionEnd } from "../helpers/handle-on-transition-end";
import { signal } from "@preact/signals";
import type { SliceT } from "../Index";
import { Slice } from "./slice";

interface props {
  carouselRef: MutableRef<HTMLUListElement>;
  slices: SliceT[];
  currIndex: { value: number };
}

export const SlicesList = ({ carouselRef, slices, currIndex }: props) => {
  const outerIndex = currIndex.value % slices.length;

  return (
    <ul
      ref={carouselRef}
      class="flex overflow-hidden p-0 m-0"
      onTransitionEnd={(event) =>
        handleOnTransitionEnd({
          event,
          carouselRef,
        })
      }
    >
      {slices.map(({ imgSrc, maskSrc }, i) => {
        const sliceActived = useRef(false);

        if (
          i === outerIndex + 1 ||
          (i === 0 && outerIndex === slices.length - 1)
        ) {
          sliceActived.current = true;
        }

        return (
          <Slice
            sliceActived={sliceActived}
            key={imgSrc}
            image={imgSrc}
            index={i}
            mask={maskSrc || imgSrc}
          />
        );
      })}
    </ul>
  );
};
