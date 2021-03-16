import React, { } from 'react'
import svgTop from './images/bg-top.svg'
import useSwitchButton from '../resources/useSwitchButton/MySwitchButton'
import Card, { planes } from './Card'


const PricingView = () => {
    // const contexto = useContext(_context)
    const [SwitchButton, isOn] = useSwitchButton()

    return (
        <div className="container-fluid bg-background  py-5 w-100  ">
            {/* <img src={svgTop} alt="svg image" className=' svg-top ' /> */}
            <div className="row border  b-black">
                <div className="col-12  d-flex  flex-wrap justify-content-center ">
                    <div className="row  d-flex ">
                        <div className='col-12 d-flex my-2 justify-content-center'>
                            <h2 className=''>Our pricing</h2>
                        </div>
                        <div className='d-flex justify-content-center my-2  col-12'>
                            <span>Monthly</span>
                            {SwitchButton}
                            <span>Anually</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-4 py-3 trans ">
                            <Card type={planes.PERSONAL} isCaro={isOn} />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 py-3 ">
                            <Card type={planes.PROFESIONAL} isCaro={isOn} />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 py-3 trans">
                            <Card type={planes.FAMILIAR} isCaro={isOn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingView

