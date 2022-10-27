import React from 'react'

const Wrapper = ({ Children }) => {
    return (
        <div className='Wrapper'>
            {Children}
        </div>
    )
}

export default Wrapper