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

export const handleOnClickNextSlice = ({
  amount,
  currIndex,
  carouselRef,
}: props) => {
  const isTransitioning = [...carouselRef.current?.children]?.some((child) =>
    child.classList.contains(TRANSITION_FLAG)
  );

  const isUnLoaded = [...carouselRef.current?.children]?.some(
    (child) =>
      (child as HTMLElement).dataset.actived === "true" &&
      (child as HTMLElement).dataset.loaded === "false"
  );

  if (isTransitioning || isUnLoaded) return;

  handleActivateTransition({ carouselRef });

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
