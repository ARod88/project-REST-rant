const React = require('react');
const Def = require('../default');

const edit_form = (data) => {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form action={`/places/${data.place.id}?_method=PUT`} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required defaultValue={data.place.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Place Picture</label>
                        <input className="form-control" id="image" name="image" required defaultChecked={data.place.pic}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" required defaultValue={data.place.city}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" required defaultValue={data.place.state}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required defaultValue={data.place.cuisines} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control" id="founded" name="founded" defaultValue={data.place.founded}/>
                    </div>
                    
                    <input className="btn btn-primary" type="submit" defaultValue="Update Place" />
                </form>
                </main>
        </Def>
    );
};

module.exports = edit_form;






// const React = require('react');
// const Def = require('../default');

// const edit_form = (data) => {
//     return (
//         <Def>
//             <main>
//                 <h1>Edit Place</h1>
//     <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
//   <div className="form-group">
//     <label htmlFor="name">Place Name</label>
//     <input className="form-control" id="name" name="name" value={data.place.name}required />
//   </div>
//   <div className="form-group">
//     <label htmlFor="pic">Place Picture</label>
//     <input className="form-control" id="pic" name="pic" value={data.place.name}required />
//   </div>
//   <div className="form-group">
//     <label htmlFor="city">City</label>
//     <input className="form-control" id="city" name="city" value={data.place.name}required />
//   </div>
//   <div className="form-group">
//     <label htmlFor="state">State</label>
//     <input className="form-control" id="state" name="state" value={data.place.name}required />
//   </div>
//   <div className="form-group">
//     <label htmlFor="cuisines">Cuisines</label>
//     <input className="form-control" id="cuisines" name="cuisines" value={data.place.name}required />
//   </div>
//   <input className="btn btn-primary" type="submit" value="Add Place" />
// </form>
//             </main>
//         </Def>
//     );
// };

// module.exports = edit_form;