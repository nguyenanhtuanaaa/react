import ItemAside from "./itemAside";

function List(){
   
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
        return <ItemAside  key={`post-${index}`}{...item}/>;
      });
    return<>
    <hr></hr>
        <h2 style={{ marginTop:'20px', textAlign:'center',color:'#999999',marginBottom:'20px'}}>Danh Sách</h2>
        <div>{dataDom}</div>
    </>
}
export default List;