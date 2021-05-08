import React from 'react'
import s from './BoardControl.module.css'

type ButtonPropsType = {
    disable: boolean
    name: string

    changeCallback: () => void

}

export const Button: React.FC<ButtonPropsType> = ({disable,name,changeCallback}) => {

    return (
        <div className={s.buttonContainer}>
            <button className={s.button} disabled={disable} onClick={()=>changeCallback()}>{name}</button>
        </div>
    )
}