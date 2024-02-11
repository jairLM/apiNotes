package org.backendNotes.controllers;


import org.backendNotes.model.Note;
import org.backendNotes.response.RestResponse;
import org.backendNotes.service.NoteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api")
public class NoteRestController {

    @Autowired
    private NoteServiceImpl noteService;

    @GetMapping("/notes")
    public ResponseEntity<RestResponse> getAllNotes(){
        return noteService.getNotes();
    }

    @GetMapping("/notes/{id}")
    public ResponseEntity<RestResponse> getNoteById(@PathVariable Long id){
        return noteService.getNote(id);
    }
    
    @PostMapping("/notes")
    public ResponseEntity<RestResponse> createNote(@RequestBody Note note){
        return noteService.postNote(note);
    }

    @PutMapping("/notes/{id}")
    public ResponseEntity<RestResponse> updateNote(@RequestBody Note note, @PathVariable Long id){
        return noteService.putNote(note, id);
    }

    @DeleteMapping("/notes/{id}")
    public ResponseEntity<RestResponse> deleteNote(@PathVariable Long id){
        return noteService.deleteNote(id);
    }

}
