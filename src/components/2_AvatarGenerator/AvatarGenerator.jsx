// api
// https://api.dicebear.com/9.x/personas/svg?seed=

import { useEffect, useState } from "react";

// importing icons
import { Download, Files, RotateCcw } from "lucide-react";
import toast from "react-hot-toast";

const AvatarGenerator = () => {
  const [selectedOption, setSelectedOption] = useState("adventurer");
  const [src, setSrc] = useState(
    "https://api.dicebear.com/9.x/personas/svg?seed=1",
  );

  const options = [
    { label: "Adventurer", value: "adventurer" },
    { label: "Personas", value: "personas" },
    { label: "Pixel Art", value: "pixel-art" },
    { label: "Toon Head", value: "toon-head" },
    { label: "Micah", value: "micah" },
    { label: "Open Peeps", value: "open-peeps" },
  ];

  // generate random number
  const generateRandomNumber = () => {
    return Date.now();
  };

  // function to generate avatar
  const generateAvatar = () => {
    const randomNumber = generateRandomNumber();
    const newSrc = `https://api.dicebear.com/9.x/${selectedOption}/svg?seed=${randomNumber}`;
    setSrc(newSrc);
  };

  //   handleChange function
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // handleCopy function
  const handleCopy = () => {
    navigator.clipboard.writeText(src);
    toast.success("Copied.");
  };

  useEffect(() => {
    (function () {
      generateAvatar();
    })();
  }, [selectedOption]);

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md flex flex-col items-center gap-2 px-5 pt-10 pb-4 border-2 border-stone-300 rounded-xl shadow-xl shadow-stone-300">
        <img
          src={src}
          alt="error while rendering the image"
          className="size-28 rounded-full object-cover border-4 mb-5 border-stone-300 shadow-lg shadow-stone-300"
        />

        {/* title of the card */}
        <h2 className="text-3xl font-medium">Avatar Generator</h2>
        <p className="text-stone-500 font-medium">Create your own avatar</p>

        {/* options */}
        <select
          value={selectedOption}
          onChange={handleChange}
          className="p-2 w-full rounded cursor-pointer border-2 border-stone-300 outline-none"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* buttons */}
        <div className="w-full flex items-center justify-center gap-3 my-2">
          <button
            className="px-3 py-2 rounded bg-stone-800 text-white font-medium cursor-pointer flex items-center gap-1"
            onClick={generateAvatar}
          >
            <RotateCcw size={16} />
            Change
          </button>
          <a href={src} target="_blank">
            <button className="px-3 py-2 rounded bg-stone-800 text-white font-medium cursor-pointer flex items-center gap-1">
              <Download size={18} />
              Download
            </button>
          </a>
          <button
            className="px-3 py-2 rounded bg-stone-800 text-white font-medium cursor-pointer flex items-center gap-1"
            onClick={handleCopy}
          >
            <Files size={18} />
            Copy
          </button>
        </div>

        {/* footer */}
        <p className="text-xs text-stone-500">
          Created by <span className="font-medium">Mushaf Hafeez</span>
        </p>
      </div>
    </main>
  );
};

export default AvatarGenerator;
