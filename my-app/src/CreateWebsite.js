import React, { useState, useEffect } from 'react';
import verify from "verify.js";
import './createwebsite.css';

function MyComponent() {

    return (
          <div className='wrapper'>
        <header>
          <nav>
            <ul>
              <li><a href="#">startsida</a></li>
              <li><a href="#about">Blogg</a></li>
              <li><a href="#">produkt</a></li>
              <li></li>
            </ul>
          </nav>
        </header>
        <main>
          <h1>Huvudsidan</h1>
          <BlogList />
          </main>
          <footer></footer>
          </div>
    );
  };
  
  function BlogList(){
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
      const fetchData = async () => {
        try {
          const response = await fetch("https://localhost:7063/Blog/AllBlog");
          const data = await response.json();
          setBlogs(data);
        }catch(error){
          console.log("error fetching blogs", error);
        }
      };
      fetchData();
    }, []);

  const createArticle = (blog) =>{
    return (
      <article key={blog.id} onClick={() => handleArticleClick(blog.id)}>
        <h2>Category: {blog.title}</h2>
        <p>{blog.time}</p>
        {createFigure(blog)}
      </article>
    );
  };

  const createFigure = (blog) => {
    return (
      <figure>
        <img src={blog.img} alt={blog.username}></img>
        <figcaption>Author: {blog.username}, </figcaption>
      </figure>
    );
  };

  const handleArticleClick = (blogId) => {
    console.log("blog id", blogId);
  };


  return (
    <div>
      {blogs.map((blog) => createArticle(blog))}
    </div>
  )
}
  export default MyComponent;
