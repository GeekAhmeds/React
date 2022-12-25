const Create = () => {
    return (

        <div className="create">

            <form>
            <label htmlFor="">Title</label>
                <input
                     type="text"
                     required
                 />
                <label htmlFor="">Content</label>
                <textarea name="content" id="content" cols="30" rows="10"
                        required
                ></textarea>
                <label htmlFor="">Author</label>
                <select name="author" id="author">
                    <option value="blank">---</option>
                    <option value="ahmeds">AhmedS</option>
                    <option value="mohameds">MohamedS</option>
                </select>
                <button>Add Blog</button>
            </form>

        </div>

      );
}
 
export default Create;