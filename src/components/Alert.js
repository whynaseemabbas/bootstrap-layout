import React from 'react'

function Alert(props) {

    const capitalize =(word)=> {

        const capital = word.toLowerCase();
        return capital.charAt(0).toUpperCase() + capital.slice(1);
    }

  return (
    <div className='' style={{height:'90px'}}>  { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg} 
  </div>}
  </div>

  )
}

export default Alert
