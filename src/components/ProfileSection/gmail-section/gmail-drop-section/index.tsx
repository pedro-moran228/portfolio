import classNames from "classnames";
import { CopyButton } from "./copy-button";
import { useState } from "preact/hooks";

const gmail = "pedromoran228@gmail.com";

export const GmailDropSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleOnClickCopy = () => {
    if (isCopied) return;

    window.navigator.clipboard.writeText(gmail);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section
      class={classNames(
        "absolute w-full z-10 top-full flex-center p-2 pt-[12px] rounded-b-md shadow-md bg-[#1f3759]  duration-100 flex",
        {
          "invisible opacity-0 group-hover:visible group-hover:opacity-100":
            !isCopied,
        }
      )}
    >
      <i class="absolute top-0 w-full bg-primary h-[4px] -mx-6"></i>
      <input
        disabled
        value={gmail}
        class="w-full cursor-text truncate text-sm bg-primary rounded-l py-2 px-2"
      />
      <CopyButton onClick={handleOnClickCopy} isCopied={isCopied} />
    </section>
  );
};
