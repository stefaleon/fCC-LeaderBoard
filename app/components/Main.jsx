const React = require('react');

const Leaderboard = require('Leaderboard');

const Main = (props) => {
    return (
        <div>
            <div className="leaderboard">                
                <Leaderboard />
            </div>
            <footer>
                <hr />
                <p> a <a href="https://www.freecodecamp.com/" target="_blank">freeCodeCamp</a> React Project</p>
                <p> L.S. 2017 </p>
            </footer>
        </div>
    );
};

module.exports = Main;
