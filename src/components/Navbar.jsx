import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <ul>
              <li>
                  <Link to={"/login"}>
                    Login
                  </Link>
            </li>
              <li>
                  <Link to={"/logout"}>
                    Logout
                  </Link>
            </li>
              <li>
                  <Link to={"/dashboard"}>
                    Dashboard
                  </Link>
            </li>
          </ul>
    </div>
  )
}

export default Navbar