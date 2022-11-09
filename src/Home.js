import { useState } from "react";

const Home = () => {
    // let name = 'mario';
    const [blogs, setBlog] = useState([
        {title: 'My First Title For Blog', contnet: 'lorem Ipsum .....', author: 'AhmedS', id: 1},
        {title: 'My Second Title For Blog', contnet: 'lorem Ipsum .....', author: 'Mohamed', id: 2},
        {title: 'My Third Title For Blog', contnet: 'lorem Ipsum .....', author: 'Salah', id: 3}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <small>Written by: {blog.author}</small>
                    <p>{blog.contnet}</p>
                </div>
            ))}

        </div>
     );
}
 
export default Home;