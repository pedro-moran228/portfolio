import type { MutableRef } from "preact/hooks";
import { TRANSITION_FLAG } from "../transition-flag";

interface props {
  event: TransitionEvent;
  carouselRef: MutableRef<HTMLUListElement>;
}
export const handleOnTransitionEnd = ({ event, carouselRef }: props) => {
  if (event.propertyName !== "transform") return;

  const targetIndex = (event.target as HTMLImageElement).dataset.index;
  carouselRef.current?.children[targetIndex].classList.remove(TRANSITION_FLAG);
};
