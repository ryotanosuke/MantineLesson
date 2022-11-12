import { useQuery } from 'react-query'
import { supabase } from '../utils/supabase'
import { delay } from '../utils/delay'
import { Todo } from '../types'

export const useQueryTodos = () => {
  const getTodos = async () => {
    // detaのフェッチ
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('created_at', { ascending: true })
    await delay(2000)
    if (error) {
      throw new Error(error.message)
    }
    console.log(data)

    return data
  }
  // Todo[]は引数や戻り値好きなところで配置できる
  // queryFnはgetTodosの型として定義
  // useQueryはデータをキャッシュとして保存する
  // getTodosを実行
  return useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: getTodos,
  })
}
