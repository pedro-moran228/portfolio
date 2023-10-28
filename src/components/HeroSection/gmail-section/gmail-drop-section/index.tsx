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
        "absolute w-[225px] z-50 top-full mt-[3px] flex-center p-2 pt-[12px] rounded-b-md rounded-tr-md shadow-md bg-secondary/50  duration-100 flex",
        {
          "invisible opacity-0 group-hover:visible group-hover:opacity-100":
            !isCopied,
        }
      )}
    >
      <input
        disabled
        value={gmail}
        class="w-full cursor-text truncate text-sm bg-primary rounded-l py-2 px-2"
      />
      <CopyButton onClick={handleOnClickCopy} isCopied={isCopied} />
    </section>
  );
};
