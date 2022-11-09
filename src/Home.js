import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // let name = 'mario';
    const [blogs, setBlog] = useState([
        {title: 'My First Title For Blog', contnet: 'lorem Ipsum .....', author: 'AhmedS', id: 1},
        {title: 'My Second Title For Blog', contnet: 'lorem Ipsum .....', author: 'Mohamed', id: 2},
        {title: 'My Third Title For Blog', contnet: 'lorem Ipsum .....', author: 'Salah', id: 3}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs = {blogs}  title='All Blogs!' />
        </div>
     );
}
 
export default Home;