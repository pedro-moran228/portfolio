export const handleTranslateSlices = ({
  amount,
  slices,
  transitionType,
}: {
  slices: HTMLElement[];
  amount: number;
  transitionType: "next" | "prev";
}) => {
  const isNext = transitionType === "next";

  for (var i = 0; i < amount; i++) {
    const slice = slices[i] as HTMLElement;

    const currTranslPer = Number(
      slice.style.transform.split("(")[1].split("%")[0]
    );
    const newTranslPer = isNext ? currTranslPer - 100 : currTranslPer + 100;

    slice.style.opacity = "1";
    slice.style.transform = `translateX(${newTranslPer}%)`;
  }
};
