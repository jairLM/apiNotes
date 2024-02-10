import React from 'react'
import useFetch from '../fetch/useFetch'

function EditNote() {
    const {addNote, newNote, setNewNote} = useFetch('http://localhost:8080/api/notes');
  return (
    <>
        <main className='container'>

            <section className='block'>
            <label htmlFor="title"><h3>Titulo</h3></label>
                <input type="text" id='title' placeholder="Title" value={newNote.title} onChange={(e) => setNewNote({ ...newNote, title: e.target.value })} />
                <label htmlFor="content"><h3>Content</h3></label>
                <input type="text" id='content' placeholder="Content" value={newNote.content} onChange={(e) => setNewNote({ ...newNote, content: e.target.value })} />                
                
                <section className='btn-custom'>
                    <button className='btn btn-primary' onClick={addNote}>Save changes</button>
                </section>  
            </section>
            
        </main>
    </>
    

  )
}

export default EditNote