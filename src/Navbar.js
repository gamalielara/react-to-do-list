import { useState } from "react";
import {Link} from 'react-router-dom';

const Navbar = ({categories}) => {
    const [isNavbarShown, setIsNavbarShown] = useState(false);

    const generateNewCategories = () => {
        let newCategoriesDiv = [];

        if(categories.length > 3){
            for (let i=3; i<categories.length; i++){
                newCategoriesDiv.push((
                    <Link to={'/react-to-do-list/' + categories[i].replace(/\s/g, '-')}><div className="aside-btn"><p><i class="icon fas fa-pencil-alt"></i> {categories[i]}</p></div> </Link>
                ));
            }
        }
        return newCategoriesDiv;
    }

    const showNavbarHandler = () => {
        setIsNavbarShown(!isNavbarShown);
    }

    return ( 
        <nav className="navbar">
            <button className="menu menu-open" id="menu" onClick={showNavbarHandler}><i className="fas fa-bars"></i></button>
            <div className={isNavbarShown ? 'navbar-menu shown-navbar': 'navbar-menu hidden-navbar'}>
                <ul className='navbar-menu'>
                    <li><button className="menu menu-close" id="menu" onClick={showNavbarHandler}><i className="fas fa-times"></i></button></li>
                    <li><Link to='/react-to-do-list/'><div className="aside-btn my-day" onClick={showNavbarHandler}><p><i className="icon fas fa-list"></i> All Todos</p></div></Link></li>
                    <li><Link to='/react-to-do-list/myday'><div className="aside-btn my-day" onClick={showNavbarHandler}><p><i className="icon far fa-sun"></i> My Day</p></div></Link></li>
                    <li><Link to='/react-to-do-list/completed-todos'><div className="aside-btn completed-tasks" onClick={showNavbarHandler}><p><i className="icon fas fa-check"></i> Completed Tasks</p></div></Link></li> 
                    <li><Link to='/react-to-do-list/Tasks'><div className="aside-btn tasks" onClick={showNavbarHandler}><p><i className="icon far fa-folder-open"></i> Tasks</p></div></Link></li>
                    <li><Link to='/react-to-do-list/Planned-Tasks'><div className="aside-btn planned-tasks" onClick={showNavbarHandler}><p><i className="icon far fa-calendar-alt"></i> Planned Tasks</p></div> </Link></li>
                    <li><Link to='/react-to-do-list/Important-Tasks'><div className="aside-btn important-tasks" onClick={showNavbarHandler}><p><i className="icon far fa-star"></i> Important Tasks</p></div> </Link></li>
                    {generateNewCategories().map((div) => (<li>{div}</li>))}
                    <li><Link to='/react-to-do-list/add-category'><div className="aside-btn add-categories" onClick={showNavbarHandler}><p><i className="icon fas fa-plus"></i> Add Categories</p></div> </Link></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;