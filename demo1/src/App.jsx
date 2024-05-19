import React, { useState } from 'react';
import './App.css';



function App() {
  const img='https://didongviet.vn/dchannel/wp-content/uploads/2023/08/hinh-nen-3d-hinh-nen-iphone-dep-3d-didongviet-54@2x-576x1024.jpg'
  const icon={
    marginRight:'5%',
    marginTop:'7px',
    marginLeft:'4%'
  }
return (
  <>
  <div style={{ display:'flex',border:'2px solid #999999',fontSize:'20px',}}>
    <div style={{ width:'600px',border:'2px solid #999999'}}>
      <img 
        src={img}
        style={{
          borderRadius:'50%',
          width:'200px',
          height:'200px'
        }}
      />
      <h2>Nguyễn Anh Tuấn</h2>
      <h2>Cao đẳng FPT</h2>
        <div >
        <h4 style={{  marginTop:'30px', marginRight:'55%',fontSize:'30px',marginBottom:'10px'}}> Thông tin cá nhân</h4>
        <div style={{display:'flex'}}>
        <ion-icon name="call" style={icon}> </ion-icon><p >0123456789</p>
        </div>
        <div style={{display:'flex'}}>
        <ion-icon name="mail-open" style={{margin:'4px 27px 0 22px', }}> </ion-icon> <p >anhtuan0578@gmail.com</p>
        </div>
          <div style={{display:'flex'}}>
          <ion-icon name="home" style={icon}></ion-icon><p> Đà Nẵng</p>
          </div>
        <div style={{display:'flex'}}>
        <ion-icon name="male" style={icon}> </ion-icon><p>Nam</p>
        </div>
        </div>
        {/*  */}
        <div >
        <h4 style={{  marginTop:'20px', marginRight:'77%',fontSize:'30px'}}> Kỹ Năng</h4>
        <div  style={{marginLeft:'20px' }}>
          <p style={{marginRight:'65%' }}>HTML,CSS,Javascript.</p>
          <p style={{marginRight:'52%' }}>Framework: Angular, Reactjs.</p>
          <p style={{marginRight:'89%' }}>Mysql</p>
        </div>
        </div>
        {/*  */}
        <div >
        <h4 style={{  marginTop:'20px', marginRight:'77%',fontSize:'30px'}}> Sở Thích</h4>
        <div  >
          <p style={{marginRight:'21%' }}>Nghiên cứu các phần mềm , công nghệ mới.</p>
        </div>
        </div>
        {/*  */}
        <div >
        <h4 style={{  marginTop:'20px', marginRight:'66%',fontSize:'30px'}}> HOẠT ĐỘNG</h4>
        <div  >
          <p style={{marginRight:'31%' }}>Tham gia các hoạt động teambuilding.</p>
          <p style={{marginRight:'16%' }}>Tham gia các hội thảo,sự kiện về chuyên ngành.</p>
        </div>
        </div>
    </div>
    {/*  */}
    <div style={{ width:'700px',border:'2px solid #999999'}}>
    <div >
        <h4 style={{  marginTop:'20px', marginRight:'45%',fontSize:'30px'}}> MỤC TIÊU NGHỀ NGHIỆP</h4>
        <div  >
          <p style={{marginLeft:'5%',width:'600px' }}> Mục tiêu của tôi là trở thành một chuyên gia front-end có sức ảnh hưởng, mang lại giá trị cho người dùng và đóng góp vào sự phát triển của cộng đồng phát triển web.</p>
          <p style={{marginRight:'14%' }}>-Ngắn hạn: 1-2 năm tới hoàn thiện kỹ năng front-end.</p>
          <p style={{marginRight:'15%' }}>-Dài hạn: 3-5 năm tới trở thành chuyên gia front-end.</p>
        </div>
        </div>
    <div >
    </div>
     {/*  */}
        <h4 style={{  marginTop:'20px', marginRight:'77%',fontSize:'30px'}}> HỌC VẤN</h4>
        <div  >
          <p style={{marginRight:'60%' }}> 03/03/2022 -Hiện tại</p>
          <p style={{marginRight:'53%' }}>FPT Polytechnic Đà Nẵng.</p>
          <p style={{marginRight:'44%' }}>Chuyên ngành: Thiết kế website.</p>
        </div>

        <h4 style={{  marginTop:'20px', marginRight:'45%',fontSize:'30px'}}> KINH NGHIỆM LÀM VIỆC</h4>
        <div  >
          <b style={{marginRight:'60%' }}>WEBSITE BÁN HÀNG  </b>
          <p style={{marginLeft:'8%' }}>Front-end: thiết kế giao diện bằng HTML,CSS,Javascript,Bootstrap.</p>
          <p style={{marginRight:'11%' }}>Back-end: thiết kế cơ sở dữ liệu bằng MySql,Nodejs.</p>
        </div>
        <div  >
          <b style={{marginRight:'51%' }}>WEBSITE ĐÁNH GIÁ SÁCH    </b>
          <p style={{marginLeft:'8%' }}>Front-end: thiết kế giao diện bằng HTML,CSS,Javascript,Bootstrap.</p>
          <p style={{marginRight:'11%' }}>Back-end: thiết kế cơ sở dữ liệu bằng MySql,Nodejs.</p>
        </div>
    </div>
   
        
   
  </div>
  </>
)
  
}


export default App;
