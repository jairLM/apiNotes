package org.backendNotes.service;

import org.backendNotes.dao.INotesDao;
import org.backendNotes.model.Note;
import org.backendNotes.response.RestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImpl implements INoteService {

    @Autowired
    private INotesDao iNotesDao;



    @Override
    public ResponseEntity<RestResponse> getNotes() {
        RestResponse response = new RestResponse();
        List<Note> dataList;
        HttpStatus status;
        try{
            dataList = (List<Note>) iNotesDao.findAll();
            if(dataList.isEmpty()){

                response.setData(dataList);
                status = HttpStatus.NOT_FOUND;
                response.setStatus(status);
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }
            response.setData(dataList);
            status = HttpStatus.OK;
            response.setStatus(status);

        }catch (Exception e){
            System.out.println("Error " + e.getMessage());
        }



        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<RestResponse> getNote(Long id) {
        RestResponse response = new RestResponse();
        List<Note> dataList = new ArrayList<>();
        HttpStatus status;
        try{
            Optional<Note> noteFound = iNotesDao.findById(id);
            if(noteFound.isPresent()){
                dataList.add(noteFound.get());
                response.setData(dataList);
                status = HttpStatus.OK;
                response.setStatus(status);
            }else{
                response.setData(dataList);
                status = HttpStatus.NOT_FOUND;
                response.setStatus(status);
            }
        }catch(Exception e){
            System.out.println("Error " + e.getMessage());
        }

        return new ResponseEntity<>(response, response.getStatus());
    }

    @Override
    public ResponseEntity<RestResponse> postNote(Note note) {
        RestResponse response = new RestResponse();
        List<Note> dataList = new ArrayList<>();
        HttpStatus status;
        try{
            Note  noteCreated = iNotesDao.save(note);
            dataList.add(noteCreated);
            response.setData(dataList);
            status = HttpStatus.OK;
            response.setStatus(status);


        }catch(Exception e){
            System.out.println("Error " + e.getMessage());
        }


        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @Override
    public ResponseEntity<RestResponse> putNote(Note note, Long id) {

        RestResponse response = new RestResponse();
        List<Note> dataList = new ArrayList<>();
        HttpStatus status;
        try{
            Optional<Note> noteFound = iNotesDao.findById(id);
            if(noteFound.isPresent()){
                noteFound.get().setId(note.getId());
                noteFound.get().setTitle(note.getTitle());
                noteFound.get().setContent(note.getContent());
                iNotesDao.save(noteFound.get());
                dataList.add(noteFound.get());
                response.setData(dataList);
                status = HttpStatus.OK;
                response.setStatus(status);
            }else {
                response.setData(dataList);
                status = HttpStatus.NOT_FOUND;
                response.setStatus(status);
            }
        }catch (Exception e){
            response.setData(dataList);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            response.setStatus(status);
            System.out.println("**********Error " + e.getMessage());
        }


        return new ResponseEntity<>(response, response.getStatus());
    }

    @Override
    public ResponseEntity<RestResponse> deleteNote(Long id) {

        RestResponse response = new RestResponse();
        List<Note> dataList = new ArrayList<>();
        HttpStatus status;
        try{
            Optional<Note> noteFound = iNotesDao.findById(id);
            if(noteFound.isPresent()){
                iNotesDao.delete(noteFound.get());
                dataList.add(noteFound.get());
                response.setData(dataList);
                status= HttpStatus.OK;
                response.setStatus(status);

            }else{
                response.setData(dataList);
                status = HttpStatus.NOT_FOUND;
                response.setStatus(status);

            }

        }catch (Exception e){
            System.out.println("Error " + e.getMessage());
        }


        return new ResponseEntity<>(response, response.getStatus());
    }
}
