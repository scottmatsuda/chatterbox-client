// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // RoomsView.render(data);
    // let messages = Messages._data;
    // return messages;
    // return messages;
    // for (let i = 0; i < messages.length; i++) {
    //   // Rooms._data.add(messsages[i].roomname);
    //   console.log('hello');
    // }

    // console.log('Rooms._data', Rooms._data);
    // return messages;
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    let rooms = data;
    // TODO: Render out the list of rooms.

    console.log('alert');
    console.log('rooms', rooms);
    let roomArray = Array.from(rooms);
    RoomsView.$select.html('');
    Rooms._data.forEach(function(room) {
      RoomsView.$select.append(
        $('<option></option>').val(room).text(room)
      );
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
