import { useState } from "react";

const Language = () => {
  const [selected, setSelected] = useState("English");

  const languages = ["English", "French", "German"];

  return (
    <div className="w-full flex flex-col gap-5 items-center">
      {languages.map((lang, idx) => (
        <label key={idx} htmlFor={lang} className="w-full cursor-pointer">
          <div className="w-full flex items-center gap-2 border border-[#313131] py-3 rounded-md transition-colors">
            <div className="flex justify-between items-center w-full px-5">
              <h1>{lang}</h1>
              <input
                type="radio"
                id={lang}
                name="language"
                value={lang}
                checked={selected === lang}
                onChange={() => setSelected(lang)}
                className="accent-[#7A6EFF] bg-none"
              />
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};

export default Language;
