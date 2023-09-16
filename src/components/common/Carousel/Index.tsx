//*Only works with +3 images

import ButtonPrevSlide from "./button-prev-slide/Index";
import ButtonNextSlide from "./button-next-slide/Index";
import { signal } from "@preact/signals";
import { handleOnClickNextSlice } from "./helpers/handle-on-click-next-slice";
import { handleOnTransitionEnd } from "./helpers/handle-on-transition-end";
import { handleOnClickPrevSlice } from "./helpers/handle-on-click-prev-slice";
import { useEffect, useRef } from "preact/hooks";
import { DotIcon } from "./dot-icon";
import ButtonPlayCarousel from "./button-play-carousel/Index";
import { ProgressBar } from "./helpers/progress-bar";
import ButtonPauseCarousel from "./button-pause-carousel/Index";

interface props {
  images: string[];
}

const currIndex = signal(0);
const slicesTransition = signal([]);
const isPlaying = signal(false);

export default function Carousel({ images }: props) {
  const carouselRef = useRef<HTMLUListElement>(null);
  const outerIndex = currIndex.value % images.length;

  useEffect(() => {
    slicesTransition.value = images.map((img) => ({
      src: img,
      isTransitioning: false,
    }));
  }, []);

  return (
    <section class="relative mt-10 mb-20 h-auto container-sm rounded-2xl shadow-[0px_0px_40px_10px_#0000006e]">
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
        <section class="opacity-0 group-hover:opacity-100 w-full h-[50px] pl-[20px] text-white absolute bottom-0 left-0 flex items-center z-10 duration-150">
          <div class="absolute bottom-0 left-0 w-full h-[500%] bg-gradient-to-t from-gray-900/30 -z-10"></div>
          <ProgressBar amount={images.length} outerIndex={outerIndex} />
          <ButtonPrevSlide
            handleOnClick={() =>
              handleOnClickPrevSlice({
                amount: images.length,
                currIndex,
                slicesTransition,
                carouselRef,
              })
            }
          />
          <ButtonPlayCarousel
            hidden={isPlaying.value}
            handleOnClick={() => (isPlaying.value = true)}
          />
          <ButtonPauseCarousel
            hidden={!isPlaying.value}
            handleOnClick={() => (isPlaying.value = false)}
          />
          <ButtonNextSlide
            handleOnClick={() =>
              handleOnClickNextSlice({
                amount: images.length,
                currIndex,
                slicesTransition,
                carouselRef,
              })
            }
          />
        </section>
      </div>
      <footer class="absolute opacity-100 -bottom-14 left-1/2 -translate-x-1/2 w-fit space-x-2 transition-opacity duration-100">
        {images.map((_, i) => (
          <DotIcon isActived={i === outerIndex} />
        ))}
      </footer>
    </section>
  );
}
