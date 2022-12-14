import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handelDelete }) => {


    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                   
                    <h2>{blog.title}</h2>
                    <small>Written by: {blog.author}</small>
                    <p>{blog.contnet}</p>
                    {/* <button onClick={ () => handelDelete(blog.id)} >Delete Artical</button> */}
                    
                    </Link>
                </div>
            ))}


        </div>
     );
}
 
export default BlogList;