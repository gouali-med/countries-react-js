import './Sidebar.css'; 
import { NavLink } from 'react-router-dom';
import React from 'react';

function Sidebar() {
  return (
        <aside>
        <div className="top">
            <div className="logo">
                <img src={process.env.PUBLIC_URL +'/logo192.png'} alt="" />
                <h2>MedSytems</h2>
                <div className="close" id="close-btn">
                    <span className="material-icons-sharp">close</span>
                </div>
            </div>
        </div>
        <div className="sidebar">
            <NavLink activeClassName="active" to="/product">
                <span className="material-icons-sharp"> grid_view</span>
                <h3>Tableau de bord</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/main">
                <span className="material-icons-sharp"> point_of_sale</span>
                <h3>Point de ventes</h3>
            </NavLink>
            <a href="a">
                <span className="material-icons-sharp"> sell</span>
                <h3>Ventes</h3>
            </a>

            <NavLink activeClassName="active" href="a">
                <span className="material-icons-sharp"> shopping_cart</span>
                <h3>Achats</h3>
            </NavLink>

            <NavLink activeClassName="active" href="a">
                <span className="material-icons-sharp"> settings</span>
                <h3>Parametres</h3>
            </NavLink>
        </div>
        </aside>
  )
}

export default Sidebar