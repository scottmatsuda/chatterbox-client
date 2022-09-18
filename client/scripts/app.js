// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval(App.fetch, 5000);

    // setInterval(App.fetch(App.stopSpinner), 5000);
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  post: function(callback = ()=>{}) {
    Parse.create((data) => {
      // examine the response from the server request:
      // console.log(data);
      console.log('success');

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.addMessage(data);
      Rooms.addRooms(data);
      // Messages._data = data;


      // // console.log('messages', Messages._data);
      callback();
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
