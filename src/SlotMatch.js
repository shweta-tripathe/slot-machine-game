import React from 'react';
import App from './App';



const SlotM = (props) => {
   let {x, y, z} = props;

if ( (x===y) && (y===z) ){
    return(
        <>
            <div className = 'slot_inner'>

            <h1>{x} {y} {z} </h1>
            <h1>This Is Matching.</h1>
            <hr/>

            </div>
        </>
    );
}else{
    return(
        <>
            <div className = 'slot_inner'>

            <h1>{x} {y} {z} </h1>
            <h1>This Is Not Matching.</h1>
            <hr/>

            </div>
        </>
    );

}
};

export default SlotM;






