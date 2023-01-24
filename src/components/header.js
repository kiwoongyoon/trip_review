import './header.css'

const header=()=>{
    return(
        <header>
            <a className="logo_name" href='/'>여행후기</a>
            <div className="logo_menubox">
                <img className="logo_menubox_item" src="img/signup.png" alt="profile" />
                <img className="logo_menubox_item" src="img/login.png" alt="profile" href="#"/>
            </div>
        </header>
    )
}
export default header 