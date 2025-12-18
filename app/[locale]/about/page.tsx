import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { getDictionary } from '@/lib/i18n'
import { Metadata } from 'next'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await props.params
  const dictionary = getDictionary(locale)
  return genPageMetadata({ title: dictionary.about.title })
}

export default async function Page(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params
  const dictionary = getDictionary(locale)
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent} title={dictionary.about.title}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
