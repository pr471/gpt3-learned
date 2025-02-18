import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import { blog01,blog02,blog03,blog04, blog05 } from './import-img'


const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">

      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening.We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">

        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="2022" title="AI is the Feature itself , Explore the Feature..."/>
        </div>

        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="2023" title="AI is the Feature itself , Explore the Feature..."/>
          <Article imgUrl={blog03} date="2024" title="AI is the Feature itself , Explore the Feature..."/>
          <Article imgUrl={blog04} date="2024" title="AI is the Feature itself , Explore the Feature..."/>
          <Article imgUrl={blog05} date="2024" title="AI is the Feature itself , Explore the Feature..." />
        </div>

      </div>

    </div>
  )
}

export default Blog
