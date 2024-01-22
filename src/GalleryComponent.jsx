import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import image1 from "./assets/gallery/1.jpeg";
import image2 from "./assets/gallery/2.jpeg";
import image3 from "./assets/gallery/3.jpeg";
import image4 from "./assets/gallery/4.jpeg";
import image5 from "./assets/gallery/5.jpeg";
import image6 from "./assets/gallery/6.jpeg";
import image7 from "./assets/gallery/7.jpeg";
import image8 from "./assets/gallery/8.jpeg";
import image9 from "./assets/gallery/9.jpeg";
import image10 from "./assets/gallery/10.jpeg";
import image11 from "./assets/gallery/11.jpeg";
import image12 from "./assets/gallery/12.jpeg";
import image13 from "./assets/gallery/13.jpeg";
import image14 from "./assets/gallery/14.jpeg";
import image15 from "./assets/gallery/15.jpeg";
import image16 from "./assets/gallery/16.jpeg";
import image17 from "./assets/gallery/17.jpeg";
import image18 from "./assets/gallery/18.jpeg";
import image19 from "./assets/gallery/19.jpeg";
import image20 from "./assets/gallery/20.jpeg";
import image21 from "./assets/gallery/21.jpeg";
import image22 from "./assets/gallery/22.jpeg";
import image23 from "./assets/gallery/23.jpeg";
import image24 from "./assets/gallery/24.jpeg";
import image25 from "./assets/gallery/25.jpeg";
import image26 from "./assets/gallery/26.jpeg";
import image27 from "./assets/gallery/27.jpeg";
import image28 from "./assets/gallery/28.jpeg";
import image29 from "./assets/gallery/29.jpeg";
import image30 from "./assets/gallery/30.jpeg";
import image31 from "./assets/gallery/31.jpeg";
import image32 from "./assets/gallery/32.jpeg";
import image33 from "./assets/gallery/33.jpeg";
import image34 from "./assets/gallery/34.jpeg";
import image35 from "./assets/gallery/35.jpeg";
import image36 from "./assets/gallery/36.jpeg";
import image37 from "./assets/gallery/37.jpeg";
import image38 from "./assets/gallery/38.jpeg";
import image39 from "./assets/gallery/39.jpeg";
import image40 from "./assets/gallery/40.jpeg";
import image41 from "./assets/gallery/41.jpeg";
import image42 from "./assets/gallery/42.jpeg";
import image43 from "./assets/gallery/43.jpeg";
import image44 from "./assets/gallery/44.jpeg";
import image45 from "./assets/gallery/45.jpeg";
import image46 from "./assets/gallery/46.jpeg";
import image47 from "./assets/gallery/47.jpeg";
import image48 from "./assets/gallery/48.jpeg";
import image49 from "./assets/gallery/49.jpeg";
import image50 from "./assets/gallery/50.jpeg";
import image51 from "./assets/gallery/51.jpeg";
import image52 from "./assets/gallery/52.jpeg";
import image53 from "./assets/gallery/53.jpeg";
import image54 from "./assets/gallery/54.jpeg";
import image55 from "./assets/gallery/55.jpeg";
import image56 from "./assets/gallery/56.jpeg";
import image57 from "./assets/gallery/57.jpeg";
import image58 from "./assets/gallery/58.jpeg";
import image59 from "./assets/gallery/59.jpeg";
import image60 from "./assets/gallery/60.jpeg";
import image61 from "./assets/gallery/61.jpeg";
import image62 from "./assets/gallery/62.jpeg";
import image63 from "./assets/gallery/63.jpeg";
import image64 from "./assets/gallery/64.jpeg";
import image65 from "./assets/gallery/65.jpeg";
import image66 from "./assets/gallery/66.jpeg";

const images = [
  { original: image1, thumbnail: image1 },
  { original: image2, thumbnail: image2 },
  { original: image3, thumbnail: image3 },
  { original: image4, thumbnail: image4 },
  { original: image5, thumbnail: image5 },
  { original: image6, thumbnail: image6 },
  { original: image7, thumbnail: image7 },
  { original: image8, thumbnail: image8 },
  { original: image9, thumbnail: image9 },
  { original: image10, thumbnail: image10 },
  { original: image11, thumbnail: image11 },
  { original: image12, thumbnail: image12 },
  { original: image13, thumbnail: image13 },
  { original: image14, thumbnail: image14 },
  { original: image15, thumbnail: image15 },
  { original: image16, thumbnail: image16 },
  { original: image17, thumbnail: image17 },
  { original: image18, thumbnail: image18 },
  { original: image19, thumbnail: image19 },
  { original: image20, thumbnail: image20 },
  { original: image21, thumbnail: image21 },
  { original: image22, thumbnail: image22 },
  { original: image23, thumbnail: image23 },
  { original: image24, thumbnail: image24 },
  { original: image25, thumbnail: image25 },
  { original: image26, thumbnail: image26 },
  { original: image27, thumbnail: image27 },
  { original: image28, thumbnail: image28 },
  { original: image29, thumbnail: image29 },
  { original: image30, thumbnail: image30 },
  { original: image31, thumbnail: image31 },
  { original: image32, thumbnail: image32 },
  { original: image33, thumbnail: image33 },
  { original: image34, thumbnail: image34 },
  { original: image35, thumbnail: image35 },
  { original: image36, thumbnail: image36 },
  { original: image37, thumbnail: image37 },
  { original: image38, thumbnail: image38 },
  { original: image39, thumbnail: image39 },
  { original: image40, thumbnail: image40 },
  { original: image41, thumbnail: image41 },
  { original: image42, thumbnail: image42 },
  { original: image43, thumbnail: image43 },
  { original: image44, thumbnail: image44 },
  { original: image45, thumbnail: image45 },
  { original: image46, thumbnail: image46 },
  { original: image47, thumbnail: image47 },
  { original: image48, thumbnail: image48 },
  { original: image49, thumbnail: image49 },
  { original: image50, thumbnail: image50 },
  { original: image51, thumbnail: image51 },
  { original: image52, thumbnail: image52 },
  { original: image53, thumbnail: image53 },
  { original: image54, thumbnail: image54 },
  { original: image55, thumbnail: image55 },
  { original: image56, thumbnail: image56 },
  { original: image57, thumbnail: image57 },
  { original: image58, thumbnail: image58 },
  { original: image59, thumbnail: image59 },
  { original: image60, thumbnail: image60 },
  { original: image61, thumbnail: image61 },
  { original: image62, thumbnail: image62 },
  { original: image63, thumbnail: image63 },
  { original: image64, thumbnail: image64 },
  { original: image65, thumbnail: image65 },
  { original: image66, thumbnail: image66 },
];

// const images = [
//   {
//     original: image1,
//     thumbnail: image1,
//   },
//   {
//     original: "./assets/gallery/2.jpeg",
//     thumbnail: "./assets/gallery/2.jpeg",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

// const images = Array.from({ length: 65 }, (_, i) => ({
//   original: `image${i + 1}`,
//   thumbnail: `image${i + 1}`,
// }));

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery;
