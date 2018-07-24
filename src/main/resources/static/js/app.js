var stompClient = null;


function connect() {
    var socket = new SockJS('/chat-socket');
    stompClient = Stomp.over(socket);
    stompClient.debug = null;
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/chat', function (payload) {
            console.log(payload);
            showGreeting(JSON.parse(payload.body).content, JSON.parse(payload.body).sendTime);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
}

function sendMessage(message) {
    var payload = JSON.stringify({'user': 'Anonimo', 'content': message});
    stompClient.send("/app/message", {}, payload);
    $('#message-box').val('');
}

function showGreeting(message, sendTime) {
    var messageList = $("#message-list");
    messageList.append(
        '<div class="row" style="height: fit-content"><div class="col-sm-12 shadow-md bg-white" style="background-color: white; height: fit-content; margin-bottom: 8px; border-radius: 8px; word-break:break-all; ">' +
        '   \n<p style="margin: 8px 5px 10px;line-height: normal; height: fit-content"><small style="font-size: 11px">' + sendTime + '</small>: ' + message + '</p>\n' +
        '   \n</div>' +
        '</div>'
    );
    messageList.scrollTop(messageList[0].scrollHeight);
}

$(document).ready(function () {
    connect();
});

$(document).on("keypress", "#message-box", function (e) {

    if (e.which == 13) {
        var inputVal = $(this).val();
        if (inputVal != '') {
            sendMessage(inputVal);
        }
    }
});

