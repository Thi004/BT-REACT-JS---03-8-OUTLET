import NavBar from "./NavBar";
import {Outlet} from "react-router-dom";
import SlideBar from "./SlideBar";

function Home2 (){
    return (
        <>
            <div className={'container'}>
                <NavBar/>
                <SlideBar/>
                <Outlet/>
            </div>


        </>
    )
}
export default Home2