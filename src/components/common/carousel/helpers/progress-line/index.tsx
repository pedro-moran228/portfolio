import classNames from "classnames";
import { useTranlateSlices } from "../use-tranlate-slices";

interface props {
  currIndex: { value: number };
  amount: number;
  isPlaying: { value: boolean };
  handleOnInterval: () => void;
}
export const ProgressLine = ({
  amount,
  currIndex,
  isPlaying,
  handleOnInterval,
}: props) => {
  const sliceWidthPercentage = Math.ceil(100 / (amount - 1));
  const outerIndex = currIndex.value % amount;
  const progressWidth = `${sliceWidthPercentage * outerIndex}%`;

  useTranlateSlices({
    actived: isPlaying,
    currentIndex: currIndex.value,
    handleOnInterval,
  });

  return (
    <div
      aria-label="progress bar"
      class={classNames(
        "absolute top-[-4px] left-0 w-full h-[3px] bg-white/80"
      )}
    >
      <i
        aria-label="progress highlight"
        style={{
          width: progressWidth,
          transitionProperty: "width",
        }}
        class={classNames("block h-full bg-secondary duration-500")}
      ></i>
    </div>
  );
};
