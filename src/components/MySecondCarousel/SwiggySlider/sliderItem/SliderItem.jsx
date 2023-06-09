import React from "react";
import { styled } from "@mui/styles";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";

const SliderContainer = styled("div")({
  height: "100%",
  paddingLeft: "px",
  backgroundColor: "",
  // zIndex:"1"
});
const ImageContainer = styled("div")({
  display: "flex",
  margin:"6px",
  padding:'2px',
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  border: "0.2px solid black",
});

// const Head = styled("h3")({
//     fontSize: "16px",
//     fontWeight:"500",
//     textAlign:"center",
//     marginBottom:"5px",
//     "@media (max-width: 600px)": {
//        fontSize: "13px",
//        },
// })
// const Para = styled("p")({
//     fontSize:"14px",
//     fontWeight:"600",
//     "@media (max-width: 600px)": {
//         fontSize: "12px",
//         },
// })
const SliderItem = ({ posterLinks }) => {
  console.log(posterLinks);
  return (
    <SliderContainer>
      <ImageContainer>
        {/* <Image src={posterLinks.image} /> */}
        <Typography style={{ margin: "0.78125vw  " }} variant="h5">
          {posterLinks.title}{" "}
        </Typography>
        <Typography style={{ margin: "0.78125vw  " }} variant="body1">
          {posterLinks.description}{" "}
        </Typography>
        <div style={{ display: "flex", flexDirection:"row",justifyContent:"space-around",width:"100%",alignItems:"center",paddingBottom:"10px"}}>
          <Avatar
            style={{ marginRight: "5%" }}
            alt="Profile Picture"
            src={posterLinks.image}
          />

          <Typography style={{ marginRight: "5%" }} variant="body2">
            {posterLinks.author}{" "}
          </Typography>
          <Typography style={{ marginLeft: "5%" }} variant="body2">
            {posterLinks.date}{" "}
          </Typography>
        </div>
      </ImageContainer>
    </SliderContainer>
  );
};

export default SliderItem;
