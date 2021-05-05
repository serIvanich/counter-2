import React from 'react'

type ButtonPropsType = {
    name: string
    value: number
    changeCallback: () => void

}

export const Button: React.FC<ButtonPropsType> = ({name, value, changeCallback}) => {

    return (
        <div>
            <button onClick={()=>changeCallback()}>{name}</button>
        </div>
    )
}