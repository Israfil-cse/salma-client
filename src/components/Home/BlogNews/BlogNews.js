import React from "react";
import "./BlogNews.css";

const BlogNews = ({ blog }) => {
  return (
    <div className="col-md-4  ">
      <div className="box-shadow">
        <div className="d-flex">
          <img
            className="mr-3"
            style={{ width: "100px" }}
            src={blog.img}
            alt=""
          />
          <div>
            <h5>{blog.name}</h5>
            <h6>{blog.date}</h6>
          </div>
        </div>
        <div className="mt-4">
          <p style={{ fontWeight: "bold" }}>{blog.quote}</p>
          <p className="text-secondary">{blog.news}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
