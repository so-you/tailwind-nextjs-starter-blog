'use client'

import { usePathname, useRouter, useParams } from 'next/navigation'

const locales = ['en', 'zh']

export default function LangSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const currentLocale = params.locale as string

  const handleLocaleChange = (newLocale: string) => {
    if (!pathname) return
    const segments = pathname.split('/')
    if (segments.length > 1) {
      segments[1] = newLocale
      const newPath = segments.join('/')
      router.push(newPath)
    }
  }

  return (
    <div className="relative mr-5 inline-block text-left">
      <select
        value={currentLocale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 pr-10 pl-3 text-gray-900 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale === 'en' ? 'EN' : '中文'}
          </option>
        ))}
      </select>
    </div>
  )
}
