import React, { useState } from "react";
import toast from "react-hot-toast";

const ImageResizer = () => {
  const [originalImage, setOriginalImage] = useState();
  const [resizedImage, setResizedImage] = useState();

  const [form, setForm] = useState({
    width: "",
    height: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setOriginalImage(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const image = new Image();
    image.src = originalImage;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = parseInt(form.width);
      canvas.height = parseInt(form.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, parseInt(form.width), parseInt(form.height));
      const imageURL = canvas.toDataURL("image/ong", 0.92);
      setResizedImage(imageURL);
    };
  };

  return (
    <div className="h-screen w-full bg-stone-200 py-6">
      <div className="max-w-7xl h-full mx-auto">
        <h2 className="text-3xl font-semibold text-center my-4">
          Image Resizer
        </h2>
        <div className="w-full h-10/12 grid grid-cols-2 gap-4">
          <div className="relative bg-white rounded-2xl">
            <img
              src={originalImage || "placeholder.png"}
              alt=""
              className="w-full h-full object-contain rounded-2xl"
            />
            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0 w-full h-full opacity-0"
              onChange={handleFile}
            />

            <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
              <input
                type="number"
                name="width"
                value={form.width}
                onChange={handleChange}
                className="p-2 rounded bg-white border-2 border-stone-300"
                placeholder="Width"
                disabled={!originalImage}
              />
              <input
                type="number"
                name="height"
                value={form.height}
                onChange={handleChange}
                className="p-2 rounded bg-white border-2 border-stone-300"
                placeholder="Height"
                disabled={!originalImage}
              />
              <input
                type="submit"
                value="Resize"
                className="px-3 py-2 rounded bg-stone-800 text-white cursor-pointer"
              />
            </form>
          </div>
          <div className="bg-white rounded-2xl">
            <img
              src={resizedImage || "placeholder.png"}
              alt=""
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageResizer;
