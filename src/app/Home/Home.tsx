import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { BaseCard } from '@toasttab/buffet-pui-card'
import { ArrowForwardIcon } from '@toasttab/buffet-pui-icons'

export const BASE_URL = '/restaurants/admin/food-waste'

const FOOD_WASTE_DATA = [
  {
    title: 'Information',
    links: [
      {
        title: 'How to track food waste',
        description: 'How to Track and Reduce Food Waste in Your Restaurant',
        link: 'https://pos.toasttab.com/blog/on-the-line/reduce-food-waste',
        isExternal: true
      },
      {
        title: 'Donation resources',
        description: 'List of local food donation resources',
        link: '/food-donation'
      }
    ]
  },
  {
    title: 'Tools',
    links: [
      {
        title: 'Food waste calculator',
        link: '/calculator',
        description: 'Tool to calculate food waste'
      }
    ]
  }
]

const Section = ({ title, children }: any) => {
  return (
    <section className='border-t py-8'>
      <p className='text-heading-3 mb-8'>{title}</p>
      {children}
    </section>
  )
}

const goToPage = (link: any, isExternal: any, navigate: any) => {
  if (!isExternal) {
    navigate(link)
  } else {
    window.open(link, '_blank')
  }
}

const LinkItem = ({ title, description, link, isExternal }: any) => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => goToPage(link, isExternal, navigate)}
      className='text-left'
    >
      <BaseCard className='h-32'>
        <p className='text-color-link font-semibold'>
          {title} {isExternal ? <ArrowForwardIcon /> : null}
        </p>

        <p className='text-color-secondary'>{description}</p>
      </BaseCard>
    </button>
  )
}

export const Home = () => {
  return (
    <div className='max-w-5xl m-auto pt-16'>
      <div className='mb-16'>
        <h1 className='text-heading-2'>Food waste</h1>
      </div>

      {FOOD_WASTE_DATA.map((data) => {
        return (
          <Section title={data.title}>
            <div className='grid grid-cols-3 gap-2'>
              {data.links.map(
                ({ title, description, link, isExternal }: any) => {
                  return (
                    <LinkItem
                      title={title}
                      description={description}
                      link={link}
                      isExternal={isExternal}
                    />
                  )
                }
              )}
            </div>
          </Section>
        )
      })}
    </div>
  )
}
