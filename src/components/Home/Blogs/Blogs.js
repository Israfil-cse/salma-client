import React from "react";
import caudi from "../../../images/caudi.jpg";
import mitchel from "../../../images/mitchel.jpg";
import BlogNews from "../BlogNews/BlogNews";
const BlogsData = [
  {
    img: mitchel,
    name: "Dr. Rashed",
    date: "08 Sep, 2020",
    quote: "Tooth cancer is taking a challenge",
    news:
      "Fugiat culpa ea adipisicing eiusmod eu est cupidatat commodo aliqua. Lorem non ipsum sit cupidatat eu nisi aliqua. "
  },
  {
    img: caudi,
    name: "Dr. Caudi",
    date: "23 April, 2020",
    quote: "2 times of brush in a day can keep you healthy ",
    news:
      "Fugiat culpa ea adipisicing eiusmod eu est cupidatat commodo aliqua. Lorem non ipsum sit cupidatat eu nisi aliqua. "
  },
  {
    img: mitchel,
    name: "Dr. Mitchel",
    date: "01 May, 2020",
    quote: "Tooth cancer is taking a challenge",
    news:
      "Fugiat culpa ea adipisicing eiusmod eu est cupidatat commodo aliqua. Lorem non ipsum sit cupidatat eu nisi aliqua. "
  }
];

const Blogs = () => {
  return (
    <section>
      <div>
        <div className="text-center blog-news">
          <small style={{ color: "#1cc7c1" }}>Our Blogs</small>
          <h1>From Our Blog News</h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="d-flex row w-75 ">
          {BlogsData.map(blog => (
            <BlogNews blog={blog}></BlogNews>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
