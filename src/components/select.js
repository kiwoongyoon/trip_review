import "./select.css"

const nation_list=[
    {
        id: "1",
        name: "america",
        url: "..img/america.png"
    },
    {
        id: "2",
        name: "china",
        url: "..img/america.png"
    },
    {
        id: "3",
        name: "japan",
        url: "..img/america.png"
    },
    {
        id: "4",
        name: "germany",
        url: "..img/america.png"
    },
    {
        id: "5",
        name: "singapore",
        url: "..img/america.png"
    },
    {
        id: "6",
        name: "france",
        url: "..img/america.png"
    }
]

const select_nation=()=>{
    return(
        <div className="select_nation">
            {nation_list.map((nation)=>(
                select_nation_element(nation)
            ))}
        </div>
    )
}

const select_nation_element=(props)=>{
    const{id, nation_name, ...inputProp} = props
    const onclick = (e)=>{
        console.log(id);
        e.preventDefault() ;
    }
    return(
        <div key={id} className ="select_nation_element" onClick={onclick}>
            <label>{nation_name}</label>
        </div>
    )
}

export default select_nation 