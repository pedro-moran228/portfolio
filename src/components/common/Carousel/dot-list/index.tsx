import { DotIcon } from "./dot-icon";

interface props {
  amount: number;
  currIndex: { value: number };
}
export const DotList = ({ currIndex, amount }: props) => {
  const outerIndex = currIndex.value % amount;

  return (
    <footer class="absolute opacity-100 -bottom-14 left-1/2 -translate-x-1/2 w-fit space-x-2 transition-opacity duration-100">
      {[...Array(amount)].map((_, i) => (
        <DotIcon isActived={i === outerIndex} />
      ))}
    </footer>
  );
};
