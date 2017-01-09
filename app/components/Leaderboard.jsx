const React = require('react');
const $ = require('jQuery');

const CamperList = require('CamperList');

const Leaderboard = React.createClass({
    getInitialState: function () {
        var campers = [];
        return { campers: campers }
    },
    componentDidMount: function () {
        $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', (alltimeData) => {
            this.setState({campers: alltimeData});
        });
    },
    handleClickAlltime: function () {
        $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', (alltimeData) => {
            this.setState({campers: alltimeData});
        });
    },
    handleClickRecent: function () {        
        $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/recent', (recentData) => {
            this.setState({campers: recentData});
        });
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
