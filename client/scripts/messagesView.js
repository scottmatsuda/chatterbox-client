var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function(messages) {
    console.log('Messages from ', messages);
    // let messages = data;
    for (var key in messages) {
      var currentObject = messages[key];
      this.renderMessage(currentObject);
    }
  },

  renderMessage: function(message) {

    let mess = MessageView.render({
      username: message.username,
      text: message.text
    });

    $(mess).appendTo(MessagesView.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};