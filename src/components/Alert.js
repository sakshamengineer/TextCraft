import React from 'react'
function Alert(props) {
    const capitalize = (word) =>{
        return (word.split(' ').map(word1 => word1.charAt(0).toUpperCase() + (word1.slice(1)).toLowerCase()).join(' '));
    }
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.messagetype} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.messagetype)} </strong>: {props.alert.message}
        </div>}
        </div>
    )
}

export default Alert
