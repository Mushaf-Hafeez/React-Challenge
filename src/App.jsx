// importing components
import ColorGenerator from "./components/1_ColorGenerator/ColorGenerator";
import AvatarGenerator from "./components/2_AvatarGenerator/AvatarGenerator";
import ImageGallery from "./components/3_ImageGallery/ImageGallery";
import ThumbnailDownloader from "./components/4_YoutubeThumbnailDownloader/ThumbnailDownloader";
import TaskPlanner from "./components/5_TaskPlanner/TaskPlanner";
import ImageResizer from "./components/6_ImageResizer/ImageResizer";
import ImageConverter from "./components/7_ImageConverter/ImageConverter";

const App = () => {
  return (
    <main>
      {/* <ColorGenerator /> */}
      {/* <AvatarGenerator /> */}
      {/* <ImageGallery /> */}
      {/* <ThumbnailDownloader /> */}
      {/* <TaskPlanner /> */}
      {/* <ImageResizer /> */}
      <ImageConverter />
    </main>
  );
};

export default App;
