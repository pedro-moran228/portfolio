import classNames from "classnames";

interface props {
  handleOnClick: () => void;
  isPlaying: { value: boolean };
}
export default function ButtonPauseCarousel({
  handleOnClick,
  isPlaying,
}: props) {
  return (
    <button
      aria-label="Pause button"
      onClick={handleOnClick}
      class={classNames("mr-4 text-currentColor", { hidden: !isPlaying.value })}
    >
      <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
        <path
          d="M100 8.33333V91.6667C100 93.8768 99.0422 95.9964 97.3373 97.5592C95.6325 99.122 93.3201 100 90.9091 100H68.1818C65.7708 100 63.4585 99.122 61.7536 97.5592C60.0487 95.9964 59.0909 93.8768 59.0909 91.6667V8.33333C59.0909 6.1232 60.0487 4.00358 61.7536 2.44078C63.4585 0.877973 65.7708 0 68.1818 0H90.9091C93.3201 0 95.6325 0.877973 97.3373 2.44078C99.0422 4.00358 100 6.1232 100 8.33333ZM31.8182 0H9.09091C6.67985 0 4.36754 0.877973 2.66267 2.44078C0.957789 4.00358 0 6.1232 0 8.33333V91.6667C0 93.8768 0.957789 95.9964 2.66267 97.5592C4.36754 99.122 6.67985 100 9.09091 100H31.8182C34.2292 100 36.5415 99.122 38.2464 97.5592C39.9513 95.9964 40.9091 93.8768 40.9091 91.6667V8.33333C40.9091 6.1232 39.9513 4.00358 38.2464 2.44078C36.5415 0.877973 34.2292 0 31.8182 0Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
