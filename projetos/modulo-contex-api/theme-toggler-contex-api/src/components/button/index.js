import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
 
  export const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    console.log('Button theme', theme)

    return(
        <button {...props}
          style={{color: theme.color, backgroundColor: theme.background  }}
        />
    )
 }
