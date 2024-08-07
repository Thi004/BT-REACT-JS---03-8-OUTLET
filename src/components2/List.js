import {Link} from "react-router-dom";

function List () {
    return (
        <>
            <div className={'main'}>
                <Link to={'/admin/students/add'}>Back to Add</Link>
                <h1>List</h1>
            </div>

        </>
    )
}
export default List