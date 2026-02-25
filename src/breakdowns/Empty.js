// import React from 'react';
// import { useParams } from 'react-router-dom';
// import '../goto/empty.css';
// function Empty() {
//   const { category } = useParams();
//   const addItem = () =>{

//   }
//   return (
//     <>
    
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Welcome to the {category} Collection</h1>
//       <p>Explore our exclusive range of {category.toLowerCase()} designs.</p>
//       <button className="addIt" onClick={(addItem)}> +</button>
//     </div>
//     <div className="contents">

//     </div>
//     </>
//   );
// }

// export default Empty;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import '../goto/empty.css';

function Empty() {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [category]);

  const addItem = () => {
  };

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to the {category} Collection</h1>
        <p>Explore our exclusive range of {category.toLowerCase()} designs.</p>
        <button className="addIt" onClick={addItem}> +</button>
      </div>
      <div className="contents">
      </div>
    </>
  );
}

export default Empty;