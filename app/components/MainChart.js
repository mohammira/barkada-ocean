'use client'
import React, { useEffect } from 'react'
import data from '../data/data.json'
import { ResponsiveBar } from '@nivo/bar'

export default function MainChart({ category }) {
    const results = data
    useEffect(() => {
        console.log(typeof results)
    })
    return (
        <div className='h-screen w-screen bg-base-100'>
            
        </div>
    )
}
