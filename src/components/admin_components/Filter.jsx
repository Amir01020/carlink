import React, { useState } from 'react';
import { FaArrowRotateLeft, FaCalculator, FaCirclePlus, FaTrash } from "react-icons/fa6";
import { IoIosSearch } from 'react-icons/io';
import { RiArrowDownWideLine } from 'react-icons/ri';
import Search_elem from '../Search_elem';
import { IoCalculatorOutline } from 'react-icons/io5';
import { BsCalculator } from 'react-icons/bs';

const Filter = () => {
    const filter_arr = [
        'All',
        'Exclusive',
        'Not Exclusive',
      

    ]
    const [open, setOpen] = useState({

        user: false,
    });
    const open_func = (key) => {
        setOpen(prevState => ({
            ...prevState,  // сохраняем остальные значения
            [key]: !prevState[key]  // инвертируем значение нужного ключа
        }));

    }


    return (
        <div className="cont px-5">
            <div className=' mt-5  flex justify-between h-[25px] '>
                <div className="flex max-w-[400px]  gap-5 items-center">
                    {
                        filter_arr.map((i, idx) => (
                            <p key={idx} className='whitespace-nowrap text_anim text-[8px] text-[#585757]'>
                                {i}
                                <div className="w-full bg-[#56CA00] h-[1px] rounded-[5px]"></div>
                            </p>
                        ))
                    }
                </div>
                <div className="flex gap-2 items-center">
                    
              
                 
                    <FaCirclePlus className='text-[24px] text-[#0047E1]' />
                    <div
                        onClick={() => open_func('user')}
                        className={`${!open.user ? 'rounded-[6px]' : 'rounded-[6px_6px_0px_0px] border-b-0'} border-[0.5px] text-[8px] relative cursor-pointer flex px-2 gap-4 py-1 items-center border-[#D5D5D5]`}>
                        <p>0-24</p>
                        <RiArrowDownWideLine className='text-[#718EBF] text-[12px]' />
                        <div className={`absolute  ${open.user ? 'h-[100px] ' : 'h-0 opacity-0'}  h-[100px]  p-2 overflow-hidden bottom-0 left-0 border-[0.5px] rounded-[0px_0px_3px_3px] bg-[#fff] border-[#D5D5D5] w-full  translate-y-full`}>
                            <p className='cursor-pointer hover:border-b-[0.5px] w-full border-[#4880FF] text-[8px] text-[#8BA3CB]'>
                                text
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};



export default Filter;