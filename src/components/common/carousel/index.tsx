//*Only works with +3 images

import ButtonPrevSlide from "./button-prev-slide/Index";
import ButtonNextSlide from "./button-next-slide/Index";
import { signal } from "@preact/signals";
import { handleOnClickNextSlice } from "./helpers/handle-on-click-next-slice";
import { handleOnClickPrevSlice } from "./helpers/handle-on-click-prev-slice";
import { useRef } from "preact/hooks";
import ButtonPlayCarousel from "./button-play-carousel/Index";
import { ProgressLine } from "./helpers/progress-line";
import ButtonPauseCarousel from "./button-pause-carousel/Index";
import classNames from "classnames";
import { DotList } from "./dot-list";
import { SlicesList } from "./slices-list";
import { BarOptions } from "./bar-options";

interface props {
  slices: SliceT[];
  className?: string;
}

export type SliceT = {
  imgSrc: string;
  maskSrc: string;
};

export function Carousel({ slices, className = "" }: props) {
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
    <section
      class={classNames(
        "relative mt-10 mb-20 h-auto w-full rounded-2xl shadow-[0px_0px_40px_10px_#0000006e] aspect-[16/8.10]",
        className
      )}
    >
      <div class="w-full h-auto relative overflow-hidden rounded-2xl group">
        <SlicesList
          carouselRef={carouselRef}
          slices={slices}
          currIndex={currIndex}
        />
        <BarOptions isPlaying={isPlaying}>
          <ProgressLine
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
        </BarOptions>
      </div>
      <DotList currIndex={currIndex} amount={amount} />
    </section>
  );
}
