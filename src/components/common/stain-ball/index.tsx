import { useAnimateStainBall } from "./use-animate-stain-ball";

export const StainBallReact = ({
  directionType,
  defaultPosition = { x: 50, y: 50 },
  boxId,
}: {
  directionType: "VERTICAL" | "HORIZONTAL" | "CENTER";
  defaultPosition?: { x: number; y: number };
  boxId: string;
}) => {
  const { position, StainBallElementRef } = useAnimateStainBall({
    boxId,
    directionType,
    defaultPosition,
  });

  return (
    <section
      ref={StainBallElementRef}
      class="absolute z-[1] min-w-[300px] min-h-[300px] w-[25%] blur-2xl -translate-x-1/2 -translate-y-1/2 aspect-square flex-center [&>div>i]:absolute [&>div>i]:w-full [&>div>i]:h-full"
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
        <i class="opacity-10 animate-[spin_30s_linear_infinite] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[49%_51%_52%_48%_/_75%_30%_70%_25%]"></i>
        <i class="opacity-10 animate-[spin_40s_linear_reverse_infinite] bg-gradient-to-r from-purple-500 to-pink-900 rounded-[39%_61%_13%_87%_/_5%_30%_70%_95%]"></i>
        <i class="opacity-10 animate-[spin_50s_linear_infinite] bg-gradient-to-r from-indigo-500 to-sky-500 rounded-[86%_14%_13%_87%_/_77%_25%_75%_23%]"></i>
      </div>
    </section>
  );
};
