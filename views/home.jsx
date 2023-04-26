const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/pictures/chad-montano-eeqbbemH9-c-unsplash.jpg" alt="Chad picture"/>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home