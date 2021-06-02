import React from 'react'
import s from './BoardControl.module.css'

type ButtonPropsType = {
    disable: boolean
    name: string

    changeCallback: () => void

}

export const Button: React.FC<ButtonPropsType> = React.memo(({disable,name,changeCallback}) => {

    return (
        <div>
            <button className={s.button} disabled={disable} onClick={()=>changeCallback()}>{name}</button>
        </div>
    )
})