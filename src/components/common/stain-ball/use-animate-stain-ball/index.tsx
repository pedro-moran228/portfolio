import { useSignal } from "@preact/signals";
import { useRef, useEffect } from "preact/hooks";

interface props {
  directionType: "VERTICAL" | "HORIZONTAL" | "CENTER";
  defaultPosition?: { x: number; y: number };
  boxId: string;
}

const INITIAL_VELOCITY = 0.0025;

const DIRECTIONS = {
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

export const useAnimateStainBall = ({
  directionType,
  defaultPosition = { x: 50, y: 50 },
  boxId,
}: props) => {
  const stainBallElementRef = useRef<HTMLElement>(null);
  const directionRef = useRef(DIRECTIONS[directionType]);
  const windowTabFocused = useRef(true);
  const position = useSignal(defaultPosition);

  const getRect = () => stainBallElementRef.current?.getBoundingClientRect();

  function update(delta: number) {
    const rect = getRect();
    const box = document.getElementById(boxId);

    if (!rect || !box || !windowTabFocused.current) return;

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
    const box = document.getElementById(boxId);

    let lastTime;
    let requestID;

    function trigger(time) {
      if (lastTime) {
        const delta = time - lastTime;
        update(delta);
      }
      lastTime = time;

      const id = window.requestAnimationFrame(trigger);
      requestID = id;

      return () => {
        window.cancelAnimationFrame(requestID);
        requestID = undefined;
        lastTime = undefined;
      };
    }

    const handler = ([observe]: IntersectionObserverEntry[]) => {
      const { isIntersecting } = observe;

      if (isIntersecting && !requestID) {
        const id = window.requestAnimationFrame(trigger);
        requestID = id;
        console.log("active with id: ", id);
      }
      if (!isIntersecting && requestID) {
        window.cancelAnimationFrame(requestID);
        requestID = undefined;
        lastTime = undefined;
      }
    };

    window.addEventListener("blur", () => {
      windowTabFocused.current = false;
    });

    window.addEventListener("focus", () => {
      windowTabFocused.current = true;
    });

    const observer = new IntersectionObserver(handler, {
      root: null,
      threshold: 0,
    });
    observer.observe(box);
  }, []);

  return { position, stainBallElementRef };
};
