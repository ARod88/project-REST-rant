const React = require('react');
const Def = require('../default');

const show = (data) => {
    let comments = ( 
        <h3 className='inactive'>
            No comments yet!
        </h3>
        )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
                
            );
        });
    };
    return (
        <Def>
            <main>  
                <h1>{data.place.name}</h1>
            <div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                    Edit</a>
            </div>
            <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                </div>
                <h2>Rating</h2>
                <div className='col-sm-6'></div>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
                <h2>Comments</h2>
                {comments}
                <form method="POST" action={`/places/${data.place.id}/comment`}>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author"></input>
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content"></textarea>
                </div>
                <div>
                    <label htmlFor="stars">Star Rating:</label>
                    <input type="number" id="stars" name="stars" step="0.5"></input>
                </div>
                <div>
                    <label htmlFor="rant">Rant:</label>
                    <input type="checkbox" id="rant" name="rant"></input>
                </div>
                <button type="submit">Submit</button>
                </form>
                   <div>
               <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete</button>
                </form>
            </div>
             </main>
        </Def>
    );
};

module.exports = show;







