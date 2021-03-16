import React from 'react'
import Card, { types } from './Card'
import useSwitchButton from '../resources/useSwitchButton/MySwitchButton'
import Navigation from '../resources/Navigation/Navigation'

const SocialMediaDasboard = () => {
    const [SwitchButton ] = useSwitchButton()
    
    return (
        <div className="container ">
            
            {/* ----------------------------------------------------------------------------------------------------------------------------------*/}
            <div className="row ">
                <div className="col-12  d-flex flex-column col-md-7 p-3 align-items-center">
                    <label className='h2  text-center'>Social Media DashBoard</label>
                    <label className=''>Social Media DashBoard</label>
                </div>
                <div className="col-12  col-md-5 dark-mode align-items-center d-flex ">
                    <div className="  w-100 d-flex justify-content-start justify-content-md-end  ">
                        <span className='mx-3 '>Dark Mode</span>
                        {SwitchButton}
                    </div>
                </div>
                <div className="col-12  cards-container ">
                    <div className="row">
                        <Card type={types.FACEBOOK} />
                        <Card type={types.TWITTER} />
                        <Card type={types.INSTAGRAM} />
                        <Card type={types.YOUTUBE} />
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------*/}
            <div className="row ">
                <div className="col-12  p-4 ">
                    <label className='h4'>Overview - Today</label>
                </div>
                <div className="col-12  cards-container ">
                    <div className="row ">
                        <Card type={types.FACEBOOK} small={true} />
                        <Card type={types.FACEBOOK} small={true} />
                        <Card type={types.TWITTER} small={true} />
                        <Card type={types.TWITTER} small={true} />
                        <Card type={types.INSTAGRAM} small={true} />
                        <Card type={types.INSTAGRAM} small={true} />
                        <Card type={types.YOUTUBE} small={true} />
                        <Card type={types.YOUTUBE} small={true} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SocialMediaDasboard