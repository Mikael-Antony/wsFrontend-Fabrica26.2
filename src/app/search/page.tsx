import SearchHeroesGrid from "@/components/apiUtilitaries/searchHeroesGrid";
import { Suspense } from "react";

/* pagina de busca */
export default function search() {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchHeroesGrid />
      </Suspense>
    </section>
  )
}