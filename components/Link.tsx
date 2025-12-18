/* eslint-disable jsx-a11y/anchor-has-content */
'use client'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import { useParams } from 'next/navigation'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const params = useParams()
  const locale = params?.locale as string

  if (isInternalLink) {
    let newHref = href
    if (locale && !href.startsWith(`/${locale}`) && href !== '/') {
      newHref = `/${locale}${href}`
    } else if (locale && href === '/') {
      newHref = `/${locale}`
    }

    return <Link className="break-words" href={newHref} {...rest} />
  }

  if (isAnchorLink) {
    return <a className="break-words" href={href} {...rest} />
  }

  return (
    <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest} />
  )
}

export default CustomLink
