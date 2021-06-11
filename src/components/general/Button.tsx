import React from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    disable: boolean
    name: string
    buttonName: string
    changeCallback: (buttonName: string | undefined) => void

}

export const Button: React.FC<ButtonPropsType> = React.memo(({disable, name, buttonName, changeCallback}) => {

    const onChangeCallback = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        changeCallback(e.currentTarget.dataset.button_name)
    }

    return (
        <div>
            <button className={s.button} disabled={disable} data-button_name={buttonName}
                    onClick={(e) => onChangeCallback(e)}>{name}</button>
        </div>
    )
})