import React from "react";
import "./App.css";
import { galleryImages } from "./Gallery";

const App = () => {
  return (
    <div className="gallery">
      {galleryImages.map((obj, index: number) => (
        <div
          key={index}
          className="image"
          style={{
            backgroundImage: `url(${obj.url})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default App;
