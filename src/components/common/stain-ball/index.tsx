import classNames from "classnames";
import { useAnimateStainBall } from "./use-animate-stain-ball";
import { useRef } from "preact/hooks";

interface props {
  directionType: "VERTICAL" | "HORIZONTAL" | "CENTER";
  defaultPosition?: { x: number; y: number };
  boxId: string;
}
const ramdomNumBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const StainBall = ({
  directionType,
  defaultPosition = { x: 50, y: 50 },
  boxId,
}: props) => {
  const s1 = useRef(ramdomNumBetween(20, 50));
  const s2 = useRef(ramdomNumBetween(20, 50));
  const s3 = useRef(ramdomNumBetween(20, 50));
  const s4 = useRef(ramdomNumBetween(20, 50));

  const { position, stainBallElementRef } = useAnimateStainBall({
    boxId,
    directionType,
    defaultPosition,
  });

  return (
    <section
      ref={stainBallElementRef}
      class={classNames(
        "absolute z-[1] min-w-[300px] min-h-[300px] w-[25%] blur-lg sm:blur-2xl -translate-x-1/2 -translate-y-1/2 aspect-square flex-center [&>div>i]:absolute [&>div>i]:w-full [&>div>i]:h-full"
      )}
      style={{
        left: `calc(${position.value.x}%)`,
        top: `calc(${position.value.y}%)`,
        animation: "move 5s infinite",
        transform: "translate(-50%, -50%)",
        width: "25vw",
        height: "25vw",
      }}
    >
      <div class="w-full h-full relative">
        {/* <i
          class={`opacity-10 sm:animate-[spin_0s_linear_infinite] bg-gradient-to-r from-cyan-500 to-blue-900 rounded-[49%_51%_52%_48%_/_75%_30%_70%_25%]`}
          style={{
            animationDuration: `${s1.current}s`,
          }}
        ></i>
        <i
          class={`opacity-10 sm:animate-[spin_0s_linear_reverse_infinite] bg-gradient-to-r from-purple-500 to-pink-900 rounded-[39%_61%_13%_87%_/_5%_30%_70%_95%]`}
          style={{
            animationDuration: `${s2.current}s`,
          }}
        ></i>
        <i
          class={`opacity-10 sm:animate-[spin_0s_linear_infinite] bg-gradient-to-r from-indigo-500 to-sky-500 rounded-[86%_14%_13%_87%_/_77%_25%_75%_23%]`}
          style={{
            animationDuration: `${s3.current}s`,
          }}
        ></i> */}
        <i
          class={`opacity-10 sm:animate-[spin_0s_linear_reverse_infinite] bg-gradient-to-r from-teal-500/50 to-pink-900 rounded-[35%_65%_1%_99%_/_0%_90%_10%_100%]`}
          style={{
            animationDuration: `${s4.current}s`,
          }}
        ></i>
      </div>
    </section>
  );
};
