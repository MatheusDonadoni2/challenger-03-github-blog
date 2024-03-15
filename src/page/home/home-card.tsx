import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HomeCard() {
  return (
    <CardContent className="bg-c-base-post p-[2rem] rounded-[10px] space-y-[1.25rem] h-[298px] box-sizing">
      <CardHeader>
        <CardTitle className="flex justify-between gap-2">
          <span>
            <h1 className="font-bold text-c-base-title text-xl">
              JavaScript data types and data structures
            </h1>
          </span>

          <span className="min-w-[60px] text-right">
            <time className="text-c-base-span text-[0.875rem] w-min[85px]">
              Há 1 dia
            </time>
          </span>
        </CardTitle>
      </CardHeader>
      <CardDescription>
        <p className="text-base text-c-base-text ">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Programming languages all have built-in data structures, but
          these often differ from one language to another. This article attempts
          to list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </CardDescription>
    </CardContent>
  );
}
