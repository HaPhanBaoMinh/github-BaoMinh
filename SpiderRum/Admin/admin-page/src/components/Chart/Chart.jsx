import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
  {name: 'Jan', Revenue: 400}, 
  {name: 'Feb', Revenue: 20},
  {name: 'Mar', Revenue: 20},
  {name: 'Apr', Revenue: 240}, 
  {name: 'May', Revenue: 290}, 
  {name: 'Jun', Revenue: 50},
  {name: 'Aug', Revenue: 300}, 
  {name: 'Sep', Revenue: 20},
  {name: 'Oct', Revenue: 60},
  {name: 'Nov', Revenue: 70}, 
  {name: 'Dec', Revenue: 290}, ]

export const Chart = () => {
  return (
    <>
      <LineChart width={700} height={350} data={data}>
        <Line type="monotone" dataKey="Revenue" stroke="#03a9f4" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>
    </>
  )
}

export default Chart;