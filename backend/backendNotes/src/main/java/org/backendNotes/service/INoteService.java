package org.backendNotes.service;

import org.backendNotes.model.Note;
import org.backendNotes.response.RestResponse;
import org.springframework.http.ResponseEntity;

public interface INoteService {

    ResponseEntity<RestResponse> getNotes();
    ResponseEntity<RestResponse> getNote(Long id);
    ResponseEntity<RestResponse> postNote(Note note);
    ResponseEntity<RestResponse> putNote(Note note, Long id);
    ResponseEntity<RestResponse> deleteNote(Long id);

}
