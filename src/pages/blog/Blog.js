import Block1 from 'contents/blog/block1/Block1'
import Block2 from 'contents/blog/block2/Block2'
import Block1N from 'contents/home/block1/Block1'
import Footer from 'layout/mainLayout/footer/Footer'
import Navbar from 'layout/mainLayout/navbar/Navbar'
import React from 'react'

const Blog = () => {
  return (
    <div style={{ maxwidth:'100%',
    overflowX: 'hidden',  backgroundImage: "url(https://wallpaperaccess.com/full/1288325.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}>
     <Block1N />
     <Block1 />
     <Block2 />
     <Footer />
    </div>
  )
}

export default Blog
