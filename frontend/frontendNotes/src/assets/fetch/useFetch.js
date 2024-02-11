
import { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [newNote, setNewNote] = useState({ title:"", content:"" })
    const [editNote, setEditNote] = useState({ title:"", content:"" });
    //useeffect para hace la peticion a la api de todos los elementos y actualizar la peticion cuando data cambie
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const responseData = await response.json();
          setData(responseData.data); 
        } catch (error) {
          console.error('Error fetching data ' + error);
        }
      };
  
        
          fetchData();
        
    }, [data]);//se actualiza cuando la data cambia    

    const getNoteById = async(noteId) =>{
      try {
          const response = await fetch(`${url}/${noteId}`);
          const responseData = await response.json();
          console.log("*****hola");
          setEditNote(responseData.data);
          console.log(responseData.data);
      } catch (error) {
        console.error('Error fetching dataById ' + error);
      }
    }


    const addNote = async() =>{

      try {
          
        const response = await fetch(url, {

          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(newNote)

        })
        console.log(response);
      } catch (error) {
        console.error('Error adding note:', error);
      }     


    }   
      
      const deleteNote = async(noteId)=>{

        try {

            const response = await fetch(`${url}/${noteId}`,{

              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              }

            })
          
        } catch (error) {
          console.error('Error deleting note:', error);
        }


      }
  
    return { data, addNote, newNote, setNewNote, deleteNote, getNoteById, editNote, setEditNote };
  }
  
  export default useFetch;