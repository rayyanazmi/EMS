import React from 'react'

const TaskList = ({data}) => {
    return (
        <div id='tasklists' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
            <div className='flex-shrink-0 h-full w-[300px] bg-[#F26419] p-5 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-800 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>24th Nov, 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a correction in your report </h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro perferendis assumenda quia deserunt, beatae vel.</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-[#7ebdc2] p-5 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-orange-400 text-sm px-3 py-1 rounded'>Moderate</h3>
                    <h4 className='text-sm'>24th Nov, 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Update the Status for pending report</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro perferendis assumenda quia deserunt, beatae vel.</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-violet-400 p-5 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-green-400 text-sm px-3 py-1 rounded'>On time</h3>
                    <h4 className='text-sm'>24th Nov, 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Upload it on Github </h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro perferendis assumenda quia deserunt, beatae vel.</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-[#79C99E] p-5 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-800 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>24th Nov, 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a correction to the </h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro perferendis assumenda quia deserunt, beatae vel.</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-[#99AA38] p-5 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-800 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>24th Nov, 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a correction to the </h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro perferendis assumenda quia deserunt, beatae vel.</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-[#4A4238] p-5 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-800 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>24th Nov, 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a correction to the </h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro perferendis assumenda quia deserunt, beatae vel.</p>
            </div>
            
        </div>
    )
}

export default TaskList