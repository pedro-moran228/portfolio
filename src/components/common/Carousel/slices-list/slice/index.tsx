import type { MutableRef } from "preact/hooks";

interface props {
  image: string;
  mask: string;
  sliceActived: MutableRef<boolean>;
  index: number;
}

export const Slice = ({ image, mask, sliceActived, index }: props) => {
  const imgSrc = sliceActived.current ? image : mask;
  return (
    <img
      style="transform: translateX(-100%); margin: 0px;"
      class="w-full h-full transition-transform duration-500"
      data-index={index}
      loading="lazy"
      src={imgSrc}
    />
  );
};
