import * as React from 'react'
import { useState, useEffect } from 'react'

import { Select } from '@toasttab/buffet-pui-dropdowns'
import { NumberInput } from '@toasttab/buffet-pui-text-input'
import { getCategories, getIngredients, getYield } from '../../../data/DATA'
import { BaseCard } from '@toasttab/buffet-pui-card'
import { Size } from '@toasttab/buffet-pui-text-base'

const Row = ({ children }: any) => {
  return <div className='mb-4'>{children}</div>
}

export const Calculator = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [ingredients, setIngredients] = useState<string[]>([])
  const [selectedIngredient, setSelectedIngredient] = useState<string[]>([])
  const [ingredientYield, setIngredientYield] = useState<any>({})

  const [unprocessedStartWeight, setUnprocessedStartWeight] =
    useState<number>(40)
  const [preprocessedStartWeight, setPreprocessedStartWeight] =
    useState<number>(40)

  const [unprocessedCasePrice, setUnprocessedCasePrice] = useState<number>(20.0)
  const [preprocessedCasePrice, setPreprocessedCasePrice] =
    useState<number>(20.0)

  const [hourlyLaborCost, setHourlyLaborCost] = useState<number>(10.0)

  useEffect(() => {
    const CATEGORIES = getCategories()
    setCategories(CATEGORIES)
    setSelectedCategory(CATEGORIES[0])
  }, [])

  useEffect(() => {
    const INGREDIENTS = getIngredients(selectedCategory)
    setIngredients(INGREDIENTS)
    setSelectedIngredient(INGREDIENTS[0])
  }, [selectedCategory])

  useEffect(() => {
    const YIELD = getYield(selectedIngredient)
    setIngredientYield(YIELD)
  }, [selectedIngredient])

  return (
    <div className='max-w-5xl m-auto pt-16'>
      <p className='text-heading-1 mb-16'>Food waste calculator</p>
      <div className='flex items-start'>
        <BaseCard className='flex-1'>
          <Row>
            <div className='flex items-center'>
              <p className='font-semibold w-52'>Category</p>
              <div className='w-full'>
                <Select
                  value={selectedCategory}
                  options={categories}
                  onChange={setSelectedCategory}
                />
              </div>
            </div>
          </Row>
          <Row>
            <div className='flex items-center'>
              <p className='font-semibold w-52'>Item</p>
              <div className='w-full'>
                <Select
                  value={selectedIngredient}
                  options={ingredients}
                  onChange={setSelectedIngredient}
                />
              </div>
            </div>
          </Row>
          <Row>
            <div className='flex items-center'>
              <p className='font-semibold w-52'>Processing detail</p>
              <p>{ingredientYield['Processing Detail']}</p>
            </div>
          </Row>
          <Row>
            <div className='flex items-center'>
              <p className='font-semibold w-52'>Start Weight of case (lbs)</p>
              <div className='flex-1 flex items-center'>
                <div className='flex-1 mr-4'>
                  <NumberInput
                    label='Unprocessed'
                    prefix='lbs'
                    value={unprocessedStartWeight}
                    onChange={(e) => setUnprocessedStartWeight(Number(e.value))}
                    size={Size.sm}
                  />
                </div>
                <div className='flex-1'>
                  <NumberInput
                    label='Pre-processed'
                    prefix='lbs'
                    value={preprocessedStartWeight}
                    onChange={(e) =>
                      setPreprocessedStartWeight(Number(e.value))
                    }
                  />
                </div>
              </div>
            </div>
          </Row>

          <Row>
            <div className='flex items-center'>
              <p className='font-semibold w-52'>Case Price</p>
              <div className='flex-1 flex items-center'>
                <div className='flex-1 mr-4'>
                  <NumberInput
                    label='Unprocessed'
                    prefix='$'
                    value={unprocessedCasePrice}
                    onChange={(e) => setUnprocessedCasePrice(Number(e.value))}
                  />
                </div>
                <div className='flex-1'>
                  <NumberInput
                    label='Pre-processed'
                    prefix='$'
                    value={preprocessedCasePrice}
                    onChange={(e) => setPreprocessedCasePrice(Number(e.value))}
                  />
                </div>
              </div>
            </div>
          </Row>

          <Row>
            <div className='flex items-center'>
              <p className='font-semibold w-52'>Hourly Labor Costs</p>
              <div className='flex-1 flex items-center'>
                <div className='flex-1'>
                  <NumberInput
                    suffix='per hour'
                    value={hourlyLaborCost}
                    onChange={(e) => setHourlyLaborCost(Number(e.value))}
                  />
                </div>
              </div>
            </div>
          </Row>

          <div className='border-t py-4 mt-4'>
            <p className='text-heading-4'>Read only</p>

            <Row>
              <div className='flex items-center'>
                <p className='font-semibold w-52'>Percent Yield (US Foods)*</p>
                <div className='flex-1 flex items-center'>
                  <div className='flex-1 mr-4'>
                    <NumberInput
                      label='Unprocessed'
                      prefix='%'
                      value={ingredientYield['Yield Percentage']}
                      readOnly
                    />
                  </div>
                  <div className='flex-1'>
                    <NumberInput
                      label='Pre-processed'
                      prefix='%'
                      value={100}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </Row>

            <Row>
              <div className='flex items-center'>
                <p className='font-semibold w-52'>Yield Weight</p>
                <div className='flex-1 flex items-center'>
                  <div className='flex-1 mr-4'>
                    <NumberInput
                      label='Unprocessed'
                      prefix='lbs'
                      value={
                        unprocessedStartWeight *
                        ((ingredientYield['Yield Percentage']
                          ? ingredientYield['Yield Percentage'].slice(0, -1)
                          : 0) /
                          100)
                      }
                      readOnly
                    />
                  </div>
                  <div className='flex-1'>
                    <NumberInput
                      label='Pre-processed'
                      prefix='lbs'
                      value={preprocessedStartWeight * 1}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </Row>

            <Row>
              <div className='flex items-center'>
                <p className='font-semibold w-52'>Plus Labor</p>
                <div className='flex-1 flex items-center'>
                  <div className='flex-1 mr-4'>
                    <NumberInput
                      label='Unprocessed'
                      prefix='$'
                      value={hourlyLaborCost}
                      readOnly
                    />
                  </div>
                  <div className='flex-1'>
                    <NumberInput
                      label='Pre-processed'
                      prefix='$'
                      value={0.0}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </Row>

            <Row>
              <div className='flex items-center'>
                <p className='font-semibold w-52'>Total Price</p>
                <div className='flex-1 flex items-center'>
                  <div className='flex-1 mr-4'>
                    <NumberInput
                      label='Unprocessed'
                      prefix='$'
                      value={unprocessedCasePrice + hourlyLaborCost}
                      readOnly
                    />
                  </div>
                  <div className='flex-1'>
                    <NumberInput
                      label='Pre-processed'
                      prefix='$'
                      value={preprocessedCasePrice}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </Row>

            <Row>
              <div className='flex items-center'>
                <p className='font-semibold w-52'>Usuable Price / Pound</p>
                <div className='flex-1 flex items-center'>
                  <div className='flex-1 mr-4'>
                    <NumberInput
                      label='Unprocessed'
                      prefix='$'
                      value={(
                        (unprocessedCasePrice + hourlyLaborCost) /
                        (unprocessedStartWeight *
                          ((ingredientYield['Yield Percentage']
                            ? ingredientYield['Yield Percentage'].slice(0, -1)
                            : 0) /
                            100))
                      ).toFixed(2)}
                      readOnly
                    />
                  </div>
                  <div className='flex-1'>
                    <NumberInput
                      label='Pre-processed'
                      prefix='$'
                      value={
                        preprocessedCasePrice / (preprocessedStartWeight * 1)
                      }
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </BaseCard>

        <div className='w-1/2 px-8 py-4'>
          <p className='text-heading-3 mb-8'>Secondary Uses</p>
          <Row>
            <div>
              <p className='font-semibold mr-4 mb-1'>How much is edible?</p>
              <p className='flex-1'>{ingredientYield['Description']}</p>
            </div>
          </Row>

          <Row>
            <div>
              <p className='font-semibold mr-4 mb-1'>Reduction Tip #1</p>
              <p className='flex-1'>{ingredientYield['Reduction Tip #1']}</p>
            </div>
          </Row>

          <Row>
            <div>
              <p className='font-semibold mr-4 mb-1'>Reduction Tip #2</p>
              <p className='flex-1'>{ingredientYield['Reduction Tip #2']}</p>
            </div>
          </Row>

          <Row>
            <div>
              <p className='font-semibold mr-4 mb-1'>Reduction Tip #3</p>
              <p className='flex-1'>{ingredientYield['Reduction Tip #3']}</p>
            </div>
          </Row>

          <Row>
            <div>
              <p className='font-semibold mr-4 mb-1'>Sample Dish</p>
              <p className='flex-1'>{ingredientYield['Sample Dish']}</p>
            </div>
          </Row>

          <Row>
            <div>
              <p className='font-semibold mr-4 mb-1'>Source</p>
              <p className='flex-1'>
                <a
                  className='text-color-link'
                  href={ingredientYield['Yield % Source']}
                  target='_blank'
                  rel='noreferrer'
                >
                  {ingredientYield['Yield % Source']}
                </a>
              </p>
            </div>
          </Row>

          <Row>
            <div>
              <p className='font-semibold mr-4 mb-1'>
                What is my waste savings?
              </p>
              <p>
                {(
                  (1 -
                    (ingredientYield['Yield Percentage']
                      ? ingredientYield['Yield Percentage'].slice(0, -1)
                      : 0) /
                      100) *
                  unprocessedStartWeight
                ).toFixed(2)}
              </p>
            </div>
          </Row>
        </div>
      </div>
    </div>
  )
}
