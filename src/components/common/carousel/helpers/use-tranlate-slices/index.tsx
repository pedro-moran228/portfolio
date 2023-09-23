import { useEffect } from "preact/hooks";

interface props {
  handleOnInterval: () => void;
  actived: { value: boolean };
}

export const useTranlateSlices = ({ actived, handleOnInterval }: props) => {
  useEffect(() => {
    const intervalID = setInterval(() => {
      handleOnInterval();
    }, 4000);

    if (!actived.value) {
      clearInterval(intervalID);
    }

    return () => clearInterval(intervalID);
  }, [actived.value]);

  return;
};
