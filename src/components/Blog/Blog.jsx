import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, cover, 
    author, author_img, 
    posted_date, reading_time, 
    hashtags } = blog;

  console.log(blog);
  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      <p>
            {
                hashtags.map((hashtag, idx) => <span key={idx}><a className="font-semibold" href="#">#{hashtag} </a></span> )
            }
      </p>
      <img src={cover} alt={`cover picture of ${title}`} />
      <div className="flex justify-between">
        <div className="flex mt-2">
          <img className="w-16 h-16 object-cover rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
