'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

return (
  <section className="relative -mt-[10.4rem] text-white" data-theme="dark">
    {/* Background media (optional) */}
    <div className="absolute inset-0 -z-10">
      {media && typeof media === 'object' && (
        <Media fill imgClassName="object-cover" priority resource={media} />
      )}
      {/* subtle dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/25" />
    </div>

    <div className="container relative z-10 min-h-[80vh] py-20 flex items-center">
      <div className="grid w-full items-center gap-12 lg:grid-cols-2">
        {/* LEFT: App screenshot */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-[260px] sm:w-[320px] lg:w-[360px]">
            <div className="rounded-[2.6rem] border border-white/15 bg-black/20 p-3 shadow-2xl backdrop-blur">
              <img
                src="/app.png"
                alt="Syde app screenshot"
                className="w-full rounded-[2.1rem]"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Text + buttons */}
        <div className="md:text-center lg:text-left">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-wrap gap-4 md:justify-center lg:justify-start">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  </section>
)
  
