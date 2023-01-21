import './header.css'

const header=()=>{
    return(
        <header>
            <a className="logo_name" href='/'>여행후기</a>
            <div className="logo_menubox">
            <img className="logo_menubox_item" href="#">
            </img>
            <a href="#">
                <img className="logo_menubox_item"/>
            </a>
            </div>
        </header>
    )
}
export default header 