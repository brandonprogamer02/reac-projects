import React from 'react'

const Form = () => {

    return (
        <div className='container border w-10 vh-100 p-3 '>
            <label className='form-label'>Esto es un titulo pal input cabron</label>
            <input type="email" className="form-control " placeholder="name@example.com" value="test@example.com"></input>

            <div className="input-group mb-3">

                <span className="input-group-text" >@</span>
                <input type="text" className="form-control" placeholder="Username" />
            </div>

            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>

            </div>

        </div>

    )
}

export default Form