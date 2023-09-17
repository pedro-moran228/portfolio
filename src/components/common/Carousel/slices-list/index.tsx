import { useRef, type MutableRef } from "preact/hooks";
import { handleOnTransitionEnd } from "../helpers/handle-on-transition-end";
import { signal } from "@preact/signals";
import { Slice } from "./slice";

interface props {
  carouselRef: MutableRef<HTMLUListElement>;
  images: string[];
  currIndex: { value: number };
}

export const SlicesList = ({ carouselRef, images, currIndex }: props) => {
  const outerIndex = currIndex.value % images.length;
  const mask = "academy/CA_1_mask.avif";

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
      {images.map((image, i) => {
        const sliceActived = useRef(false);

        if (
          i === outerIndex + 1 ||
          (i === 0 && outerIndex === images.length - 1)
        ) {
          sliceActived.current = true;
        }

        return (
          <Slice
            sliceActived={sliceActived}
            key={image}
            image={image}
            index={i}
            mask={mask}
          />
        );
      })}
    </ul>
  );
};
