import type { MutableRef } from "preact/hooks";
import { handleActivateTransition } from "../handle-activate-transition";
import { handleTranslateSliceOnTheLeftSide } from "../handle-translate-slice-on-the-left-side";
import { handleTranslateSlices } from "../handle-translate-slices";
import { TRANSITION_FLAG } from "../transition-flag";

interface props {
  amount: number;
  currIndex: { value: number };
  carouselRef: MutableRef<HTMLUListElement>;
}

export const handleOnClickPrevSlice = ({
  amount,
  currIndex,
  carouselRef,
}: props) => {
  const isTransitioning = [...carouselRef.current?.children]?.some((child) =>
    child.classList.contains(TRANSITION_FLAG)
  );

  if (isTransitioning) return;

  handleActivateTransition({ carouselRef });

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
