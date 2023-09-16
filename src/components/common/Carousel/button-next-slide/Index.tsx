interface props {
  handleOnClick: () => void;
}
export default function ButtonNextSlide({ handleOnClick }: props) {
  return (
    <button
      id="next"
      onClick={handleOnClick}
      class="right-0 opacity-0 h-full absolute z-20 top-1/2 -translate-y-1/2 w-[80px] flex-center group-hover:flex hover:scale-125 duration-150 bg-gradient-to-l from-gray-900/50 group-hover:opacity-100"
    >
      <svg
        stroke="#FFF"
        fill="#FFF"
        class="transform group-hover:scale-125 transition-transform duration-100"
        viewBox="0 0 1024 1024"
        height="20px"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"></path>
      </svg>
    </button>
  );
}
