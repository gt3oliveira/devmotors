import { redirect } from "next/navigation"

export async function getDataHome() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/661ffa558eeb799dd185f3ce?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`)

    if (!res.ok) {
      throw new Error("Falha no fecth dos dados")
    }

    return res.json()
  } catch (error) {
    throw new Error("Falha no fecth dos dados")
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`
      , { next: { revalidate: 120 } })

    if (!res.ok) {
      throw new Error("Falha no fetch dos dados")
    }

    return res.json()
  } catch (error) {
    throw new Error("Falha no fetch dos dados")
  }
}

export async function getItemBySlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug
    }),
    props: 'slug,title,content,metadata',
    read_key: process.env.READ_KEY as string
  })

  const url = `${baseUrl}?${queryParams.toString()}`
  // console.log(url)  

  try {
    const res = await fetch(url, { next: { revalidate: 120 } })

    if (!res.ok) {
      throw new Error("Falha no fetch dos dados")
    }

    return res.json()

  } catch (error) {
    redirect("/")
  }
}
