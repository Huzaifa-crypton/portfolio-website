import "./Blog.css";
import React from 'react'

const Blog = () => {
  const decreaseTextLength = (text, length) => {

    var trimmedString = text.length > length ? text.substring(0, length - 3) + "..." : text;
    return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
  }
  return (
    <div className="blogBody">
      <img src="https://source.unsplash.com/random/" alt="Blog_img" />

      <div className="blogContent">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, repellendus!</h1>
        <p>September 12, 2020</p>
        {<h5>{decreaseTextLength("Lorem dolor sit amet, consectetur adipisicing elit. Culpa sequi quo officiis iste facere, voluptas nostrum blanditiis, voluptates optio amet magnam similique laborum veniam ex, minima adipisci odio ut at ullam! Consequatur, debitis dignissimos magni aliquam quaerat in officia quae laboriosam omnis, doloremque libero eum quo, expedita dolore corporis cupiditate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sequi quo officiis iste facere, voluptas nostrum blanditiis, voluptates optio amet magnam similique laborum veniam ex, minima adipisci odio ut at ullam! Consequatur, debitis dignissimos magni aliquam quaerat in officia quae laboriosam omnis, doloremque libero eum quo, expedita dolore corporis cupiditate?", 500)}  <a href="https://www.google.com">Read More</a></h5>}
      </div>

      <hr />
    </div>
  )
}

export default Blog