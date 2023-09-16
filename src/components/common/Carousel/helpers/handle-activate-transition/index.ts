interface props {
  slicesTransition: { value: { src: string; isTransitioning: boolean }[] };
}
export const handleActivateTransition = ({ slicesTransition }: props) => {
  const newSlicesTransition = slicesTransition.value.map((slice) => ({
    ...slice,
    isTransitioning: true,
  }));

  slicesTransition.value = newSlicesTransition;
};
