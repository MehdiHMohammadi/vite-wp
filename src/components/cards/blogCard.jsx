import { Link } from "react-router-dom";

function blogCard({ blog, image, index }) {
  console.log('BlogCard.jsx');

  return (
    <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
      <Link key={index} to={`/${blog.id}`}>
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          src={image}
          alt="content"
          className="h-40 rounded w-full object-cover object-center mb-6"
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {index}:مقالات
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {blog.title}
        </h2>
        <p className="leading-relaxed text-base">{blog.body}</p>
      </div>
      </Link>
    </div>
  );
}

export default blogCard;
