
// ui form FROM SEMANTIC UI

const AddTask = () => {
    return (
    // <p>This is add task</p>

    <>

    <h3 className="ui heading center">Add New Task</h3>

    <div className="ui form">

        <form>
            <div className="field">
                <label>Title</label>
                <input type="text" fdprocessedid="1qut7" placeholder="Task Title" name="title"/>
            </div>

            <div className="field">
                <label>Description</label>
                <textarea rows="2" placeholder="Task Description" name="description"></textarea>
            </div>

            <button className="ui primary button" fdprocessedid="jhz0rs"> Submit </button>

        </form>

    </div>

    </>

    )
}

export default AddTask;

