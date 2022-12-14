import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { BaseCard } from '@toasttab/buffet-pui-card'
import { ArrowForwardIcon } from '@toasttab/buffet-pui-icons'
import {
  SecondaryNav,
  SecondaryNavSection,
  SecondaryNavItem
} from '@toasttab/buffet-pui-navigation'

import {
  Page,
  PageHeader,
  PageArea,
  HeadingGroup,
  Title,
  LayoutProvider,
  PageTargetNavLayout
} from '@toasttab/buffet-pui-config-templates'

export const BASE_URL = '/restaurants/admin/food-waste'

const FOOD_WASTE_DATA = [
  {
    title: 'Tools',
    links: [
      {
        title: 'Food waste calculator',
        link: '/calculator',
        description: 'Tool to calculate food waste'
      },
      {
        title: 'Track waste',
        link: '/track-waste',
        description: 'Track your restaurants waste'
      },
      {
        title: 'Donation resources',
        description: 'List of local food donation resources',
        link: '/food-donation'
      }
    ]
  },
  {
    title: 'Articles',
    links: [
      {
        title: 'How to track food waste',
        description: 'How to Track and Reduce Food Waste in Your Restaurant',
        link: 'https://pos.toasttab.com/blog/on-the-line/reduce-food-waste',
        isExternal: true
      }
    ]
  }
]

const Section = ({ title, children }: any) => {
  return (
    <section className='py-8'>
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
    <div className='flex items-start'>
      <div className='flex-1 px-8'>
        {FOOD_WASTE_DATA.map((data) => {
          return (
            <Section title={data.title}>
              <div className='grid grid-cols-3 gap-2'>
                {data.links.map(
                  ({ title, description, link, isExternal }: any) => {
                    return (
                      <LinkItem
                        key={title}
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
    </div>
  )
}
