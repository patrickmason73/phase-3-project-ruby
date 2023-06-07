# Phase-3-Project-Ruby

This app I created hosts a database of Greek philosophers which includes some quotes said by them as well as where they are from and their era of existence. There is a comment section as well if anyone wants to comment on any of the quotes they may do so, and they may edit/delete their own comments. 

# App uses

Turn on the database within the server directory entering "bundle exec rake server" into your terminal and start the app by running npm start within the client directory terminal. 

Use the dropdown box to select a philospher, the page will respond with an image of the philospher, along with where they are from and some quotes said by them. Also, above all of that there is a spot to post any fun facts you may know about a given philosopher!

Clicking the 'Generate Comments' button with show the comments for a specific quote. Within the comments you may add/edit/delete your own comments, but not those that belong to a different user.

![Alt Text](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/philosopherAppGifNeww.gif)

# Code

This app works by using Ruby (Active Record + Sinatra + Rake) for the backend database, and React for the frontend. The frontend makes fetch requests to backend server at localhost:9292.

Backend:


![Backend_Routes](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/backend%20replacement.PNG)

Frontend Get Request:

![app](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/useEffect%20replacement.PNG)

Fun Facts Post/Delete:

![factP](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/fun%20fact%20create%20and%20delete.PNG)

Comments Post/Patch/Delete:

![post](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/comment%20post.PNG)       ![patch](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/comment%20patch.PNG)     ![delete](https://github.com/patrickmason73/phase-3-project-ruby/blob/main/comment%20delete.PNG)


# Credits

[Wikipedia](https://www.wikipedia.org/) - Used to gather information on each philosopher, including images, quotes, and life story.


[Brainy Quote](https://www.brainyquote.com/) - Used to obtain more quotes from each philosopher.
