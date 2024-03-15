import { Input } from "@/components/ui/input";

export function HomeSearchForm() {
  return (
    <div className="mt-[4.5rem] space-y-[0.75rem]">
      <section className="flex items-end justify-between">
        <h1 className="text-lg text-c-base-title font-bold">Publicações</h1>
        <p className="text-sm tracking-tighter text-c-base-span font-bold">
          6 publicações
        </p>
      </section>
      <Input
        placeholder="Buscar conteúdo"
        className="text-base py-[0.75rem] px-[1rem] text-c-base-red placeholder:text-c-base-label focus:border-c-blue focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 "
      />
    </div>
  );
}
