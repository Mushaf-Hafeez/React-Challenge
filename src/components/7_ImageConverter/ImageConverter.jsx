// importing shadcn ui components
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ImageConverter = () => {
  const [url, setUrl] = useState("placeholder.png");

  //   handleChange function
  const handleChange = (e) => {
    const uploadedFile = e.target.files[0];

    const blob = URL.createObjectURL(uploadedFile);
    setUrl(blob);
  };

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const image = new Image();

    image.src = url;

    image.onload = () => {
      const canvas = document.createElement("canvas");

      canvas.width = image.width;
      canvas.height = image.height;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(image, 0, 0);
      const finalImageURL = canvas.toDataURL("image/png");

      const anchor = document.createElement("a");
      anchor.href = finalImageURL;
      anchor.download = `${Date.now() + ".png"}`;

      anchor.click();
    };
  };

  return (
    <div className="h-screen w-full py-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto flex flex-col items-center gap-2"
      >
        <h2 className="text-3xl font-bold">Image Converter</h2>

        <Input type={"file"} accept="image/*" onChange={handleChange} />

        <img
          src={url}
          alt="error while rendering the image"
          className="h-40 w-62 object-contain"
        />

        <Input
          type={"submit"}
          className={
            "px-3 py-2 rounded bg-stone-800 text-white cursor-pointer active:scale-95 duration-200"
          }
          value={"Convert"}
        />
      </form>
    </div>
  );
};

export default ImageConverter;
