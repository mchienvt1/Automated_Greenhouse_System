import React from 'react'
import { useState } from 'react'
import { Typography } from '@material-tailwind/react'
import Icon from '../assets/icons/red_cross_icon.png'

const tableOptions = ["All", "Watering", "Lighting"]
const scheduled_task = [{
    "id": 1,
    "description": "Water tulip in the morning",
    "action": "Watering",
    "time": "12:00:00"
  },
  {
    "id": 2,
    "description": "Turn on in the morning",
    "action": "Lighting",
    "time": "14:00:00"
  },
  {
    "id": 3,
    "description": "Turn on in the morning",
    "action": "Lighting",
    "time": "14:00:00"
  },
  {
    "id": 4,
    "description": "Turn on in the morning",
    "action": "Lighting",
    "time": "14:00:00"
  },
  {
    "id": 5,
    "description": "Water tulip",
    "action": "Watering",
    "time": "14:00:00"
  },
]
function TaskTable() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='m-10 p-5 bg-white shadow-lg rounded-lg'>
      <div className='flex items-center'>
        <Typography className='text-[#9DDA9D] font-bold text-2xl mr-auto'>
          Task
        </Typography>
        <a href="/scheduled_task/add_task"><button type="button" class="text-white bg-gradient-to-r from-[#9DDA9D] via-[#9DDA9D] to-[#9DDA9D] hover:bg-gradient-to-br rounded-xl text-2xl px-3 py-1 text-center me-2 mb-2">
          Add task
        </button>
        </a>
      </div>
      <div className='border-b-2 border-black pb-[0.37rem] mb-4'>
        {tableOptions.map((item, index) => <span key={index} className={'mr-12 text-[#7D7D7D] font-medium text-sm ' + (activeIndex === index ? 'border-b-8 border-[#9DDA9D]' : '')}
        onClick={() => setActiveIndex(index)}>
          {item}
        </span>)}
      </div>
      <div class="relative overflow-x-auto shadow-lg">
        <table class="w-full text-sm text-left rtl:text-right text-[#6B6B6B] border-black border">
            <thead class="font-medium text-[#6B6B6B] bg-[#D1CFCF]">
                <tr>
                    <th scope="col" class="px-6 py-3 border-r border-black">
                        Task
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-black">
                        Time
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                    <th> 
                    </th>
                </tr>
            </thead>
            <tbody>
                {activeIndex == 0
                 && scheduled_task.map(item => <tr class="bg-[#EEEEEE] text-black font-medium border-t border-black">
                    <td scope="row" class="px-6 py-4 whitespace-nowrap">
                        {item.description}
                    </td>
                    <td class="px-6 py-4">
                        {item.time}
                    </td>
                    <td class="px-6 py-4">
                        {item.action}
                    </td>
                    <td>
                      <img src={Icon} alt="icon" />
                    </td>
                </tr>
                )}
                {activeIndex == 1
                 && scheduled_task.filter(item => item.action == "Watering").map(item => <tr class="bg-[#EEEEEE] text-black font-medium border-t border-black">
                    <td scope="row" class="px-6 py-4 whitespace-nowrap">
                        {item.description}
                    </td>
                    <td class="px-6 py-4">
                        {item.time}
                    </td>
                    <td class="px-6 py-4">
                        {item.action}
                    </td>
                    <td>
                      <img src={Icon} alt="icon" />
                    </td>
                </tr>
                )}
                {activeIndex == 2
                 && scheduled_task.filter(item => item.action == "Lighting").map(item => <tr class="bg-[#EEEEEE] text-black font-medium border-t border-black">
                    <td scope="row" class="px-6 py-4 whitespace-nowrap">
                        {item.description}
                    </td>
                    <td class="px-6 py-4">
                        {item.time}
                    </td>
                    <td class="px-6 py-4">
                        {item.action}
                    </td>
                    <td>
                      <img src={Icon} alt="icon" />
                    </td>
                </tr>
                )}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default TaskTable