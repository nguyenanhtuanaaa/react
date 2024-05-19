function Form(){
    return<>
    <h2 style={{ textAlign:'center', color:'#999999'}}>
        Đăng Kí
    </h2>
       <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <label  className="form-label">Password</label>
    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Password"/>
    <center>
    <button type="button" className="btn btn-primary" style={{marginTop:'10px'}}>Đăng Kí</button>

    </center>
    </>
}
export default Form;