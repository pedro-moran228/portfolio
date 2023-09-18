import classNames from "classnames";
import { useEffect, type MutableRef, useRef, useState } from "preact/hooks";

interface props {
  image: string;
  mask: string;
  sliceActived: MutableRef<boolean>;
  index: number;
}

export const Slice = ({ image, mask, sliceActived, index }: props) => {
  const [src, setSrc] = useState(mask);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (sliceActived.current) setSrc(image);
  }, [sliceActived.current]);

  return (
    <img
      style={{
        transform: "translateX(-100%)",
        margin: "0px",
        filter: `blur(${loaded ? 0 : 4}px)`,
      }}
      class={classNames(
        "w-full h-full transition-[transform,filter] duration-500"
      )}
      data-index={index}
      onLoad={() => setLoaded(true)}
      loading="lazy"
      src={src}
    />
  );
};
