import React from "react"
import './styles.css'

type Props = React.ComponentProps<"button"> & {
    title: string,
    isDark?: boolean
}

function Button({
    title,
    isDark = false,
    ...rest
}: Props){
    return (
        <button
            className={`button ${isDark && 'dark'}`}
            {...rest}
        >
            {title}
        </button>
    )
}

export default Button