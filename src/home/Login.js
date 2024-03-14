export default function Login() {
    return (
        <>
            <style>{`
            
              .input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
              border-bottom-left-radius: 0;
              border-top-left-radius: 0;
              margin-left: -1px;
              }
              
              .auth .form-control {
    background: #fff 0 0 no-repeat padding-box;
    border: none;
    font-size: 14px;
    padding-bottom: 7px;
    padding-top: 7px;
}

.input-group>.form-control, .input-group>.form-select {
    flex: 1 1 auto;
    min-width: 0;
    position: relative;
    width: 1%;
}
.form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    color: #212529;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    width: 100%;
}
.col-8{
display: flex;
    justify-content: center;
}
.col-12 {
display: flex;
flex:1;
padding:0 0 0;
position: relative;
scrollbar-width: none;
Justify-content: center
}

                `
            }

            </style>

            <div className={'row'}>

                    <div className="col-12 container-fluid "
                         style={{overflow: 'hidden', overflowY: 'auto', maxHeight: 'calc(100vh - 100%)'}}>
                        <div className="hic col-8 mt-5">
                            <form>
                                <div className="hg">

                                    <h4 className="text-success"> Chào mừng bạn đã quay trở lại </h4>
                                    <p>Cùng nhau xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
                                        tưởng </p>
                                    <div className="form-group mb-3">
                                        <label form="email" className="mb-8">Email</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
<i className="fa-solid fa-envelope" style={{color: "#26cf61"}}></i>
                                            </span>
                                            </div>
                                            <input type="email" placeholder="Email" className={'form-control'}
                                                   id="email"/>
                                        </div>
                                    </div>


                                    <div className="form-group mx-lg-auto wrap-forgot-passwork">
                                        <a href="/" style={{color: "green"}}> Quên mật khẩu </a>
                                    </div>


                                    <div className="form-group col-12">
                                        <button type="submit" className="btn btn-primary btn-block btn btn-success">Đăng
                                            nhập
                                        </button>
                                    </div>
                                    <p className="or text-center fz-12px">Hoặc đăng nhập bằng</p>

                                    <div className="row mt-2 ml-4">
                                        <div className="login-social-list col-4">
                                            <a href="" className="btn btn-default btn-signin input-block-level h-40"
                                               style={{background: "red"}}>
                                                <i className="fa-brands fa-google" style={{color: "#ffffff"}}></i>
                                                <span className="ml-1" style={{color: "white"}}>Google</span>
                                            </a>
                                            <div className="d-none" id="login-google-render"></div>
                                        </div>

                                        <div className="col-4">
                                            <a href=""
                                               className="btn btn-signin btn-primary input-block-level h-40 btn-login-social">
                                                <i className="fa-brands fa-facebook" style={{color: "#eceff3"}}></i>
                                                <span className="ml-1">Facebook</span>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a href=""
                                               className="btn btn-default btn-signin btn-signin-linkedin input-block-level h-40 btn-login-social"
                                               style={{background: "black"}}>
                                                <i className="fa-brands fa-x-twitter" style={{color: "#e7eaee"}}></i>
                                                <span className="ml-1" style={{color: "white"}}>Twitter</span>
                                            </a>
                                        </div>

                                    </div>
                                    <div
                                        className="mt-3 d-flex justify-content-center option-auth text-center wrap-redirect-login">
                                    <span>Bạn chưa có tài khoản?
                                    <a href="/" style={{color: "green"}}>Đăng ký ngay</a>
                                    </span>
                                    </div>
                                    <br/>
                                    <div className="mt-3 support text-center">
                                        <p className="font-weight-bold mb-0">Bạn gặp khó khăn khi tạo tài khoản?</p>
                                        <p className="mb-0">
                                            Vui lòng gọi tới số
                                            <a href="/" style={{color: "green"}}>01234567889</a>
                                            (giờ hành chính).
                                        </p>
                                        <br/>
                                        <p className="auth-copy-right mt-5" style={{color: "green"}}>© 2016. All Rights
                                            Reserved. TopCV Vietnam JSC.</p>
                                    </div>
                                </div>

                            </form>

                        </div>
                        <div className="col-4">
                            <div style={{position: "relative", width: "100%", height: "100vh"}}>
                                <img className="img p-0"
                                     src="https://static.topcv.vn/v4/image/auth/auth_bg_desktop.png"
                                     alt=""
                                     style={{
                                         position: "absolute",//absolute
                                         top: 0,
                                         left: 0,
                                         width: "100%",
                                         height: "100%",
                                         objectFit: "inherit"
                                     }}/>

                                <div className="col-9 m-0 ml-4">
                                    <a href="/">
                                        <br/>
                                        <br/>
                                        <img width="160" src="https://static.topcv.vn/v4/image/auth/topcv_white.png"
                                             alt=""/>
                                    </a>

                                    <h1 className="mt-4" style={{color: "white"}}>
                                        Tiếp lợi thế<br/>Nối thành công
                                        <h6>
                                            <p style={{color: "white"}} className="mt-2">TopCV - Hệ sinh thái nhân sự
                                                tiên phong ứng dụng công nghệ tại Việt Nam</p>
                                        </h6>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}
