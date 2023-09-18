import type { Signal } from "@preact/signals";
import classNames from "classnames";
import type { ReactNode } from "preact/compat";

interface props {
  children: ReactNode | ReactNode[];
  className?: string;
  isPlaying: Signal<boolean>;
}

export const BarOptions = ({ children, isPlaying, className = "" }: props) => {
  return (
    <section
      className={classNames(
        "opacity-0 group-hover:opacity-100 w-full h-[50px] pl-[20px] text-white absolute bottom-0 left-0 flex items-center z-10 duration-150",
        className,
        { "opacity-100": !isPlaying.value }
      )}
    >
      <div class="absolute bottom-0 left-0 w-full h-[500%] bg-gradient-to-t from-gray-900/30 -z-10"></div>
      {children}
    </section>
  );
};
