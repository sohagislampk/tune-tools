import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-6xl text-primary flex items-end'><p>L</p><div className=' animate-spin w-10 h-10 rounded-full border-x-8 border-x-accent border-dashed'></div><p>ading</p></div>
        </div>
    );
};

export default Loading;