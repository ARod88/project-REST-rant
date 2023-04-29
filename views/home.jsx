const React = require("react");
const Def = require("./default");

const Home = () => {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <img width="400px" src="/images/parfait.jpg" alt="parfait"/>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                    </a>

            </main>
        </Def>
    );
};

module.exports = Home;