import React, { Component } from 'react';
import { GrMoney } from 'react-icons/gr';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FcSalesPerformance } from 'react-icons/fc';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

function Home(){


  const data = [
    {
      name: 'January',
      uv: 4000,
      amt: 2400,
    },
    {
      name: 'February',
      uv: 3000,
      amt: 2210,
    },
    {
      name: 'April',
      uv: 2780,
     
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      
      amt: 2181,
    },
    {
      name: 'June',
      uv: 990,
      
      amt: 2100,
    },
    {
      name: 'July',
      uv: 90,
      
      amt: 2100,
    },
    {
      name: 'August',
      uv: 1190,
      
      amt: 2100,
    },
    {
      name: 'September',
      uv: 890,
      
      amt: 2100,
    },
    {
      name: 'October',
      uv: 1090,
      
      amt: 2100,
    },
    {
      name: 'November',
      uv: 1490,
      
      amt: 2100,
    },
    {
      name: 'December',
      uv: 3222,
      
      amt: 2100,
    },
     
    // Rest of your data...
  ];


  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Hello Akash here...</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Earning</h3>
                    <AiOutlineDollarCircle className='card_icon'/>
                </div>
                <h1>$192K</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                <h3>Orders</h3>
                    <LuFileSpreadsheet className='card_icon'/>
                </div>
                
                <div> <h4>$2.4k</h4></div>
               
               <div> <h5>2% this month</h5></div>
                <h1></h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Balance</h3>
                    <GrMoney className='card_icon'/>
                </div>
                <h4>$2.4k</h4>
                <h5>2% this month</h5>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Scores</h3>
                    <FcSalesPerformance className='card_icon'/>
                </div>
                <h1>$89k</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
          
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            
        </div>
    
          </main>
   
  )
          }


export default Home