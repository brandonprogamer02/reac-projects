import React, { useState } from 'react'
import './styles.css'

const useSwitchButton = () => {
    const [isOn, setIsON] = useState(false)
    const movimiento = isOn ? 'move-right' : 'move-left'
    const handlerMove = () => setIsON(!isOn)
    const bgColor = isOn ? 'bg-green' : 'bg-grey'

    const marcado = (
        <>
            <div onClick={handlerMove} className={`hhh-container ${bgColor} `}  >
                <div className={`hhh ${movimiento} `} >
                </div>
            </div>
        </>
    )
    const retorno: [JSX.Element, boolean] = [marcado, isOn]
    return retorno
}
export default useSwitchButton