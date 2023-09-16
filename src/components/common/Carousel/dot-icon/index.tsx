import classNames from "classnames";

interface props {
  isActived: boolean;
}
export const DotIcon = ({ isActived }: props) => {
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
