export function InputBox ({text,type,rows,cols}){
    return (
    <>
    <label>{text}</label>
    <textarea rows={10} cols={40}></textarea>
    </>)
}

export function SubmitButton({text}) {
   return <button>{text}</button> 
}