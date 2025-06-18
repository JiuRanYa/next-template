'use client'

import { useLocale } from 'next-intl'
import { useRouter } from '@/core/i18n/navigation'

export function LanguageSwitch() {
  const router = useRouter()

  return <div onClick={() => router.replace('/', {locale: 'zh'})}>中文</div>
}