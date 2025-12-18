import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/i18n'

const POSTS_PER_PAGE = 5

export default async function Page(props: { params: Promise<{ locale: string; page: string }> }) {
  const { locale, page } = await props.params
  const dictionary = getDictionary(locale)
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = parseInt(page as string)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={dictionary.blog.allPostsTitle}
    />
  )
}
