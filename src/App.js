import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Realtors from "./components/realtors/realtors";
import Features from "./components/features/features";
import Story from "./components/story/story";
import Homes from "./components/homes/homes";
import Gallery from "./components/gallery/gallery";
import Footer from "./components/footer/footer";
function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </React.Fragment>
  );
}

export default App;
