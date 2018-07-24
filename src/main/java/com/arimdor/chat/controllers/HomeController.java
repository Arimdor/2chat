package com.arimdor.chat.controllers;

<<<<<<< HEAD
import com.arimdor.chat.model.Message;
=======
import Model.Message;
>>>>>>> 636d5af5f8bba205496194c9b7da30cf37650941
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    private static final Log LOG = LogFactory.getLog(HomeController.class);

    @GetMapping("/")
    public String home() {
        LOG.info("Client HOME");
        return "home";
    }

    @MessageMapping("/message")
    @SendTo("/topic/chat")
    public Message sendMessage(Message message) {
        LOG.info(message.toString());
        return new Message(message.getUser(), message.getContent());
    }
}
