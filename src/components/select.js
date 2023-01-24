import "./select.css"
import nation_list from './data/data.json';

const select_nation=([currunt_nation, set_current_nation])=>{
    return(
        <div className="select_nation">
            {nation_list.map((nation)=>(
                select_nation_element(nation, set_current_nation)
            ))}
        </div>
    )
}

const select_nation_element=(props, setter)=>{
    const{id, name} = props
    const onclick = ()=>{
        console.log(id);
        console.log(name);
        setter(id);
    }
    return(
        <div key={id} className ="select_nation_element" onClick={onclick}>
            <label>{name}</label>
        </div>
    )
}

const city_list={
    "1": [
        "123", "sdfsfs", "sdfaf"
    ],
    "2": [
        "ㅇㄴㄹㄴㄹ", "sdfsfs", "ㅇㅇㄷㅇ"
    ],
    "3": [
        "파리", "sdfsfs", "33ㄴㄹㄴㅇ", "sdfaf"
    ],
    "4": [
        "로마", "sdfsfs", "ㅇㄷ", "sdfaf"
    ],
    "5": [
        "LA", "seded", "ㄴ", "ㅊ"
    ],
    "6": [
        "한국", "22ssaa", "ㅇ", "sdfaf"
    ],
}

const select_city=(currunt_nation)=>{
    return(
        <div className="select_city">
            {city_list[currunt_nation].map((city)=>(
                <div key={city} className="select_city_element">
                    <label>{city}</label>
                </div>
            ))}
        </div>
    )
}

//도시별 테그리스트
const select_tag=(currunt_nation)=>{
    return(
        <div className="select_city">
            {city_list[currunt_nation].map((city)=>(
                <div key={city} className="select_city_element">
                    <label>{city}</label>
                </div>
            ))}
        </div>
    )
}

export {select_nation, select_city, select_tag}