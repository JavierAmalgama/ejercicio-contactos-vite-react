import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ButtonSecondary = (props) => {
  return (
    <>
          <Button>
              <Link to={props.link}>
                {props.text}
            </Link>
          </Button>
      </>
  )
}

export default ButtonSecondary