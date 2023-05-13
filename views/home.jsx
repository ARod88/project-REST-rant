const React = require("react");
const Def = require("./default");

const Home = () => {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <img width="400px" src="/images/outdoor2.jpg" alt="restaurant"/>
                <div className="text-center">
                    <a href="/places">
                    <button className="btn-primary">Places Page</button>
                    </a>
                    </div>

            </main>
        </Def>
    );
};

module.exports = Home;