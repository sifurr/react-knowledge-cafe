import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog,handleAddToBookmark, handleMarkAsRead }) => {
  const {id, title, cover, 
    author, author_img, 
    posted_date, reading_time, 
    hashtags } = blog;
  
  return (
    <div className="mb-20">      
      <img className="w-full mb-8" src={cover} alt={`cover picture of ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex mt-2">
          <img className="w-16 h-16 object-cover rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={()=>handleAddToBookmark(blog)} className="ml-2 text-2xl text-red-500"><FaBookmark></FaBookmark></button>
        </div>
      </div>
      <h1 className="text-4xl mb-4">{title}</h1>
      <p>
            {
                hashtags.map((hashtag, idx) => <span key={idx}><a className="font-semibold" href="#">#{hashtag} </a></span> )
            }
      </p>
      <br />
      <button className="text-purple-600 font-bold underline" onClick={()=>handleMarkAsRead(id, reading_time)}>Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};
export default Blog;
