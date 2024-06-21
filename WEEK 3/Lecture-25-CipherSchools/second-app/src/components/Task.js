
import { formatDate } from "../utils/DateUtil";

const Task = ({task: {title, description, createdDate}}) => {
    // return <h6>Task</h6>

    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    {/* Go To Gym */}
                    {title}
                </div>
                <div class="meta">
                    {/* {createdDate.toLocaleTimeString()} */}
                    {formatDate(createdDate)}

                    {/** HERE formatDate FUNCTION IS CALLED ****/}

                </div>
                <div className="description">
                    {/* Going to Gym is good for muscle growth */}
                    {description}
                </div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Edit</div>
                    <div className="ui basic red button">Delete</div>
                </div>
            </div>
        </div>
    );

};

export default Task;