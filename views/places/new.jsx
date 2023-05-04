const React = require('react')
const Def = require('../default')



const new_form =() => {
    return(
        <Def>
            <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
  <div className="form-group">
    <label htmlFor="name">Place Name</label>
    <input className="form-control" id="name" name="name" required />
  </div>
  <div className="form-group">
    <label htmlFor="pic">Place Picture</label>
    <input className="form-control" id="pic" name="pic" />
  </div>
  <div className="form-group">
    <label htmlFor="city">City</label>
    <input className="form-control" id="city" name="city" />
  </div>
  <div className="form-group">
    <label htmlFor="state">State</label>
    <input className="form-control" id="state" name="state" />
  </div>
  <div className="form-group">
    <label htmlFor="cuisines">Cuisines</label>
    <input className="form-control" id="cuisines" name="cuisines" required />
  </div>
  <div className="form-group">
    <label for="founded">Founded</label>
    <input className="form-control" id="founded" name="founded"/>
  </div>
  <input className="btn btn-primary" type="submit" value="Add Place" />
</form>

            </main>
            
        </Def>
    );

};

module.exports = new_form;



// const React = require("react");
// const Default = require(./default');


// const new_form =() => {
//     return(
//         <Def>
//             <main>
//             <h1>Add a New Place</h1>
//         <form method="POST" action="/places">
//             <div>
//                 <label htmlFor='name'>Place Name</label>
//                 <input id='name' name='name'/>
//             </div>
//             <div>
//                 <label htmlFor='pic'>Place Picture</label>
//                 <input type='url' id='pic' name='pic'/>  
//             </div>
//             <div>
//                 <label htmlFor='city'>City</label>
//                 <input type='city' id='city' name='city'/>  
//             </div>
//             <div>
//                 <label htmlFor='state'>State</label>
//                 <input type='state' id='state' name='state'/>  
//             </div>
//             <div>
//                 <label htmlFor='cuisines'>Cuisines</label>
//                 <input type='cuisines' id='cuisines' name='cusisines'reuired />  
//             </div>
//                 <input type='submit' value='Add Place' />

//             </form>
//             </main>
            
//         </Def>
//     );

// };

// module.exports = new_form;

// const Index = (data) => {
//     let placesFormatted = data.places.map((place) => {
//         return (
//             <div>
//                 <h2>{place.name}</h2>
//                 <img src={place.pic} alt={place.name} />
//             </div>
//         );
//     });