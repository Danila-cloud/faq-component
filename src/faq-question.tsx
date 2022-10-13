import clsx from "clsx";
import { useState } from "react";
import Arrow from "./arrow.svg";

export function FaqQuestion({ ...props }) {
  const [isVisibly, setVisibly] = useState(false);

  function changeVisibly() {
    setVisibly(!isVisibly);
  }

  return (
    <div
      className="faq mr-[72px] mt-8 border-b border-gray-500 pb-8"
      onClick={changeVisibly}
      role="presentation"
    >
      <div className="flex items-center justify-start">
        <div
          className={clsx(
            "inline-block h-2 origin-center pb-6 transition-all duration-500 ease-in-out",
            isVisibly ? "rotate-180" : ""
          )}
        >
          <Arrow />
        </div>

        <p className="ml-5 inline-block font-sora text-xl font-bold text-neutral-50">
          {props.question}
        </p>
      </div>
      <div
        className={clsx(
          " duration-1400 text-neutral-50 transition-all ease-in-out",
          isVisibly ? "max-h-72" : "max-h-0 overflow-hidden"
        )}
      >
        <p className="font-sora mt-8 text-xl text-neutral-50">{props.answer}</p>
      </div>
    </div>
  );
}
