import './header.css'

const header=()=>{
    return(
        <header>
            <a className="logo_name" href='/'>여행후기</a>
            <div className="logo_menubox">
            <a href="#">
                <img className="logo_menubox_item"/>
            </a>
            <a href="#">
                <img className="logo_menubox_item"/>
            </a>
            </div>
        </header>
    )
}
export default header 