'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/core/i18n/navigation'

export function LanguageSwitch() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const toggleLanguage = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh'
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div 
      onClick={toggleLanguage}
      className="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {locale === 'zh' ? 'English' : '中文'}
    </div>
  )
}