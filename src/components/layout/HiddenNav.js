import React from 'react'
import { NavLink} from 'react-router-dom'

import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.css';

function BasicExample( {onClick}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i class="fa-solid fa-bars fa-2xl"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><NavLink to='/all'>NEW ARRIVALS</NavLink></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><NavLink to='/platforms'>PLATFORMS</NavLink></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><NavLink to='/flats'>FLATS</NavLink></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><NavLink to='/sneakers'>SNEAKERS</NavLink></Dropdown.Item>
        <Dropdown.Divider />
            <Dropdown.Item eventKey="4"><i className="fa-solid fa-magnifying-glass fa-l" onClick={onClick}></i>
                    </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample