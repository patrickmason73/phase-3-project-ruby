# Phase-3-Project-Ruby

This app I created hosts a database of Greek philosophers which includes some quotes said but them as well as where they are from and their era of existence. There is a comment section as well if anyone wants to comment on any of the quotes they may do so, and they may edit/delete their own comments. 

# App uses

Turn on the database within the server directory using "bundle exec rake server" and start the app by running 

Use the dropdown box to select a philospher, the page will respond with an image of the philospher, along with where they are from and some quotes said by them. 

Clicking the 'Generate Comments' button with show the comments for a specific quote. Within the comments you may add/edit/delete your own comments, but not those that belong to a different user.

![Alt Text](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/philosopherAppGif.gif?raw=true)

# Code

This app works by using Ruby (Active Record + Sinatra + Rake) for the backend database, and React for the frontend. The frontend makes fetch requests to backend server at localhost:9292.




# Credits

[Wikipedia](https://www.wikipedia.org/) - Used to gather information on each philosopher, including images, quotes, and life story.
[Brainy Quote](https://www.brainyquote.com/) - Used to obtain more quotes from each philosopher.
