import {Link} from "react-router-dom";

function Add (){
    return (
        <>
            <div className={'main'}>
                <Link to={'/admin/students/list'}>Back to List</Link>
                <h1>Add</h1>
            </div>

        </>
    )
}
export default Add