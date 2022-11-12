import { ExclamationIcon } from '@heroicons/react/solid'
import { Loader, Text, Alert, Center } from '@mantine/core'
import { useQueryTodos } from '../hooks/useQueryTodos'

export const FetchTodos = () => {
  const { data, status } = useQueryTodos()
  console.log(data)

  if (status === 'loading')
    return (
      <Center>
        <Loader color="indigo" size="xl" />
      </Center>
    )
  if (status === 'error')
    return (
      <Center>
        <Alert
          icon={<ExclamationIcon />}
          title="Fetch Error!"
          color="red"
          radius="md"
        >
          Something wrong happend !
        </Alert>
      </Center>
    )
  return (
    <div className="text-center">
      <Text weight="bold">Task List</Text>
      {data?.map((todo) => (
        <Text my="xs" size="sm" key={todo.id}>
          {todo.title}
        </Text>
      ))}
    </div>
  )
}
