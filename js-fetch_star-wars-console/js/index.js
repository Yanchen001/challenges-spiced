console.clear();
try {
    const url = "https://swapi.dev/api/people";

    async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        //return data
        
        console.log(data)
        const r2d2 = data.results.filter((result)=>{
            return result.name==="R2-D2"})
        console.log(r2d2[0].name)

    }

fetchData();

}

catch(error){
    console.error(error);
}
