// importing components
import ColorGenerator from "./components/1_ColorGenerator/ColorGenerator";
import AvatarGenerator from "./components/2_AvatarGenerator/AvatarGenerator";
import ImageGallery from "./components/3_ImageGallery/ImageGallery";
import ThumbnailDownloader from "./components/4_YoutubeThumbnailDownloader/ThumbnailDownloader";

const App = () => {
  return (
    <main>
      {/* <ColorGenerator /> */}
      {/* <AvatarGenerator /> */}
      {/* <ImageGallery /> */}
      <ThumbnailDownloader />
    </main>
  );
};

export default App;
