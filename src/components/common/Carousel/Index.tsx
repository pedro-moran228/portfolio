//*Only works with +3 images

import ButtonPrevSlide from "./button-prev-slide/Index";
import ButtonNextSlide from "./button-next-slide/Index";
import { signal } from "@preact/signals";
import { handleOnClickNextSlice } from "./helpers/handle-on-click-next-slice";
import { handleOnTransitionEnd } from "./helpers/handle-on-transition-end";
import { handleOnClickPrevSlice } from "./helpers/handle-on-click-prev-slice";
import { useEffect, useRef } from "preact/hooks";
import ButtonPlayCarousel from "./button-play-carousel/Index";
import { ProgressBar } from "./helpers/progress-bar";
import ButtonPauseCarousel from "./button-pause-carousel/Index";
import classNames from "classnames";
import { DotList } from "./dot-list";
import { SlicesList } from "./slices-list";

interface props {
  slices: {
    imgSrc: string;
    maskSrc: string;
  }[];
}

export type SliceT = {
  imgSrc: string;
  maskSrc: string;
};

export default function Carousel({ slices }: props) {
  const carouselRef = useRef<HTMLUListElement>(null);
  const currIndex = signal(0);
  const isPlaying = signal(true);
  const amount = slices.length;

  const handleOnInterval = () => {
    handleOnClickNextSlice({
      amount,
      currIndex,
      carouselRef,
    });
  };

  return (
    <section class="relative mt-10 mb-20 h-auto w-full rounded-2xl shadow-[0px_0px_40px_10px_#0000006e] aspect-[16/8.10]">
      <div class="w-full h-auto relative overflow-hidden rounded-2xl group">
        <SlicesList
          carouselRef={carouselRef}
          slices={slices}
          currIndex={currIndex}
        />
        <section
          class={classNames(
            "opacity-0 group-hover:opacity-100 w-full h-[50px] pl-[20px] text-white absolute bottom-0 left-0 flex items-center z-10 duration-150"
            // { "opacity-100": !isPlaying.value }
          )}
        >
          <div class="absolute bottom-0 left-0 w-full h-[500%] bg-gradient-to-t from-gray-900/30 -z-10"></div>
          <ProgressBar
            amount={amount}
            currIndex={currIndex}
            handleOnInterval={handleOnInterval}
            isPlaying={isPlaying}
          />
          <ButtonPrevSlide
            handleOnClick={() =>
              handleOnClickPrevSlice({
                amount,
                currIndex,
                carouselRef,
              })
            }
          />
          <ButtonPlayCarousel
            handleOnClick={() => (isPlaying.value = true)}
            isPlaying={isPlaying}
          />
          <ButtonPauseCarousel
            handleOnClick={() => (isPlaying.value = false)}
            isPlaying={isPlaying}
          />
          <ButtonNextSlide
            handleOnClick={() =>
              handleOnClickNextSlice({
                amount,
                currIndex,
                carouselRef,
              })
            }
          />
        </section>
      </div>
      <DotList currIndex={currIndex} amount={amount} />
    </section>
  );
}
