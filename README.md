# Assignment4 Concentrator

## Project Description
<!-- you can include known bugs, design decisions, external references used... -->
This project creates a web application for chatting with friends! The user can either join an existing chatroom from the list of rooms on the homepage or can create a new room to chat in. Each room will have their own unique set of messages that are sorted such that the most recent messages are at the bottom. Upon entering a chatroom, the user is prompted to enter a nickname that they would like to use when chatting. This nickname will be attached to each message they create within the chatroom.Each message also has a date and time attached to it so that users know when a chat was posted.

### Filtering Messages
Our database contains a collection of all messages on the web application. When in a chatroom, our web application only grabs the messages for that room by looking at the name field in each message data object. 

### Posting Messages
To post a message to a chatroom, we use a POST request using an HTML forms in our room.hbs file. This form contains the text input which contains the body of the message in addition to hidden elements that contain the nickname and room name information. When the user hits the send button, all of this information is contained within the post request body and is formatted using the message Schema created under the models folder. We also add a Date and Time function to the POST request. The page will continuously refresh every second, displaying every message in the database associated with that room so that when the new message is entered into the databse via the POST request, it will appear within one second of the user hitting "send".

### Creating Rooms
Creating rooms is done in nearly the exact same way as posting messages, except that we have a different Schema and we post a link to the rooms page instead of just plain body text.
