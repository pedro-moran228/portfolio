import classNames from "classnames";

interface props {
  outerIndex: number;
  amount: number;
}
export const ProgressBar = ({ amount, outerIndex }: props) => {
  const sliceWidthPercentage = Math.ceil(100 / (amount - 1));
  return (
    <div
      aria-label="progress bar"
      class={classNames(
        "absolute top-[-4px] left-0 w-full h-[4px] bg-gray-50/50"
      )}
    >
      <div
        style={{
          width: `${sliceWidthPercentage * outerIndex}%`,
          transitionProperty: "width",
          transitionDuration: "500ms",
        }}
        class={classNames("h-full bg-secondary")}
      ></div>
    </div>
  );
};
