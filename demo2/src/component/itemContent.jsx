function ItemContent({url,title,des}){
    return<>
        <div className="card mb-3">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={url} className="img-fluid rounded-start" alt="..." style={{width:'200px',height:'200px'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{des}</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
   
  </div>
  </div>
   </div>
    </>
}
export default ItemContent;