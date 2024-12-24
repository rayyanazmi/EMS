import React from 'react'

const FailedTask = ({data}) => {
    return (
    <div className='flex-shrink-0 h-full w-[300px] bg-emerald-500 p-5 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-yellow-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>{data.taskDescription}</p>
                <div className='mt-6'>
                <button className='w-full bg-red-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
                </div>
            </div>
    )
}

export default FailedTask