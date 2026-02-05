import axios from "axios";
import { Images } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// importing components
import Spinner from "../../common/Spinner";

const ImageGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //  function to fetch the images
  const fetchImages = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`,
        {
          headers: {
            Authorization: import.meta.env.VITE_PEXELS_API,
          },
        },
      );

      setPhotos((prev) => [...prev, ...res.data.photos]);
    } catch (error) {
      console.log("Error in the fetch images function: ", error.message);
      setError(error.message);
      setPhotos([]);
      toast.error("Failed to fetch images.");
    } finally {
      setLoading(false);
    }
  };

  //   function to load more images
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  //   handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    setPhotos([]);
    setQuery(e.target[0].value.trim());
  };

  useEffect(() => {
    fetchImages();
  }, [query, page]);

  return (
    <div className="min-h-screen w-full py-10">
      <div className="w-full max-w-6xl mx-auto px-8 flex flex-col gap-4 items-center">
        <h2 className="text-3xl font-bold">Image Gallery: {query}</h2>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center justify-center gap-2"
        >
          <input
            type="text"
            defaultValue={query}
            className="p-2 w-1/2 rounded shadow-lg shadow-stone-400/70"
          />

          <input
            type="submit"
            value="Search"
            className="px-3 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-200 bg-stone-800 text-white font-medium"
          />
        </form>

        {/* images container */}
        <div className="h-full w-full grid grid-cols-4 gap-8 lg:gap-12 mt-4">
          {photos &&
            photos.length > 0 &&
            photos.map((photo) => (
              <div
                key={photo.id}
                className="h-40 w-62 rounded hover:scale-105 transition-transform duration-200"
              >
                <img
                  key={photo.id}
                  loading="lazy"
                  src={photo.src.landscape}
                  alt="error"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
        </div>

        {loading && <Spinner />}

        {photos && photos.length > 0 && (
          <button
            onClick={loadMore}
            className="px-3 py-2 rounded bg-stone-800 text-white font-medium cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
