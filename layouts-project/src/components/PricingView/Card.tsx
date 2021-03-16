import React from 'react'

export const planes = {
    PERSONAL: 'PERSONAL',
    PROFESIONAL: 'PROFESIONAL',
    FAMILIAR: 'FAMILIAR'
}

interface Props {
    type: string,
    isCaro: boolean
}
interface ICard {
    titulo: string;
    precio: string;
    storage: string;
    usersAllowed: string;
    upgrade: string;
}

const getData = (type: string, isCaro: boolean): ICard => {
    const f = (titulo: string, precio: number, storage: number, usersAllowed: number, upgrade: number) => ({
        titulo,
        precio: `$${precio}.99`,
        storage: `${storage} TB Storage`,
        usersAllowed: `${usersAllowed} Users Allowed`,
        upgrade: `Send Up To ${upgrade} GB`
    })
    switch (type) {
        case planes.PROFESIONAL: return f('Profesional', isCaro ? 249 : 20, 100, 30, 100)
        case planes.FAMILIAR: return f('Familiar', isCaro ? 80 : 6, 40, 8, 10)
        case planes.PERSONAL: return f('Personal', isCaro ? 12 : 1, 10, 3, 5)
        default: return f('', 0, 0, 0, 0)
    }
}

const Card = ({ type, isCaro }: Props) => {
    const { precio, storage, titulo, upgrade, usersAllowed }: ICard = getData(type, isCaro);

    return (
        <div className='border-radius-15 bg-purple py-1 w-75 m-auto row border  '>
            <div className="card-body mx-auto m-4  col-7 col-sm-6 col-md-4 col-xl-3 d-flex flex-column align-items-center justify-content-around ">
                <div className="row ">
                    <div className="col-12 ">
                        <div className='d-flex flex-column'>
                            <label className=" h3 color-white  text-center" >{titulo}</label>
                            <label className=" h1 color-white  _fs-50 mt-n2">{precio}</label>
                        </div>
                        <div className='d-flex flex-column  '>
                            <label className=" color-white py-3 bb-white text-center fw-bolder _fs-18">{storage}</label>
                            <label className=" color-white py-3 bb-white text-center fw-bolder _fs-18">{usersAllowed}</label>
                            <label className=" color-white py-3 bb-white text-center fw-bolder _fs-18">{upgrade}</label>
                        </div>
                        <div className='border-radius-10  mt-5 bg-white py-2 d-flex justify-content-center learn-more'>
                            <span className='color-purple fw-bolder py-1 '>Learn More</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card