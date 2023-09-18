import classNames from "classnames";

interface props {
  slices: SliderSliceT[];
  className?: string;
}

export type SliderSliceT = {
  imgSrc: string;
  maskSrc: string;
};

export const Slider = ({ slices, className = "" }: props) => {
  return (
    <section
      class={classNames(
        "flex snap-x snap-mandatory overflow-x-auto w-full py-10 px-[30px] space-x-[15px]",
        className
      )}
    >
      {slices.map((slice) => {
        return (
          <img
            class="w-full h-full snap-center rounded-lg shadow-[0px_0px_40px_10px_#0000006e]"
            src={slice.imgSrc}
            alt="slider slice"
            loading="lazy"
          />
        );
      })}
    </section>
  );
};
