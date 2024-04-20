import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const QandA = () => {

    const [ans, setAns] = useState(false)

    const handleClick = () => {
        setAns(!ans)
    }

  return (
    <div className='max-container max-w-[900px] px-5 pb-5'>
        <div className='flex justify-between gap-10'>
            <h2 className={!ans ? 'text-base font-semibold' : 'text-base font-semibold text-analogous1'}>What is Webflow and why is it the best website builder?</h2>
            <div onClick={handleClick}>
                {!ans ? <FaPlus/> : <FaMinus/>}
            </div>
        </div>
        <h4 className={!ans ? 'hidden' : 'text-sm text-gray-700 py-2'}>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</h4>
    </div>
  )
}

export default QandA
