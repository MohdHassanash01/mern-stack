'use client'
import React, { useState } from 'react'

const page = () => {

    const [count, setCount] = useState(1)

    const [taskList, settaskList] = useState([
        { text: 'saaf safai', completed: false, added: new Date() },
        { text: 'learn English', completed: false, added: new Date() },
        { text: 'coding', completed: false, added: new Date() },
    ])

    function addTask(e) {
        // console.log(e.code);
        if (e.code === 'Enter') {
            console.log(e.target.value);
            const newTask = {text:e.target.value, completed:false, added: new Date()}
            settaskList([...taskList,newTask])
            e.target.value = ''
        }

    }

    function deleteTask(index){
    //   console.log(index);
    const temp = taskList
    temp.splice(index,1)
    settaskList([...temp])
                }

        const toggleCompleted = (index) => {
        const temp = taskList;
        temp[index].completed = !temp[index].completed
        settaskList([...temp])
       } 

    return (
        <div className='max-w-5xl mx-auto mt-6'>

            <div className='border shadow rounded-3xl'>
                <div className='p-4 border-b-2'>


                    <input

                        onKeyDown={addTask}
                        className='w-full p-3 border border-gray-300 rounded-xl outline-none'
                        placeholder='Add a new task'
                        type="text" />
                </div>

                <div className='p-6'>
                 {taskList.map((task,index) => {return (
                    <div key={index}
                    className='rounded-md border mb-5 shadow p-2 bg-gray-100'>
{task.completed?<h3></h3>:<h3></h3>}
                        {task.completed?<p className='mt-3 pl-3 bg-green-300 rounded-md disabled line-through'>{task.text}</p>:<p className='mt-3 bg-pink-300 pl-3 rounded-md'>{task.text}</p>}

                    
                        <div className='mt-2 flex justify-end gap-4'>


                  <button
                      onClick={() => { toggleCompleted(index)}}      
                className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full'>{task.completed? <span>Completed</span>:<span>Incompleted</span>}</button>


                            <button 
                            onClick={() => {deleteTask(index)}}
                            className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full'>Deleted</button>

                        </div>
                    </div>
                 )})}
             
                </div>

            </div>

            <hr />
            {/* 
        <div>
        <h1 className='text-3xl text-red-500'>{count}</h1>
<button
onClick={() => {
    setCount(count + 1)
    console.log(count);
}}
className='bg-slate-500 text-white px-4 py-1'>add</button>


<button
onClick={() => {
    setCount(count - 1)
    console.log(count);
}}
className='bg-slate-500 text-white px-4 py-1'>dec</button>
        </div> */}


        </div>
    )
}

export default page
