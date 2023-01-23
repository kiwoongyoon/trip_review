import './header.css'

const header=()=>{
    return(
        <header>
            <a className="logo_name" href='/'>여행후기</a>
            <div className="logo_menubox">
            <img className="logo_menubox_item logo_menubox_login" src="" alt="profile" href="#"/>
            <img className="logo_menubox_item logo_menubox_signup" src="comp_res/signup.png" alt="profile" />
            </div>
        </header>
    )
}
export default header 