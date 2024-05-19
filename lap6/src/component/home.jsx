function HomePage(){
    return <>
         <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style={{ width:'80%',margin:' 0 auto'}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg" class="d-block w-100" height={'500px'} width={'500px'} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://vapa.vn/wp-content/uploads/2022/12/anh-con-nguoi-dep-003.jpg" class="d-block w-100" height={'500px'} width={'500px'} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/79/f5/15/79f515c398711239cf733cbe54eebc28.jpg" class="d-block w-100" height={'500px'} width={'500px'} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<marquee>
  <div style={{display: 'inline-block', marginRight: '30px'}}>
    <div>jsaj</div>
    <div>jsaj</div>
  </div>
  <div>sa</div>
</marquee>

    </>
}
export default HomePage;