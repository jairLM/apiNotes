import React from 'react'
import useFetch from '../fetch/useFetch'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {handleClickNavegate} from '../util/handleClickNavegate'
import { useNavigate } from "react-router-dom";

function EditNote() {

    const { getNoteById, editNote, setEditNote, updateNote} = useFetch('http://localhost:8080/api/notes');
    const { id } = useParams();  
    const navegate = useNavigate();
    const handleClickNav = (url) => handleClickNavegate(url, navegate);

    useEffect(() => {
        getNoteById(id);
    }, []);

    if (!editNote || (editNote.title === "" && editNote.content === "")) {
        return <div>Loading...</div>;
    } 


  return (
    <>
        <main className='container'>
            
            <section className='block'>
            <label htmlFor="title"><h3>Titulo</h3></label>
                <input type="text" id='title' placeholder="Title" value={editNote.title} onChange={(e) => setEditNote({ ...editNote, title: e.target.value })}  />
                <label htmlFor="content"><h3>Content</h3></label>
                <input type="text" id='content' placeholder="Content" value={editNote.content} onChange={(e) => setEditNote({ ...editNote, content: e.target.value })} />                
                
                <section className='btn-custom'>
                    <button onClick={()=> {updateNote(id), handleClickNav('/') }} className='btn btn-primary'>Save changes</button>
                </section>  
            </section>
            
        </main>
    </>
    

  )
}

export default EditNote