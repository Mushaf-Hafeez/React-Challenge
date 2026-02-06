import { useState } from "react";

// importing icon
import { Download, Search } from "lucide-react";

// importing thumbnail downloader
import youtubeThumbnailDownloaderHd from "youtube-thumbnail-downloader-hd";

const ThumbnailDownloader = () => {
  const [url, setUrl] = useState("");

  //   handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const thumbnail = youtubeThumbnailDownloaderHd(e.target[0].value.trim());
    // console.log(thumbnail);

    setUrl(thumbnail.highMaxRes.url);
  };

  return (
    <div className="min-h-screen w-full">
      <div className="h-full max-w-7xl px-8 py-10 flex flex-col gap-4 items-center mx-auto">
        <h2 className="text-3xl font-bold text-center">
          YouTube Thumbnail Downloader
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center gap-2 justify-center"
        >
          {/* input for the url */}
          <input
            type="text"
            className="w-1/2 p-2 bg-stone-200 shadow-lg shadow-stone-400/80"
            placeholder="Enter youtube URL..."
          />

          <button
            type="submit"
            className="px-3 py-2 rounded flex items-center gap-2 font-medium cursor-pointer hover:scale-105 transition-transform duration-200 bg-stone-800 text-white"
          >
            <Search size={18} />
            Search
          </button>
        </form>

        {/* thumbnails */}
        {url && (
          <div className="h-full w-full flex flex-col gap-2 items-center">
            <img
              src={url}
              alt="Error"
              className="h-11/12 w-9/12 rounded-2xl object-cover"
            />
            <a href={url} target="_blank" download={true}>
              <button className="px-3 py-2 rounded bg-stone-800 text-white font-medium flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200">
                <Download size={18} />
                Download
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThumbnailDownloader;
