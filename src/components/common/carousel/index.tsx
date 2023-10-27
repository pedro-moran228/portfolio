//*Only works with +3 images

import ButtonPrevSlide from "./button-prev-slide/Index";
import ButtonNextSlide from "./button-next-slide/Index";
import { useSignal } from "@preact/signals";
import { handleOnClickNextSlice } from "./helpers/handle-on-click-next-slice";
import { handleOnClickPrevSlice } from "./helpers/handle-on-click-prev-slice";
import { useEffect, useRef } from "preact/hooks";
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
  color?: `bg-${string}`;
}

export type SliceT = {
  imgSrc: ImageMetadata;
  maskSrc: ImageMetadata;
};

export function Carousel({
  slices,
  className = "",
  color = "bg-secondary",
}: props) {
  const carouselRef = useRef<HTMLUListElement>(null);
  const currIndex = useSignal(0);
  const isPlaying = useSignal(false);
  const amount = slices.length;

  const handleOnInterval = () => {
    handleOnClickNextSlice({
      amount,
      currIndex,
      carouselRef,
    });
  };

  useEffect(() => {
    const handler = ([entry]: IntersectionObserverEntry[]) => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        isPlaying.value = true;
        return;
      }
      isPlaying.value = false;
    };

    const observer = new IntersectionObserver(handler, {
      root: null,
      threshold: 0.25,
    });
    observer.observe(carouselRef.current);
  }, []);

  return (
    <section
      id="carousel"
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
            color={color}
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
      <DotList color={color} currIndex={currIndex} amount={amount} />
    </section>
  );
}
