import Navbar from './Navbar';

const Header = ({categories}) => {
    return ( 
        <header className="App-header">
            <Navbar categories={categories}/>
            <div className="title">
            <h2 class="title"><i class="icon fas fa-check-double"></i>toDo</h2>
            </div>

            <div className="profile">
                <div className="my-profile">
                    <button className="help"><i class="far fa-question-circle"></i></button>
                    <button className="notification"><i class="far fa-bell"></i></button>
                    <h4 class="user-name">Ara Gamaliel </h4>
                    <div className="dropdown-button">
                        <button className="dropdown"><i class="fas fa-chevron-down"></i></button>
                        <div className="profile-options">
                            <ul>
                                <li><a href="#">My Profile</a></li>
                                <li><a href="#">Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <i class="user-icon fas fa-user-circle"></i>
            </div>
        </header>
     );
}
 
export default Header;