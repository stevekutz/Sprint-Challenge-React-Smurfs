import React from 'react';

/*
   <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>

 */


function Smurf ({smurfs, match, deleteSmurf, setUpdateForm}) {

  

// const id =  Number(match.params.id);
// console.log("id is", id);


/*
  const smurf = smurfs.find(smurf => {
    console.log("smurf is ", smurf);
    return smurf.id === id;
  });
*/

/*
  if(!smurf) {
    return <h2>.... LOADING in SMURF </h2>
  }
*/


  /*
        <div className="Smurf">
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
      </div>

*/
  return (
    <div>


      <div>
        <button
          className = "UpdateButton"
       //   onClick = {e => setUpdateForm(e, smurf)}
        >
          Update that SMURF
        </button>


        <button
          className = "DeleteButton"
       //   onClick={ e => deleteSmurf(e, smurf.id)}
        >
          Delete that SMURF
        </button>
      </div>


    </div>




  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

