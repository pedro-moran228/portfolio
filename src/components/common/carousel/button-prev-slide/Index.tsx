interface props {
  handleOnClick: () => void;
}
export default function ButtonPrevSlide({ handleOnClick }: props) {
  return (
    <button class="mr-4 text-currentColor" onClick={handleOnClick}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 100 100"
        fill="currentcolor"
        xmlns="http://www.w3.org/2000/svg"
        class="rotate-180"
      >
        <path
          d="M16.4062 1.93231C13.4375 -0.124607 9.28125 -0.59327 5.75 0.786686C2.21875 2.16664 0 5.10881 0 8.33739V91.6555C0 94.8841 2.25 97.8262 5.75 99.2062C9.25 100.586 13.4062 100.144 16.4062 98.0606L76.4062 56.4015L80 53.902V91.6555C80 96.264 84.4687 99.9873 90 99.9873C95.5313 99.9873 100 96.264 100 91.6555V8.33739C100 3.72886 95.5313 0.00557909 90 0.00557909C84.4687 0.00557909 80 3.72886 80 8.33739V46.0909L76.4062 43.5914L16.4062 1.93231Z"
          fill="currentcolor"
        />
      </svg>
    </button>
  );
}
