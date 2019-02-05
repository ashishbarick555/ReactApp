import React, {Component} from 'react';
import './Layout.css';
class Sidebar extends Component 
{
    render()
    {
        var menulist = ['Home', 'About', 'Contact Us'];
        return(
            <section className = "sidebar-layout">
                <ul className="Menu-list" >  
                    <li  className="active">
                        <a href="">
                            <span>Task 1</span>
                        </a>
                    </li>
                    <li  className="active">
                        <a href="">
                            <span>Task 2</span>
                        </a>
                    </li>
                    <li  className="active">
                        <a href="">
                            <span>Task 3</span>
                        </a>
                    </li>
                    <li  className="active">
                        <a href="">
                            <span>Task 4</span>
                        </a>
                    </li>
                    <li  className="active">
                        <a href="">
                            <span>Task 5</span>
                        </a>
                    </li>
                    <li  className="active">
                        <a href="">
                            <span>Task 6</span>
                        </a>
                    </li>
                    <li  className="active">
                        <a href="">
                            <span>Task 7</span>
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
} 
export default Sidebar;