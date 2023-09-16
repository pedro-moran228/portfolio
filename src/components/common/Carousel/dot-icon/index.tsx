import classNames from "classnames";

interface props {
  currIndex: { value: number };
  amount: number;
  index: number;
}
export const DotIcon = ({ currIndex, index, amount }: props) => {
  const isActived = currIndex.value % amount === index;
  return (
    <button
      class={classNames(
        "inline-block w-[20px] h-[20px] rounded bg-secondary duration-100",
        { "brightness-150": isActived },
        { "hover:brightness-125": !isActived }
      )}
    ></button>
  );
};
