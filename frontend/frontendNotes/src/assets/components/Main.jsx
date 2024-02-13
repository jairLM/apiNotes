import React from 'react'
import useFetch from '../fetch/useFetch'
import { useNavigate } from "react-router-dom";
import {handleClickNavegate} from '../util/handleClickNavegate'

function Main() {
    const navigate = useNavigate();
    const handleClickNav = (url) => handleClickNavegate(url, navigate)
    const{addNote, newNote, setNewNote, data, deleteNote} = useFetch('http://localhost:8080/api/notes');

  return (
    <>
    <main className='container'>

        <section className='block'>
            
                <section className='subBlock'>
                <label htmlFor="title"><h3>Title</h3></label>
                <input type="text" id='title' placeholder="Write a title of a note" value={newNote.title} onChange={(e) => setNewNote({ ...newNote, title: e.target.value })} />
                </section>

                <section className='subBlock'>
                <label htmlFor="content"><h3>Content</h3></label>
                <input type="text" id='content' placeholder="Write the content of the note" value={newNote.content} onChange={(e) => setNewNote({ ...newNote, content: e.target.value })} />
                </section>

                <section className='subBlock'>
                <label htmlFor="category"><h3>Category</h3></label>
                <select name="options" id="category">
                    <option value=""></option>
                    <option value="important">important</option>
                    <option value="optional">optional</option>
                    <option value="essential">essential</option>
                </select>                  
                </section>
                <section className='btn-custom'>
                    <button className='btn btn-primary' onClick={addNote}>Add Note</button>
                </section>                   
        </section>   
    </main>

    <section className='container'>
      <section className='containerCards'>        
          
          {data && data.map((note) => (
            <div key={note.id} className="cardJ">
              <div >
                <p className='headerNote'>{note.id}
                  <button onClick={() => {handleClickNav(`/editNote/${note.id}`);} }  className='iconButtonEdit' ><i className="bi bi-pen-fill "></i></button>
                  <button type='submit' onClick={()=>deleteNote(note.id)} className='iconButtonDelete'><i className="bi bi-trash"></i></button>
                </p>
                <h5>Title:</h5>
                <h5>{note.title}</h5>
                <h6>Content:</h6>
                <p>{note.content}</p>
              </div>
              </div>
          ))}
        

      </section>
    </section>
    
    </>
  )
}

export default Main