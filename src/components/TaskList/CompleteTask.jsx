import React from 'react'

const CompleteTask = ({data}) => {
    return (
    <div className='flex-shrink-0 h-full w-[300px] bg-violet-500 p-5 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-emerald-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>{data.taskDescription}</p>
                <div className='mt-12'>
                <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'>Completed</button>
                </div>
            </div>
    )
}

export default CompleteTask