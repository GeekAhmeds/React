import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // let name = 'mario';
    const [blogs, setBlogs] = useState([
        {title: 'My First Title For Blog', contnet: 'lorem Ipsum .....', author: 'Ahmed', id: 1},
        {title: 'My Second Title For Blog', contnet: 'lorem Ipsum .....', author: 'Mohamed', id: 2},
        {title: 'My Third Title For Blog', contnet: 'lorem Ipsum .....', author: 'Salah', id: 3}
    ]);

    const handelDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
useEffect(() =>{
    console.log('use effect ran');
    console.log(blogs);
})

    return ( 
        <div className="home">
            {/* <BlogList blogs = {blogs}  title='All Blogs!' /> */}
            <BlogList blogs ={blogs} title="All Articals!" handelDelete={ handelDelete } />
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'Ahmed')}  title="Ahmed's Articals!" handelDelete={ handelDelete } /> */}
        </div>
     );
}
 
export default Home;