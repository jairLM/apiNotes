package org.backendNotes.response;

import org.backendNotes.model.Note;

import java.util.List;

public class RestResponse extends StatusResponse{

    private List<Note> data;

    public void setData(List<Note> data) {
        this.data = data;
    }

    public List<Note> getData() {
        return data;
    }

    @Override
    public String toString() {
        return "RestResponse{" +
                "data=" + data +
                '}';
    }
}
