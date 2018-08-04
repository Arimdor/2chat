package com.arimdor.chat.model;

public class MorseMessage {

    private String user;
    private String content;

    public MorseMessage(String user, String content) {
        this.user = user;
        this.content = content;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "{User: } " + user + "; Content: " + content + " }";
    }
}
