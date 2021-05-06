import React from 'react'

type ButtonPropsType = {
    name: string

    changeCallback: () => void

}

export const Button: React.FC<ButtonPropsType> = ({name,changeCallback}) => {

    return (
        <div>
            <button onClick={()=>changeCallback()}>{name}</button>
        </div>
    )
}