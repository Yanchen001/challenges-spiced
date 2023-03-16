
export function EntrySection({className="EntrySection"}){
    return (
    <>
    <Tab text = "All Entries" count = "5"></Tab>
    <Tab text = "Favorites" count = "4"></Tab>
    <Entry date = "Feb 27,2028" title = "That's life in the city" text = "si sine causa?"></Entry>
    <Entry date = "Feb 26,2028" title = "That's life in the city" text = "si sine causa?"></Entry>
    </>
    )
}


 function Tab ({text, count}){
    return (
        <>
        <p>{text}</p>
        <p>{count}</p>
        </>  
    )
}


 function Entry ({date,title, text}){
    return (
        <section>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        </section>
    )

}
