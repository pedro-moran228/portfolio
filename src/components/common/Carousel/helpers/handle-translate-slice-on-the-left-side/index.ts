interface props {
  slice: HTMLElement;
  amount: number;
  transitionType: "next" | "prev";
}

export const handleTranslateSliceOnTheLeftSide = ({
  amount,
  slice,
  transitionType,
}: props) => {
  const isNext = transitionType === "next";
  const currTranslPer = Number(
    slice.style.transform.split("(")[1].split("%")[0]
  );
  const newTranslPer = isNext
    ? currTranslPer + 100 * amount
    : currTranslPer - 100 * amount;

  slice.style.transform = `translateX(${newTranslPer}%)`;
  slice.style.opacity = "0";
};
