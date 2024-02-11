import React from 'react'
import useFetch from '../fetch/useFetch'
import { useNavigate } from "react-router-dom";
import {handleClickNavegate} from '../util/handleClickNavegate'

function Main() {
    const navigate = useNavigate();
    const handleClickNav = (url) => handleClickNavegate(url, navigate)
    const{addNote, newNote, setNewNote, data} = useFetch('http://localhost:8080/api/notes');

  return (
    <>
    <main className='container'>

        <section className='block'>
            
                <label htmlFor="title"><h3>Titulo</h3></label>
                <input type="text" id='title' placeholder="Title" value={newNote.title} onChange={(e) => setNewNote({ ...newNote, title: e.target.value })} />
                <label htmlFor="content"><h3>Content</h3></label>
                <input type="text" id='content' placeholder="Content" value={newNote.content} onChange={(e) => setNewNote({ ...newNote, content: e.target.value })} />
                <label htmlFor="category"><h3>Category</h3></label>
                <select name="options" id="category">
                    <option value=""></option>
                    <option value="important">important</option>
                    <option value="optional">optional</option>
                    <option value="essential">essential</option>
                </select>
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
                <h5>{note.title}</h5>
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