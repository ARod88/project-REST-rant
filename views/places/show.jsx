const React = require('react');
const Def = require('../default');

const show = (data) => {
    return (
        <Def>
            <main>  
                <h1>{data.place.name}</h1>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                </div>
                <h2>Rating</h2>
                <div className='col-sm-6'>
                   
                </div>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
            </main>
        </Def>
    );
};

module.exports = show;








// const React = require('react');
// const Def = require('../default');

// const show = (data) => {
//     return (
//         <Def>
//             <main>
  
            
//                 <h1> { data.place.name }</h1>
//                 <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
//                 <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
//                     <button type="submit" className="btn btn-danger">Delete</button>
//                 </form>
//                 <div className='row'>
//                     <div className='col-sm-6'>
//                         <img src={data.place.pic} alt={data.place.schema} />
//                         <h3>Located in {data.place.city}, {data.place.state}</h3>
//                     </div>
//                 </div>
//                 <h2> Rating </h2>
//                 <div className='col-sm-6'>
//                     <h2> Description </h2>
//                 </div>
//                 <h3> {data.place.showEstablished()} </h3>
//                 <h4>Serving {data.place.cuisinies} </h4>
//                 </main>
            
//         </Def>

        
//     );
// };

// module.exports = show;





// const React = require('react');
// const Def = require('../default');

// const show = (data) => {
//     return (
//         <Def>
//             <main>
//                 <h1> { data.place.name }</h1>
//                 <a href="`/paces/${data.id}/edit`" className="btn btn-warning">Edit</a>
//                 <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
//                     <button type="submit" className="btn btn-danger">Delete</button>
//                 </form>

//                 <h2> Rating </h2>
//                 <h2> Desription </h2>
//             </main>
            
//         </Def>
//     );
// };

// module.exports = show;