import classNames from "classnames";

interface props {
  isActived: boolean;
  color: `bg-${string}`;
}
export const DotIcon = ({ isActived, color }: props) => {
  return (
    <i
      class={classNames(
        "inline-block w-[20px] h-[20px] rounded  duration-100",
        { "brightness-50": !isActived },
        color
      )}
    ></i>
  );
};
