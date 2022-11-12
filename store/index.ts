import create from 'zustand'
import { Session } from '@supabase/supabase-js'

// 型定義
type State = {
  session: Session | null
  setSession: (payload: Session | null) => void
}
// createを実行（ index.tsで実行 ）
const useStore = create<State>((set) => ({
  session: null,
  // 受け取ったpayloadをSessionに格納する
  setSession: (payload) => set({ session: payload }),
}))
export default useStore
