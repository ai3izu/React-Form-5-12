import { useState } from "react"

export const Form = (props) => {
    const [task, setTask] = useState("")
    const [person, setPerson] = useState("")
    const handleSubmit = (el) =>{
        el.preventDefault()
        const addedItem = {
            task: task,
            person: person
        }
        props.send(addedItem)
    }
    return( 
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='zadanie..' value={task} onChange={(e) =>{setTask(e.target.value)}}></input>
                <input type='text' placeholder='osoba..' value={person} onChange={(e)=>{setPerson(e.target.value)}}></input>
                <input type='submit' value='Dodaj'></input>
            </form>
        </>
    )
}