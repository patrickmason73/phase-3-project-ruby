# Phase-3-Project-Ruby

This app I created hosts a database of Greek philosophers which includes some quotes said by them as well as where they are from and their era of existence. There is a comment section as well if anyone wants to comment on any of the quotes they may do so, and they may edit/delete their own comments. 

# App uses

Turn on the database within the server directory entering "bundle exec rake server" into your terminal and start the app by running npm start within the client directory terminal. 

Use the dropdown box to select a philospher, the page will respond with an image of the philospher, along with where they are from and some quotes said by them. 

Clicking the 'Generate Comments' button with show the comments for a specific quote. Within the comments you may add/edit/delete your own comments, but not those that belong to a different user.

![Alt Text](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/philosopherAppGif.gif?raw=true)

# Code

This app works by using Ruby (Active Record + Sinatra + Rake) for the backend database, and React for the frontend. The frontend makes fetch requests to backend server at localhost:9292.

Backend:


![Backend_Routes](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/phase%203%20routes%20cap.PNG)

Frontend:

![app](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/phase%203%20frontend%20cap%20useEffect.PNG)

Post/Patch:

![post](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/phase%203%20post%20cap.PNG)    ![patch](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/phase%203%20patch%20cap.PNG)


# Credits

[Wikipedia](https://www.wikipedia.org/) - Used to gather information on each philosopher, including images, quotes, and life story.


[Brainy Quote](https://www.brainyquote.com/) - Used to obtain more quotes from each philosopher.
