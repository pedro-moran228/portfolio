import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  isCopied: { value: boolean };
}

export const CopyButton = (props: Props) => {
  const isCopied = props.isCopied.value;

  return (
    <button
      class={classNames(
        "bg-primary border border-gray-500 self-stretch flex-center w-[40px] rounded-r hover:border-white transition-all duration-100",
        { "border-white": isCopied }
      )}
      {...props}
    >
      <svg
        class={classNames({ hidden: isCopied })}
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        height="16px"
        width="16px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
      </svg>
      <p
        class={classNames(
          "absolute cursor-default text-white bottom-full rounded -right-5 rotate-3 bg-primary border shadow-md text-[14px] px-2 py-1",
          { hidden: !isCopied }
        )}
      >
        Copiado!
      </p>
      <svg
        class={classNames({ hidden: !isCopied })}
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3909 0.258764C12.4777 0.176836 12.5814 0.111751 12.6958 0.0673184C12.8102 0.0228862 12.9331 0 13.0572 0C13.1813 0 13.3041 0.0228862 13.4185 0.0673184C13.5329 0.111751 13.6366 0.176836 13.7235 0.258764C14.0875 0.598788 14.0926 1.14824 13.7362 1.49414L6.21039 9.71825C6.12494 9.80499 6.02126 9.8747 5.90566 9.92312C5.79007 9.97154 5.66501 9.99765 5.53813 9.99985C5.41125 10.0021 5.28521 9.9803 5.16774 9.93593C5.05026 9.89156 4.94381 9.82549 4.85491 9.74178L0.275541 5.45207C0.0989299 5.28557 0 5.06168 0 4.8285C0 4.59531 0.0989299 4.37142 0.275541 4.20492C0.362401 4.123 0.46607 4.05791 0.580478 4.01348C0.694886 3.96905 0.817733 3.94616 0.941827 3.94616C1.06592 3.94616 1.18877 3.96905 1.30318 4.01348C1.41758 4.05791 1.52125 4.123 1.60811 4.20492L5.49256 7.844L12.3654 0.284648C12.3733 0.275556 12.3818 0.266912 12.3909 0.258764Z"
          fill="#37d766"
        ></path>
      </svg>
    </button>
  );
};
