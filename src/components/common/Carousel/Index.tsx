import ButtonPrevSlide from "./button-prev-slide/Index";
import ButtonNextSlide from "./button-next-slide/Index";
import { signal } from "@preact/signals";
import { handleOnClickNextSlice } from "./helpers/handle-on-click-next-slice";
import { handleOnTransitionEnd } from "./helpers/handle-on-transition-end";
import { handleOnClickPrevSlice } from "./helpers/handle-on-click-prev-slice";
import { useRef } from "preact/hooks";

interface props {
  images: string[];
}

export default function Carousel({ images }: props) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const currIndex = signal(0);
  const slicesTransition = signal(
    images.map((img) => ({
      src: img,
      isTransitioning: false,
    }))
  );

  const amount = images.length;

  return (
    <section class="relative mt-10 h-auto container-sm rounded-2xl shadow-[0px_0px_40px_10px_#0000006e]">
      <div class="w-full h-auto relative overflow-hidden rounded-2xl group">
        <ul
          ref={carouselRef}
          class="flex overflow-hidden p-0 m-0"
          onTransitionEnd={(event) =>
            handleOnTransitionEnd({
              event,
              slicesTransition,
            })
          }
        >
          {images.map((image, i) => (
            <img
              key={image}
              style="transform: translateX(-100%); margin: 0px;"
              class="transition-transform duration-500"
              data-slide={i}
              src={image}
            />
          ))}
        </ul>
        <ButtonPrevSlide
          handleOnClick={() =>
            handleOnClickPrevSlice({
              amount,
              currIndex,
              slicesTransition,
              carouselRef,
            })
          }
        />
        <ButtonNextSlide
          handleOnClick={() =>
            handleOnClickNextSlice({
              amount,
              currIndex,
              slicesTransition,
              carouselRef,
            })
          }
        />
      </div>
    </section>
  );
}
