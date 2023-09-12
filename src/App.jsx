import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]); 
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    // let totalReadingTime = 0;
    // for(const reading of newReadingTime){
    //     totalReadingTime += reading;
    // }
    setReadingTime(newReadingTime);
    console.log(newReadingTime);
    return newReadingTime;
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}        
        ></Bookmarks>
      </div>
    </>
  );
}

export default App;
