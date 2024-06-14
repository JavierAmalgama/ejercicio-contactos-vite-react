import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
    return (
        <ul>
            <li>
                <Link to={"/contact"}>
                    Ver contacto
                </Link>
            </li>
            <li>
                <Link to={"/contact"}>
                    Ver contacto
                </Link>
            </li>
            <li>
                <Link to={"/contact"}>
                    Ver contacto
                </Link>
            </li>
      </ul>
  )
}

export default DashboardPage