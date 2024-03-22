import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import z from 'zod'

import { Input } from '@/components/ui/input'

const schema = z.object({
  issue: z.string().nullable(),
})

type SchemaProps = z.infer<typeof schema>

interface HomeSearchFormProps {
  countIssues?: number
}

export function HomeSearchForm({ countIssues }: HomeSearchFormProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const issue = searchParams.get('issue')
  useForm<SchemaProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      issue,
    },
  })

  function handleFilter(issue?: string) {
    try {
      setSearchParams((state) => {
        if (issue) {
          state.set('issue', issue)
        } else {
          state.delete('issue')
        }
        return state
      })
    } catch (error) {}
  }

  return (
    <div className="mt-[4.5rem] space-y-[0.75rem]">
      <section className="flex items-end justify-between">
        <h1 className="text-lg font-bold text-c-base-title">Publicações</h1>
        <p className="text-sm font-bold tracking-tighter text-c-base-span">
          {countIssues || 0} publicações
        </p>
      </section>
      <Input
        onChange={(data) => handleFilter(data.target.value)}
        placeholder="Buscar conteúdo"
        className="text-c-base-red px-[1rem] py-[0.75rem] text-base placeholder:text-c-base-label focus:border-c-blue focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 "
      />
    </div>
  )
}
