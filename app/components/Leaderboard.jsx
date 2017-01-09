const React = require('react');

const CamperList = require('CamperList');

const Leaderboard = React.createClass({
    getInitialState: function () {
        return {
            campers: [
                {
                    "username": "sjames1958gm",
                    "img": "https://avatars.githubusercontent.com/u/4639625?v=3",
                    "alltime": 4849,
                    "recent": 464,
                    "lastUpdate": "2017-01-05T19:53:10.778Z"
                },
                {
                    "username": "Manish-Giri",
                    "img": "https://avatars.githubusercontent.com/u/11348778?v=3",
                    "alltime": 3294,
                    "recent": 782,
                    "lastUpdate": "2017-01-08T05:45:05.850Z"
                },
                {
                    "username": "Takumar",
                    "img": "https://avatars.githubusercontent.com/u/2951935?v=3",
                    "alltime": 3138,
                    "recent": 33,
                    "lastUpdate": "2017-01-07T11:36:09.159Z"
                },
                {
                    "username": "abhisekp",
                    "img": "https://avatars.githubusercontent.com/u/1029200?v=3",
                    "alltime": 3039,
                    "recent": 64,
                    "lastUpdate": "2017-01-07T11:39:10.108Z"
                }
            ]

        };
    },
    handleClickAlltime: function () {
        console.log('handleClickAlltime active!');
    },
    handleClickRecent: function () {
        console.log('handleClickRecent active!');
    },
    render: function () {
        var {campers} = this.state;
        return (
            <div>
                <h1>fCC Leaderboard</h1>
                <CamperList campers={campers}
                    onClickAlltime={this.handleClickAlltime}
                    onClickRecent={this.handleClickRecent}
                    />
            </div>
        );
    }
});

module.exports = Leaderboard;
