import {Link, Outlet} from "react-router-dom";
import '../Style/Home.css';
function Home() {

    return (
        <>
            <div>
                <div className={'header'}>
                    <div className={'logo'}>Logo</div>
                    <div className={'banner'}>Banner</div>
                </div>
                <div className={'menu'}>
                    <div className={'menu-left'}>
                        <div className="home menu-item"><Link to={'/home'}>Home</Link></div>
                        <div className="product menu-item">Product</div>
                    </div>
                    <div className={'menu-right'}>
                        <div className="order menu-item"><Link to={'/home/order'}>Order</Link></div>
                        <div className="menu-item" ><Link to={'/'}>Logout</Link></div>
                    </div>

                </div>
                <div className={'body'}>
                    <div className="sidebar">Side bar</div>
                    <div className="listProduct">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home