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
  }, [setHeaderTheme])

  return (
    <section
      className="relative -mt-[10.4rem] text-white"
      data-theme="dark"
    >
      {/* Optional background media */}
      {media && typeof media === 'object' && (
        <div className="absolute inset-0 -z-10">
          <Media fill priority resource={media} />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      <div className="container relative z-10 min-h-[80vh] py-20 flex items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* LEFT: transparent app screenshot */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/app.png"
              alt="Syde app screenshot"
              className="w-[260px] sm:w-[320px] lg:w-[380px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* RIGHT: text + CTAs */}
          <div className="md:text-center lg:text-left">
            {richText && (
              <RichText
                className="mb-6 max-w-xl"
                data={richText}
                enableGutter={false}
              />
            )}

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
}
