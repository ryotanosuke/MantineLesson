import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useStore } from 'zustand'
import { supabase } from '../utils/supabase'
import DashBoard from '../components/DashBoard'

export default function Home() {
  //sessionが状態の保持をしている
  return (
    <>
      <DashBoard />
    </>
  )
}
