import "./EntryForm.css"

export function EntryForm (){

    return (
        <>
        <p>NEW ENTRY</p>
        <form className="Form">
            <label htmlFor="Motto">Motto</label>
            <textarea id="Motto" name="Motto" rows={3} cols={40}></textarea>
            <label htmlFor="Notes">Notes</label>
            <textarea id="Notes" name="Notes" rows={10} cols={40}></textarea>
        </form>
        <button type="submit">Create</button>
        </>

        
    )
    

}

