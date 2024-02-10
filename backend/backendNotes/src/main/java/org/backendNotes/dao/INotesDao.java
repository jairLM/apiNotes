package org.backendNotes.dao;

import org.backendNotes.model.Note;
import org.springframework.data.repository.CrudRepository;

public interface INotesDao extends CrudRepository<Note, Long> {
}
