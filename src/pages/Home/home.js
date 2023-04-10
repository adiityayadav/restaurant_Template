import Block1N from 'contents/home/block1/Block1';
import Block2 from 'contents/home/block2/Block2';
import Block3 from 'contents/home/block3/Block3';
import Block4 from 'contents/home/block4/Block4';
import Block5 from 'contents/home/block5/Block5';
import Block6 from 'contents/home/block6/Block6';
import React from 'react';

export default  function Home  ()  {
  

  return (
    <div style={{ maxwidth:'100%',
    overflowX: 'hidden',  backgroundImage: "url(https://wallpaperaccess.com/full/1288325.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}>
     
      <Block2 /> <Block1N />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />   
    </div>
  )

};

