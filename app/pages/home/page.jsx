import React from 'react'
import homestyle from '@/app/styles/homepage.module.css'

export const HomePage = () => {
  return (
    <div>HomePage
        <h1 className={homestyle.title}>
            This is HomePage
        </h1>
        <div className={homestyle.container}>
            <h1>Test 3</h1>
        </div>
    </div>
  )
}
