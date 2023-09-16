interface props {
  slicesTransition: { value: { src: string; isTransitioning: boolean }[] };
  event: TransitionEvent;
}
export const handleOnTransitionEnd = ({ event, slicesTransition }: props) => {
  if (event.propertyName !== "transform") return;

  const targetImgSrc = (event.target as HTMLImageElement).getAttribute("src");
  const newSlicesTransition = slicesTransition.value.map((slice) => {
    if (slice.src !== targetImgSrc) return slice;

    return {
      ...slice,
      isTransitioning: false,
    };
  });

  slicesTransition.value = newSlicesTransition;
};
