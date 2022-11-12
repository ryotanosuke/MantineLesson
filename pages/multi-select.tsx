import { useState } from 'react'
import Link from 'next/link'
import { ReplyIcon } from '@heroicons/react/solid'
import {
  Center,
  Container,
  MultiSelect,
  Text,
  RadioGroup,
  Radio,
  TransferList,
  TransferListData,
} from '@mantine/core'
import { Layout } from '../components/Layout'
import { MantineDialog } from '@mantine/core/lib/components/Dialog/Dialog'

const MultiSelectDemo = () => {
  const [radioValue, setRadioValue] = useState('react')
  const [selectValue, setSelectValue] = useState<string[]>([])
  console.log(radioValue)

  return (
    <Layout title="Multi-select">
      <Container>
        <Text>what is your most favorite frontend library</Text>
        <Center>
          <RadioGroup
            my="lg"
            value={radioValue}
            onChange={setRadioValue}
            required
          >
            <Radio value="react" label="React" />
            <Radio value="svelte" label="Svelte" />
            <Radio value="angular" label="Angular" />
            <Radio value="vue" label="Vue" />
          </RadioGroup>
        </Center>
        <Text>what is yourfavorite React framework</Text>
        <MultiSelect
          my="lg"
          value={selectValue}
          onChange={setSelectValue}
          data={['Next.js', 'Reamix', 'Gatsby.js']}
          placeholder="Select items"
          clearable
        ></MultiSelect>
      </Container>
    </Layout>
  )
}

export default MultiSelectDemo
