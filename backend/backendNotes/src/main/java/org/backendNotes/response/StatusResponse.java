package org.backendNotes.response;

import org.springframework.http.HttpStatus;

public class StatusResponse {

    private HttpStatus status;

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }
    public int getCode(){
        return this.status.value();
    }
}
