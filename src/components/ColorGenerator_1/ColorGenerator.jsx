import { useState } from "react";
import toast from "react-hot-toast";

const ColorGenerator = () => {
  const [num, setNum] = useState(0);
  const [colors, setColors] = useState([]);

  // function to generate the random number from 0-255
  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 255);
  };

  // function to generate the color
  const generateColor = () => {
    const r1 = randomNumberGenerator();
    const g1 = randomNumberGenerator();
    const b1 = randomNumberGenerator();
    const r2 = randomNumberGenerator();
    const g2 = randomNumberGenerator();
    const b2 = randomNumberGenerator();

    const gradient = `linear-gradient(to right, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
    return {
      id: Date.now(),
      gradient,
    };
  };

  // handleChange function
  const handleChange = (e) => {
    setNum(parseInt(e.target.value));
  };

  // handleClick function
  const handleClick = (gradient) => {
    window.navigator.clipboard.writeText(gradient);

    toast.success("Copied");
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setColors([]);

    for (let counter = 1; counter <= num; counter += 1) {
      // generate the color and store it in the array
      const color = generateColor();
      setColors((prev) => [...prev, color]);
    }

    setNum(0);
  };

  return (
    <div className="h-screen w-full flex py-10">
      <div className="w-10/12 mx-auto overflow-y-auto scrollbar-none">
        {/* input for the number of gradients */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-2 py-5"
        >
          <input
            type="number"
            value={num}
            min={1}
            max={100}
            onChange={handleChange}
            className="p-2 bg-zinc-200 rounded"
          />

          {/* submit button */}
          <input
            type="submit"
            value="generate"
            className="px-3 py-2 rounded bg-zinc-800 text-white cursor-pointer"
          />
        </form>

        {/* grid of colors */}
        <div className="h-full w-full flex flex-wrap">
          {colors &&
            colors.length > 0 &&
            colors.map((color, index) => (
              <span
                key={index}
                className={`h-40 w-[20%] shrink-0 rounded m-5 cursor-pointer`}
                style={{
                  background: color.gradient,
                }}
                onClick={() => handleClick(color.gradient)}
              ></span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ColorGenerator;
