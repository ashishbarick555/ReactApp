import React, {Component} from 'react';
import './Layout.css';
class Sidebar extends Component 
{
    render()
    {
        var menulist = ['Home', 'About', 'Contact Us'];
        return(
            <section className = "sidebar-layout">
                <ul className="Menu-list"> 
                </ul>
            </section>
        )
    }
} 
export default Sidebar;