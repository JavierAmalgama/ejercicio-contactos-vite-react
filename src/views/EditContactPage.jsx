import React from 'react'
import Input from '../components/form/Input'
import { DatePicker } from 'antd';

const EditContactPage = () => {
  return (
      <>
          <form>
              <Input name="Full name" value="full-name" />
              <DatePicker/>
          </form>
      </>
  )
}

export default EditContactPage