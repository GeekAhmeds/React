import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setBody] = useState('');
    const [author, setAuthor] = useState('---');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    
    const handelSubmit =(e) => {
            e.preventDefault();
        const blog = {title, content, author}
        
        setIsPending(true);
        fetch('http://localhost:7000/blogs', {
            method: 'POST', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new Blog Added');
            setIsPending(false);
            // history.go(1);
            history.push('/');
        })
        
    }


    return (

        <div className="create">

            <form onSubmit={handelSubmit}>
            <label htmlFor="">Title</label>
                <input
                     type="text"
                     required
                     value={title}
                     onChange={(e) => setTitle(e.target.value) }
                 />
                <label htmlFor="">Content</label>
                <textarea name="content" id="content" cols="30" rows="10"
                        required
                        value={content}
                        onChange={(e) => setBody(e.target.value) }
   
                ></textarea>
                <label htmlFor="">Author</label>
                <select name="author" id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        >
                    <option value="blank">---</option>
                    <option value="ahmeds">AhmedS</option>
                    <option value="mohameds">MohamedS</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending  && <button>Adding ...</button> }
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{author}</p>
            </form>

        </div>

      );
}
 
export default Create;