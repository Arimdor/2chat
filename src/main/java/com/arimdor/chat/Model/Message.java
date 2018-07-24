package com.arimdor.chat.Model;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class Message {

    private String user;
    private String content;
    private String sendTime;

    public Message() {
    }

    public Message(String user, String content) {
        this.user = user;
        this.content = content;
        Calendar calendar = Calendar.getInstance();
        this.setSendTime(new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(calendar.getTime()));
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

    public String getSendTime() {
        return sendTime;
    }

    public void setSendTime(String sendTime) {
        this.sendTime = sendTime;
    }
}
