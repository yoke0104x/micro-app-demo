/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2023-12-29 10:34:50
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import microApp from '@micro-zoe/micro-app';
microApp.start();

// 去掉严格模式
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
