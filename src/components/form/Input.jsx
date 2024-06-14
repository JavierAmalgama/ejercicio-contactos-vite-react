import React from 'react'

const Input = (props) => {
  return (
      <>
          <div className='form-field'>
              <label for={props.value}>
                  {props.name}
              </label>
              <input type={props.type} id={props.value} name={props.value}/>
        </div>
      </>
  )
}

export default Input