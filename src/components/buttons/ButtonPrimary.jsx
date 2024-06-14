import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ButtonPrimary = (props) => {
  return (
      <>
          <Button type="primary">
              <Link to={props.link}>
                  {props.text}
              </Link>
          </Button>
      </>
  )
}

export default ButtonPrimary