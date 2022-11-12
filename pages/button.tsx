import { Button, Group } from '@mantine/core'
import { Layout } from '../components/Layout'
import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react'
import { ReplyIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const ButtonDemo = () => {
  //tabler-icons そのままアイコン名のコンポーネントを指定すればいい
  //classNamesにはSがついているので注意
  return (
    <Layout title="Button">
      <Group direction="column" position="center">
        <Button
          classNames={{
            leftIcon: 'h-6 w-6 text-pink-500',
            rightIcon: 'h-6 w-6 text-orange-500',
          }}
          color="cyan"
          radius="lg"
          uppercase
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Press
        </Button>
        <Button mt={16}>Click</Button>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  )
}

export default ButtonDemo
