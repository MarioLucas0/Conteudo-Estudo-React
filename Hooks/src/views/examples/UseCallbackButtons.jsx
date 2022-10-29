import React from 'react'

/**
 * "UseCallbackButtons is a function that returns a div with three buttons that each call the inc
 * function with a different value."
 * 
 * The UseCallbackButtons function is a child component of the UseCallback component
 * @returns A function that returns a component
 */
const UseCallbackButtons = (props) => {
    console.log('render....')
    return (
        <div>
            <button className="btn" onClick={() => props.inc(6)}>
                +6
            </button>
            <button className="btn" onClick={() => props.inc(12)}>
                +12
            </button>
            <button className="btn" onClick={() => props.inc(18)}>
                +18
            </button>
        </div>
    )
}

// export default UseCallbackButtons
/* A React hook that is used to memoize a component. */
export default React.memo(UseCallbackButtons)