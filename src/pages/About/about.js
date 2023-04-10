import Block1 from 'contents/about/block1/Block1'
import Footer from 'layout/mainLayout/footer/Footer'
import Navbar from 'layout/mainLayout/navbar/Navbar'
import React from 'react'
import Block2 from 'contents/about/block2/Block2'
import Block3a from 'contents/about/block3/Block3'
import Block5 from 'contents/home/block5/Block5'
import Block1N from 'contents/home/block1/Block1'
const About = () => {
  return (
    <div style={{ maxwidth:'100%',
    overflowX: 'hidden',  backgroundImage: "url(https://wallpaperaccess.com/full/1288325.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}>
        <Block1N/>
        <Block1 />
        <Block2 />
        <Block3a />
        <Block5 />
        <Footer />
      
    </div>
  )
}

export default About
