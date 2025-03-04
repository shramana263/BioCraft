import React from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useThemeContext } from '../../contexts/ThemeContext'

const DarkMode = () => {
    const { isDark, setDark } = useThemeContext()
    return (
        <>
            <div className='flex justify-center items-center hover:cursor-pointer'>
                {
                    isDark ?
                        <>
                            <div className='flex justify-center items-center motion-preset-pop' onClick={()=>setDark(false)}>

                                <MdOutlineLightMode />
                            </div>
                        </>
                        :
                        <>
                            <div className='flex justify-center items-center motion-preset-pop'onClick={()=>setDark(true)}>

                                <MdOutlineDarkMode />
                            </div>

                        </>
                }
            </div>

        </>
    )
}

export default DarkMode
