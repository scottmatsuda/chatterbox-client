// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  // _data: null,
  // _data: {
  //   roomname: index,
  // },
  _data: new Set(),

  addRooms: function(data) {
    for (var i = 0; i < data.length; i++) {
      Rooms._data.add(data[i].roomname);
    }
    RoomsView.render(Rooms._data);
  }
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};