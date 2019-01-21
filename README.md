#This is a live video streaming app.

#user can stream their desktop videos live.

#OBS software is used for recording the videos.

#RTMP server is used for establishing a communication between app and OBS.

#Jsonplaceholder api is used for storing the streams created by different users.

#The app is enabled with Google Authentication service. and will show the personalised content(videos) when user is logged in.

#React and Redux are used for development of this single page application. When the app was first initialized (when user visits the app), a Get request is made to the api returning the list of streams. 

#upon signed in, user can start a new streaming and can edit,delete or modify an existing stream which belonged to him/her by sending delete/patch/post request to the api. user can still watch all the live streamings at a time without being logged in. 

#Redux is used for creating many actions and reducers,responsibe for handling user interaction with the web page like clicking a button, fetching data , submitting a form etc. 

#state of the app is maintained by the reducers. The application is functioning as expected but the app doesn't look impressive as far as the design and animations are concerned. The app is neither responsive nor have a decent look.
