// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.


var Messages = {

  // TODO: Define how you want to store your messages.

  _data: {
  },

  addMessage: function(data) {
    for (var i = 0; i < data.length; i++) {
      Messages._data[data[i].message_id] = data[i];
    }
    var mess = JSON.parse(JSON.stringify(Messages._data));
    console.log({mess});
    console.log(Object.assign({}, Messages._data));
    MessagesView.render(mess);
  },

  returnCopy: function() {

    return Object.create(Messages._data);
  },

  getMessages: function() {

  }


  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};


