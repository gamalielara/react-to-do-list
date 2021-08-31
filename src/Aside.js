import {Link} from 'react-router-dom';
const Aside = ({categories}) => {

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

    return ( 
        <aside id="asideMenu">
            <h3>Categories</h3>
            <Link to='/react-to-do-list/'><div className="aside-btn my-day"><p><i className="icon fas fa-list"></i> All Todos</p></div></Link>
            <Link to='/react-to-do-list/myday'><div className="aside-btn my-day"><p><i className="icon far fa-sun"></i> My Day</p></div></Link>
            <Link to='/react-to-do-list/completed-todos'><div className="aside-btn completed-tasks"><p><i className="icon fas fa-check"></i> Completed Tasks</p></div></Link> 
            <Link to='/react-to-do-list/Tasks'><div className="aside-btn tasks"><p><i className="icon far fa-folder-open"></i> Tasks</p></div></Link>
            <Link to='/react-to-do-list/Planned-Tasks'><div className="aside-btn planned-tasks"><p><i className="icon far fa-calendar-alt"></i> Planned Tasks</p></div> </Link>
            <Link to='/react-to-do-list/Important-Tasks'><div className="aside-btn important-tasks"><p><i className="icon far fa-star"></i> Important Tasks</p></div> </Link>
            {generateNewCategories().map((div) => (div))}
            <Link to='/react-to-do-list/add-category'><div className="aside-btn add-categories"><p><i className="icon fas fa-plus"></i> Add Categories</p></div> </Link>
        </aside>
     );
}
 
export default Aside;