"use client";

import React, { useState } from 'react'
import { faqs } from '../../public/data/faqs';
import FaqCard from './FaqCard';


const Faqs = () => {
    const [current,setCurrent] = useState(0);
  return (
    <div className='flex flex-col gap-5'>
        {
            faqs?.map((item)=>(<FaqCard current={current} setCurrent={setCurrent} key={item.id} question={item}/>))
        }
    </div>
  )
}

export default Faqs