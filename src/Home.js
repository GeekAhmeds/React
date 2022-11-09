import { useState } from "react";

const Home = () => {
    // let name = 'mario';
    const [ name, setName ] = useState('mario');


    const handelClick = () => {
        setName('AhmedS');
        
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name }</p>
            <button onClick={ handelClick }>Click Me</button>
        </div>
     );
}
 
export default Home;