import Block3a from 'contents/about/block3/Block3'
import Block1N from 'contents/home/block1/Block1'
import Block1 from 'contents/menu/block1/Block1'
import Block2 from 'contents/menu/block2/Block2'
import Block3 from 'contents/menu/block3/Block3'
import Block4 from 'contents/menu/block4/Block4'
import Block5 from 'contents/menu/block5/Block5'
import Footer from 'layout/mainLayout/footer/Footer'
import Navbar from 'layout/mainLayout/navbar/Navbar'
import React from 'react'

const Menu = () => {
    return (
        <div style={{
            maxwidth: '100%',
            overflowX: 'hidden', backgroundImage: "url(https://wallpaperaccess.com/full/1288325.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <Block1N />
            <Block1 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Block3a />
            <Block5 />

            <Footer />
        </div>
    )
}

export default Menu
