function ItemAside({url,title,des}){
    return <>
    <div className="card mb-3">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={url} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{des}</p>
      </div>
   
  </div>
  </div>
   </div>
   </>
}
export default ItemAside;