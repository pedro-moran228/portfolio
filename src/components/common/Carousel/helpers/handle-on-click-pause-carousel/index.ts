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

export const handleOnClickPauseSlice = ({
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

  currIndex.value--;
  if (currIndex.value === -1) currIndex.value = amount - 1;

  let outerIndex = currIndex.value % amount;

  handleTranslateSlices({
    amount,
    slices,
    transitionType: "prev",
  });

  const outerSlide = slices[outerIndex] as HTMLElement;

  handleTranslateSliceOnTheLeftSide({
    amount,
    slice: outerSlide,
    transitionType: "prev",
  });
};
