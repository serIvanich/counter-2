import React from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    disable: boolean
    name: string
    buttonName: string
    changeCallback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

}

export const Button: React.FC<ButtonPropsType> = React.memo(({disable, name, buttonName, changeCallback}) => {

    return (
        <div>
            <button className={s.button} disabled={disable} data-button_name={buttonName}
                    onClick={(e) => changeCallback(e)}>{name}</button>
        </div>
    )
})