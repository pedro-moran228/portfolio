import type { MutableRef } from "preact/hooks";
import { handleActivateTransition } from "../handle-activate-transition";
import { handleTranslateSliceOnTheLeftSide } from "../handle-translate-slice-on-the-left-side";
import { handleTranslateSlices } from "../handle-translate-slices";

interface props {
  amount: number;
  currIndex: { value: number };
  slicesTransition: { value: { src: string; isTransitioning: boolean }[] };
  carouselRef: MutableRef<HTMLUListElement>;
}

export const handleOnClickNextSlice = ({
  amount,
  currIndex,
  slicesTransition,
  carouselRef,
}: props) => {
  const isTransitioning = slicesTransition.value.some(
    (slice) => slice.isTransitioning
  );

  if (isTransitioning) return;

  handleActivateTransition({ slicesTransition });

  const carousel = carouselRef.current;
  const slices = [...carousel.children] as HTMLElement[];

  const index = currIndex.value;

  const outerIndex = index % amount;
  currIndex.value++;

  handleTranslateSlices({
    amount,
    slices,
    transitionType: "next",
  });

  const outerSlide = slices[outerIndex] as HTMLElement;

  handleTranslateSliceOnTheLeftSide({
    amount,
    slice: outerSlide,
    transitionType: "next",
  });
};
