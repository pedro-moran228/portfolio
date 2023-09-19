import { CopyButton } from "./copy-button";
import { signal } from "@preact/signals";

const isCopied = signal(false);
const gmail = "pedromoran228@gmail.com";

export const GmailDropSection = () => {
  const handleOnClickCopy = () => {
    if (isCopied.value) return;

    window.navigator.clipboard.writeText(gmail);
    isCopied.value = true;
    setTimeout(() => (isCopied.value = false), 2000);
  };

  return (
    <section class="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute w-full z-10 top-full flex-center p-2 pt-[12px] rounded-b-md shadow-md bg-[#2c4b77] duration-100 flex">
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
