var React = require('react');

var Camper = React.createClass({
    render: function () {
        var {count, username, img, alltime, recent, lastUpdate} = this.props;
        return (
            <div className="camper container-fluid">
                <div className="count col-sm-1 text-center"> {count} </div>
                <div className="img col-sm-1 text-center">
                    <img width="30px" height="30px" src={img} />
                </div>
                <div className="username col-sm-4 text-center">

                    <a href={"https://www.freecodecamp.com/" + username}
                        target="_blank"> {username} </a>
                </div>
                <div className="alltime-points col-sm-3 text-center"> {alltime} </div>
                <div className="recent-points col-sm-3 text-center"> {recent} </div>
            </div>
        );
    }
});

module.exports = Camper;
