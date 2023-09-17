import type { MutableRef } from "preact/hooks";
import { TRANSITION_FLAG } from "../transition-flag";

interface props {
  carouselRef: MutableRef<HTMLUListElement>;
}

export const handleActivateTransition = ({ carouselRef }: props) => {
  [...carouselRef.current?.children].forEach((child) =>
    child.classList.add(TRANSITION_FLAG)
  );
};
