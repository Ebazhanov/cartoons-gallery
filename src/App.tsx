import React from "react";
import "./App.css";

type SliderData = {
  slide: number;
  icon: string;
  iconColor: string;
  url: string;
}[];

const sliderData: SliderData = [
  {
    slide: 1,
    icon: "star",
    iconColor: "#ff5353",
    url: "https://images.unsplash.com/photo-1619290463523-6d18f6a6b220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80",
  },
  {
    slide: 2,
    icon: "category",
    iconColor: "darkblue",
    url: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  },
  {
    slide: 3,
    icon: "supervised_user_circle",
    iconColor: "forestgreen",
    url: "https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    slide: 4,
    icon: "help_center",
    iconColor: "magenta",
    url: "https://images.unsplash.com/photo-1467224298296-81a33a3f3022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80",
  },
  {
    slide: 5,
    icon: "alarm",
    iconColor: "blueviolet",
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    slide: 1,
    icon: "star",
    iconColor: "#ff5353",
    url: "https://images.unsplash.com/photo-1619290463523-6d18f6a6b220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80",
  },
  {
    slide: 2,
    icon: "category",
    iconColor: "darkblue",
    url: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  },
  {
    slide: 3,
    icon: "supervised_user_circle",
    iconColor: "forestgreen",
    url: "https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    slide: 4,
    icon: "help_center",
    iconColor: "magenta",
    url: "https://images.unsplash.com/photo-1467224298296-81a33a3f3022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80",
  },
  {
    slide: 5,
    icon: "alarm",
    iconColor: "blueviolet",
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    slide: 1,
    icon: "star",
    iconColor: "#ff5353",
    url: "https://images.unsplash.com/photo-1619290463523-6d18f6a6b220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80",
  },
  {
    slide: 2,
    icon: "category",
    iconColor: "darkblue",
    url: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  },
  {
    slide: 3,
    icon: "supervised_user_circle",
    iconColor: "forestgreen",
    url: "https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    slide: 4,
    icon: "help_center",
    iconColor: "magenta",
    url: "https://images.unsplash.com/photo-1467224298296-81a33a3f3022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80",
  },
  {
    slide: 5,
    icon: "alarm",
    iconColor: "blueviolet",
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    slide: 1,
    icon: "star",
    iconColor: "#ff5353",
    url: "https://images.unsplash.com/photo-1619290463523-6d18f6a6b220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80",
  },
  {
    slide: 2,
    icon: "category",
    iconColor: "darkblue",
    url: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  },
  {
    slide: 3,
    icon: "supervised_user_circle",
    iconColor: "forestgreen",
    url: "https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    slide: 4,
    icon: "help_center",
    iconColor: "magenta",
    url: "https://images.unsplash.com/photo-1467224298296-81a33a3f3022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80",
  },
  {
    slide: 5,
    icon: "alarm",
    iconColor: "blueviolet",
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

const App = () => {
  return (
    <div className="gallery">
      {sliderData.map((obj, index: number) => (
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
