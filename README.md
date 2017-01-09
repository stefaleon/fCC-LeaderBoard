# fCC Leaderboard

### User Stories
* I can see a table of the Free Code Camp campers who've earned the most brownie points in the past 30 days.
* I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.
* I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.

* Hint: To get the top 100 campers for the last 30 days: https://fcctop100.herokuapp.com/api/fccusers/top/recent.
* Hint: To get the top 100 campers of all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.


### React Components
* *Leaderboard*: handles state, passes the campers' data as props to the *CamperList* component, as well as the *onClickRecent* and *onClickAlltime* handlers.
* *CamperList*: presents the camper list header which includes the *Alltime* and *Recent* presentation buttons. Passes each camper's data as props to the *Camper* component via the mapping *renderCampers* function.
* *Camper*: presents each camper's rank, avatar, username and points.



#### Basic React Boilerplate
* webpack -w -> makes bundle.js and monitors for changes
* node server -> starts server, locally on 3000

#### Dependencies
* Express
* React
* ReactDOM
* jQuery

#### devDependencies

* webpack
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0

#### front-end
* Bootstrap
