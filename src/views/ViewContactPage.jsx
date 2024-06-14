import React from 'react'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import ButtonSecondary from '../components/buttons/ButtonSecondary'

const ViewContactPage = () => {
  return (
      <div>
          <ul>
              <li>
                  <ButtonPrimary link="/edit-contact" text="Edit"/>
              </li>
              <li>
                  <ButtonSecondary link="/delete-contact" text="Delete" />
              </li>
          </ul>
          <div className='info-cont'>
              Contact information
          </div>
      </div>
  )
}

export default ViewContactPage