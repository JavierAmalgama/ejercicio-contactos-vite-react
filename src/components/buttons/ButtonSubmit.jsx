import React from 'react'
import { Button } from 'antd'

const ButtonSubmit = (props) => {
  return (
      <Button type="primary" htmlType="submit">{ props.innerText }</Button>
  )
}

export default ButtonSubmit