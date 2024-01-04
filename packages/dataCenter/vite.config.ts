/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2023-12-29 10:35:09
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // }
})
