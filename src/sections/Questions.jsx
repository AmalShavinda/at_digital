import React from 'react'
import QandA from '../components/QandA'


const Questions = () => {

  return (
    <div className='py-20'>
        <h1 className='flex items-center justify-center text-primary text-2xl font-bold px-5 pb-20'>Frequently asked questions</h1>
        <QandA/>
        <QandA/>
        <QandA/>
    </div>
  )
}

export default Questions
