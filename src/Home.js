import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // let name = 'mario';
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true); 
    const handelDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
useEffect(() =>{
    setTimeout(() => {
        fetch('http://localhost:7000/blogs')
        .then(res => {
           return res.json();
   
        })
        .then(data =>{
           setBlogs(data);
           setIsPending(false);
        });
   
    }, 1000);

}, []);

    return ( 
        <div className="home">
            {/* <BlogList blogs = {blogs}  title='All Blogs!' /> */}
            { isPending && <div>Loading...</div> }
           { blogs && <BlogList blogs ={blogs} title="All Articals!" handelDelete={ handelDelete } /> }
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'Ahmed')}  title="Ahmed's Articals!" handelDelete={ handelDelete } /> */}
        </div>
     );
}
 
export default Home;