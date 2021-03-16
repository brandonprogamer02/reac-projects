import React from 'react'
import youtubeImage from './images/youtube.png'
import instagramImage from './images/instagram.png'
import twitterImage from './images/twitter.png'
import facebookImage from './images/facebook.png'
import triangleImage from './images/triangle.png'

export const types = {
    INSTAGRAM: 'INSTAGRAM',
    FACEBOOK: 'FACEBOOK',
    YOUTUBE: 'YOUTUBE',
    TWITTER: 'TWITTER'
}

interface IProps {
    small?: boolean,
    type: string
}

const getValues = (type: string): { img: string, colorBorderTop: string } => {
    switch (type) {
        case types.TWITTER: return { img: twitterImage, colorBorderTop: 'bt-twitter' }
        case types.FACEBOOK: return { img: facebookImage, colorBorderTop: 'bt-facebook' }
        case types.INSTAGRAM: return { img: instagramImage, colorBorderTop: 'bt-instagram' }
        case types.YOUTUBE: return { img: youtubeImage, colorBorderTop: 'bt-youtube' }
        default: return { img: 'IMAGE NOT FOUND', colorBorderTop: 'BORDER TOP COLOR CLASS NOT FOUND' }
    }
}

const Card = ({ small, type }: IProps) => {
    const { img, colorBorderTop } = getValues(type);
    small = small ? true : false;

    const marcadoNormal = (
        <div className={`bg-danger social-media-dasboard-card my-4 p-4 d-flex flex-column ${colorBorderTop} `}>
            <div className=' m-auto ' >
                <img src={img} alt="" width='25px' className='m-1' />
                <label>@Natha</label>
            </div>
            <label className="card-title m-auto _fs-50 fw-bold"> 1987</label>
            <label className="_ls-10 m-auto p-1 label-followes"> FOLLOWERS</label> <hr />
            <label className='m-auto'>
                <img src={triangleImage} alt="" />
                <span className='m-1 span-today'>Today</span>
            </label>
        </div>
    )
    const marcadoSmall = (
        <div className={`d-flex flex-column bg-danger p-3 social-media-dasboard-card bt-facebook ${colorBorderTop}`}>
            <div className=" d-flex  justify-content-between mx-2">
                <label >Page Views</label>
                <img src={img} alt="" width='25px' className='m-1 mx-2 ' />
            </div>

            <div className="d-flex  justify-content-between m-1">
                <label className='h3'>120</label>
                <label className='label-today-small-card'>
                    <img src={triangleImage} alt="" />
                    <span className='mx-2 span-today'>Today</span>
                </label>
            </div>
        </div>
    )

    return (
        <div className='col-12 col-md-5 col-xl-3 m-auto py-3'>
            {small ? marcadoSmall : marcadoNormal}
        </div>
    )
}

export default Card