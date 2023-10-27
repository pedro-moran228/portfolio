import classNames from "classnames";
import { useEffect, type MutableRef, useState } from "preact/hooks";
import { Image } from "astro:assets";

interface props {
  image: ImageMetadata;
  mask: ImageMetadata;
  sliceActived: boolean;
  index: number;
}

export const Slice = ({ image, mask, sliceActived, index }: props) => {
  const [src, setSrc] = useState(mask);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (sliceActived) setSrc(image);
  }, [sliceActived]);

  return (
    <Image
      style={{
        transform: "translateX(-100%)",
        margin: "0px",
        filter: `blur(${loaded ? 0 : 4}px)`,
      }}
      class={classNames(
        "min-w-full transition-[transform,filter] duration-500 aspect-[16/8.20]"
      )}
      data-index={index}
      data-actived={sliceActived}
      data-loaded={loaded}
      // onload="this.dataset.loaded = true"
      // onLoad={(e) => {
      //   const target = e.target as HTMLElement;
      //   const isMask = mask === target.getAttribute("src");
      //   if (isMask) return;

      //   setLoaded(true);
      // }}
      loading={sliceActived ? "eager" : "lazy"}
      src={image}
      alt={`image-${index}`}
    />
  );
};
