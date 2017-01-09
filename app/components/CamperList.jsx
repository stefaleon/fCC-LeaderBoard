const React = require('react');

const Camper = require('Camper');

const CamperList = React.createClass({
    render: function () {
        var {campers, onClickAlltime, onClickRecent} = this.props;
        var renderCampers = () => {
            var count = 0;
            return campers.map((camper) => {
                count += 1;
                return (
                    <Camper key={camper.username} {...camper} count={count}/>
                );
            });
        };
        return (
            <div>
                <div className="camperlist-head container-fluid">
                    <div className="count col-sm-2 text-center">  </div>
                    <div className="username col-sm-4 text-center"> Username </div>
                    <div className="alltime-points col-sm-3 text-center">
                        <button onClick={onClickAlltime}> Alltime </button>
                    </div>
                    <div className="recent-points col-sm-3 text-center">
                        <button onClick={onClickRecent}> Recent </button>
                    </div>
                </div>

                <div className="camperlist-campers container-fluid">
                     {renderCampers()}
                </div>
            </div>
        );
    }
});

module.exports = CamperList;
