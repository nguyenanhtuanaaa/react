import React from "react";
import ItemContent from "./itemContent";
import ItemAside from "./itemAside";
function Content(){
  let data=[
    {
      url:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      title:"React",
      des:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
    {
      url:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      title:"CSS",
      des:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
    {
      url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/1200px-HTML5_logo_resized.svg.png",
      title:"HTML",
      des:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },

  ];
  let dataDom = data.map((item,index) => {
    return <ItemContent  key={`post-${index}`}{...item}/>;
  });
    return <>
<div className="col-9">
   <h1>React</h1>
   <hr></hr>
  <div>{dataDom}</div>
</div>
  </> 
  }
  export default Content; 