import * as React from 'react'
import { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'

import {
  Table,
  Head,
  Body,
  Row,
  HeadingCell,
  Cell
} from '@toasttab/buffet-pui-table'
import { NumberInput } from '@toasttab/buffet-pui-text-input'
import { Button } from '@toasttab/buffet-pui-buttons'
import { PageLayout } from '@toasttab/buffet-pui-config-templates'
import { CardContainer } from '@toasttab/buffet-pui-card'
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from '@toasttab/buffet-pui-modal'
import { CheckboxGroup } from '@toasttab/buffet-pui-checkbox'

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useTabsContext
} from '@toasttab/buffet-pui-tabs'
import { PRODUCTION_SHEET_DATA } from './data'
import { PrintIcon } from '@toasttab/buffet-pui-icons'

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * (60 - 10 + 1) + 10)
}

export const ProductionSheet = ({ history }: any) => {
  const [isModalSaveOpen, setModalSaveOpen] = useState(false)
  const [items, setItems] = useState(PRODUCTION_SHEET_DATA[0].items)
  let navigate = useNavigate()

  const columns = useMemo(() => {
    return [
      {
        Header: 'Name',
        accessor: 'value',
        id: 'data-table-name'
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
        id: 'data-table-funds-distributed',
        Cell: () => {
          return <NumberInput value={generateRandomNumber()} />
        }
      },
      {
        Header: 'Waste',
        accessor: 'waste',
        id: 'data-table-waste'
      }
    ]
  }, [])

  const data = useMemo(() => {
    return items
  }, [items])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
      initialState: {},
      disableSortRemove: true
    })

  return (
    <>
      <PageLayout>
        <div className='mt-20'>
          <h1 className='text-heading-1 mb-20'>Production sheet</h1>
          <Tabs
            onChange={(e) => {
              setItems(PRODUCTION_SHEET_DATA[e].items)
            }}
          >
            <TabList className='mx-4 md:mx-0' block>
              {PRODUCTION_SHEET_DATA.map((data) => {
                return <Tab>{data.name}</Tab>
              })}
            </TabList>
            <div className='flex flex-row-reverse'>
              <Button variant='link' iconLeft={<PrintIcon />}>
                Print all
              </Button>
            </div>
            <TabPanels className='p-4 type-default md:p-6 md:px-0'>
              <TabPanel>
                <CardContainer>
                  <div className='flex flex-row-reverse'>
                    <Button variant='link' iconLeft={<PrintIcon />}>
                      Print
                    </Button>

                    {/* <Button variant='primary'>Print</Button> */}
                    {/* <Button onClick={() => setModalSaveOpen(true)}>Save</Button> */}
                  </div>
                  <Table
                    className='mb-16 w-full'
                    {...getTableProps()}
                    data-testid='campaigns-table'
                  >
                    <Head>
                      {headerGroups.map((headerGroup: any) => (
                        <Row {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column: any) => {
                            const headerProps = column.getHeaderProps({
                              className: column.className
                            })
                            return (
                              <HeadingCell
                                {...headerProps}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  // @ts-ignore
                                  e.key === 'Enter' && headerProps.onClick(e)
                                }}
                              >
                                {column.render('Header')}
                              </HeadingCell>
                            )
                          })}
                        </Row>
                      ))}
                    </Head>

                    <Body {...getTableBodyProps()}>
                      {rows.map((row: any) => {
                        prepareRow(row)
                        return (
                          <Row {...row.getRowProps()}>
                            {row.cells.map((cell: any) => {
                              return (
                                <Cell
                                  className='align-middle'
                                  {...cell.getCellProps({
                                    className: cell.column.className
                                  })}
                                >
                                  {cell.render('Cell')}
                                </Cell>
                              )
                            })}
                          </Row>
                        )
                      })}
                    </Body>
                  </Table>
                </CardContainer>
              </TabPanel>
              <TabPanel>
                {' '}
                <CardContainer>
                  <div className='flex flex-row-reverse'>
                    <Button variant='link' iconLeft={<PrintIcon />}>
                      Print
                    </Button>
                  </div>
                  <Table
                    className='mb-16 w-full'
                    {...getTableProps()}
                    data-testid='campaigns-table'
                  >
                    <Head>
                      {headerGroups.map((headerGroup: any) => (
                        <Row {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column: any) => {
                            const headerProps = column.getHeaderProps({
                              className: column.className
                            })
                            return (
                              <HeadingCell
                                {...headerProps}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  // @ts-ignore
                                  e.key === 'Enter' && headerProps.onClick(e)
                                }}
                              >
                                {column.render('Header')}
                              </HeadingCell>
                            )
                          })}
                        </Row>
                      ))}
                    </Head>

                    <Body {...getTableBodyProps()}>
                      {rows.map((row: any) => {
                        prepareRow(row)
                        return (
                          <Row {...row.getRowProps()}>
                            {row.cells.map((cell: any) => {
                              return (
                                <Cell
                                  className='align-middle'
                                  {...cell.getCellProps({
                                    className: cell.column.className
                                  })}
                                >
                                  {cell.render('Cell')}
                                </Cell>
                              )
                            })}
                          </Row>
                        )
                      })}
                    </Body>
                  </Table>
                </CardContainer>
              </TabPanel>
              <TabPanel>
                {' '}
                <CardContainer>
                  <div className='flex flex-row-reverse'>
                    <Button variant='link' iconLeft={<PrintIcon />}>
                      Print
                    </Button>
                  </div>
                  <Table
                    className='mb-16 w-full'
                    {...getTableProps()}
                    data-testid='campaigns-table'
                  >
                    <Head>
                      {headerGroups.map((headerGroup: any) => (
                        <Row {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column: any) => {
                            const headerProps = column.getHeaderProps({
                              className: column.className
                            })
                            return (
                              <HeadingCell
                                {...headerProps}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  // @ts-ignore
                                  e.key === 'Enter' && headerProps.onClick(e)
                                }}
                              >
                                {column.render('Header')}
                              </HeadingCell>
                            )
                          })}
                        </Row>
                      ))}
                    </Head>

                    <Body {...getTableBodyProps()}>
                      {rows.map((row: any) => {
                        prepareRow(row)
                        return (
                          <Row {...row.getRowProps()}>
                            {row.cells.map((cell: any) => {
                              return (
                                <Cell
                                  className='align-middle'
                                  {...cell.getCellProps({
                                    className: cell.column.className
                                  })}
                                >
                                  {cell.render('Cell')}
                                </Cell>
                              )
                            })}
                          </Row>
                        )
                      })}
                    </Body>
                  </Table>
                </CardContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </PageLayout>
      {isModalSaveOpen && (
        <Modal isOpen>
          <ModalHeader>Save options</ModalHeader>
          <ModalBody>
            <div className='flex items-start'>
              <div className='mr-12'>
                <CheckboxGroup
                  label='Set week/month/year'
                  onChange={() => {}}
                  options={[
                    {
                      label: 'Everyday',
                      value: 'Everyday',
                      checked: true
                    },
                    {
                      label: 'This month',
                      value: 'This month'
                    },
                    {
                      label: 'This week',
                      value: 'This week'
                    }
                  ]}
                />
              </div>
              <CheckboxGroup
                label='Set days'
                onChange={() => {}}
                options={[
                  {
                    label: 'Monday',
                    value: 'Monday'
                  },
                  {
                    label: 'Tuesday',
                    value: 'Tuesday'
                  },
                  {
                    label: 'Wednesday',
                    value: 'Wednesday'
                  },
                  {
                    label: 'Thursday',
                    value: 'Thursday'
                  },
                  {
                    label: 'Friday',
                    value: 'Friday'
                  },
                  {
                    label: 'Saturday',
                    value: 'Saturday'
                  },
                  {
                    label: 'Sunday',
                    value: 'Sunday'
                  }
                ]}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                navigate('/waste-report')
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  )
}
