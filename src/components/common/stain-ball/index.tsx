import { useSignal, useComputed } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

const INITIAL_VELOCITY = 0.0025;
const initDirection = {
  VERTICAL: {
    x: 0.3,
    y: 0.7,
  },
  HORIZONTAL: {
    x: -0.7,
    y: -0.3,
  },
  CENTER: {
    x: -0.5,
    y: -0.5,
  },
};

export const StainBallReact = ({
  directionType,
  defaultPosition = { x: 50, y: 50 },
  boxId,
}: {
  directionType: "VERTICAL" | "HORIZONTAL" | "CENTER";
  defaultPosition?: { x: number; y: number };
  boxId: string;
}) => {
  const BallRef = useRef<HTMLElement>(null);
  const directionRef = useRef(initDirection[directionType]);

  const position = useSignal(defaultPosition);

  const getRect = () => BallRef.current?.getBoundingClientRect();

  function update(delta: number) {
    const rect = getRect();
    const box = document.getElementById(boxId);

    if (!rect || !box) return;

    const boxRect = box.getBoundingClientRect();

    position.value = {
      x: position.value.x + directionRef.current.x * INITIAL_VELOCITY * delta,
      y: position.value.y + directionRef.current.y * INITIAL_VELOCITY * delta,
    };

    //* ------ Bounce off the walls ------ *//

    //*BOTTOM WALL: "Y" changes to negative when it hits the bottom wall so it goes up
    if (rect.bottom >= boxRect.bottom && directionRef.current.y > 0) {
      directionRef.current = {
        x: directionRef.current.x,
        y: -directionRef.current.y,
      };
    }

    //*TOP WALL: "Y" changes to positive when it hits the top wall so it goes down
    if (rect.top <= boxRect.top && directionRef.current.y < 0) {
      directionRef.current = {
        x: directionRef.current.x,
        y: -directionRef.current.y,
      };
    }

    //*LEFT WALL: "X" changes to negative when it hits the right wall so it goes right
    if (rect.right >= boxRect.right && directionRef.current.x > 0) {
      directionRef.current = {
        x: -directionRef.current.x,
        y: directionRef.current.y,
      };
    }

    //*RIGHT WALL: "X" changes to positive when it hits the left wall so it goes left
    if (rect.left <= boxRect.left && directionRef.current.x < 0) {
      directionRef.current = {
        x: -directionRef.current.x,
        y: directionRef.current.y,
      };
    }
  }

  useEffect(() => {
    // reset();
    let lastTime;

    function trigger(time) {
      if (lastTime) {
        const delta = time - lastTime;
        update(delta);
      }
      lastTime = time;
      window.requestAnimationFrame(trigger);
    }

    window.requestAnimationFrame(trigger);
  }, []);

  return (
    <section
      ref={BallRef}
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
        {/* <h1 class="text-white">{JSON.stringify(position.value)}</h1> */}
        <i class="opacity-10 animate-[spin_30s_linear_infinite] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[49%_51%_52%_48%_/_75%_30%_70%_25%]"></i>
        <i class="opacity-10 animate-[spin_40s_linear_reverse_infinite] bg-gradient-to-r from-purple-500 to-pink-900 rounded-[39%_61%_13%_87%_/_5%_30%_70%_95%]"></i>
        <i class="opacity-10 animate-[spin_50s_linear_infinite] bg-gradient-to-r from-indigo-500 to-sky-500 rounded-[86%_14%_13%_87%_/_77%_25%_75%_23%]"></i>
      </div>
    </section>
  );
};
