import React, { useContext } from 'react'
import { context } from '../../../App'

interface Props {
    left: boolean,
}

const Navigation = ({ left }: Props) => {
    const { nextOrPreviousRoute } = useContext(context)
    const [sassClass, nextOrPrevious] = left ? ['navigation-left', 'Previous'] : ['navigation-right', 'Next']
    return (
        <div className={sassClass} onClick={() => nextOrPreviousRoute(nextOrPrevious)} >
            <span>{nextOrPrevious}</span>
        </div>
    )
}

export default Navigation