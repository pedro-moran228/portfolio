import { DotIcon } from "./dot-icon";

interface props {
  images: string[];
  currIndex: { value: number };
}
export const DotList = ({ currIndex, images }: props) => {
  const outerIndex = currIndex.value % images.length;

  return (
    <footer class="absolute opacity-100 -bottom-14 left-1/2 -translate-x-1/2 w-fit space-x-2 transition-opacity duration-100">
      {images.map((_, i) => (
        <DotIcon isActived={i === outerIndex} />
      ))}
    </footer>
  );
};
