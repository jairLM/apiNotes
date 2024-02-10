
import { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [newNote, setNewNote] = useState({ title:"", content:"" })
  
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
    }, [data]); 
   

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
  
    return { data, addNote, newNote, setNewNote, deleteNote };
  }
  
  export default useFetch;