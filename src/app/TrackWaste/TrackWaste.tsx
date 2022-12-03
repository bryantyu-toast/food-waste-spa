import * as React from 'react'
import { useEffect, useMemo } from 'react'

import { useTable } from 'react-table'
import {
  Table,
  Head,
  Body,
  Row,
  HeadingCell,
  Cell
} from '@toasttab/buffet-pui-table'
import { Page } from '@toasttab/buffet-pui-config-templates'
import { NumberInput } from '@toasttab/buffet-pui-text-input'

import {
  RenderItemProps,
  Select,
  SelectItemContainer
} from '@toasttab/buffet-pui-dropdowns'
import { Button } from '@toasttab/buffet-pui-buttons'

const TodayTable = () => {
  const data = useMemo(() => {
    return [
      { name: 'Pastry 1', quantity: '4' },
      { name: 'Pastry 2', quantity: '2' },
      { name: 'Pastry 3', quantity: '3' },
      { name: 'Pastry 4', quantity: '4' },
      { name: 'Pastry 5', quantity: '5' },
      { name: 'Pastry 6', quantity: '6' },
      { name: 'Pastry 7', quantity: '7' },
      { name: 'Pastry 8', quantity: '8' },
      { name: 'Pastry 9', quantity: '9' }
    ]
  }, [])

  const columns = useMemo(() => {
    return [
      {
        Header: 'Name',
        accessor: 'name',
        id: 'data-table-name'
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
        id: 'data-table-funds-distributed'
      }
    ]
  }, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
      initialState: {},
      disableSortRemove: true
    })

  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='font-semibold text-lg'>Today</p>
        <Button variant='link'>Report</Button>
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
    </div>
  )
}

const ReportTable = () => {
  const data = useMemo(() => {
    return [
      { date: 'November 14th, 2022', numberOfItems: '24', report: '' },
      { date: 'November 13th, 2022', numberOfItems: '22', report: '' },
      { date: 'November 12th, 2022', numberOfItems: '23', report: '' },
      { date: 'November 11th, 2022', numberOfItems: '24', report: '' },
      { date: 'November 10th, 2022', numberOfItems: '25', report: '' },
      { date: 'November 9th, 2022', numberOfItems: '26', report: '' },
      { date: 'November 8th, 2022', numberOfItems: '27', report: '' },
      { date: 'November 7th, 2022', numberOfItems: '28', report: '' },
      { date: 'November 6th, 2022', numberOfItems: '29', report: '' }
    ]
  }, [])

  const columns = useMemo(() => {
    return [
      {
        Header: 'Date',
        accessor: 'date',
        id: 'data-table-date'
      },
      {
        Header: 'Number of items',
        accessor: 'numberOfItems',
        id: 'data-table-number-of-items'
      },
      {
        Header: 'Report',
        accessor: 'report',
        id: 'data-table-report',
        Cell: () => {
          return (
            <a href='' className='text-color-link'>
              Report
            </a>
          )
        }
      }
    ]
  }, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
      initialState: {},
      disableSortRemove: true
    })

  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='font-semibold text-lg'>Previous dates</p>
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
    </div>
  )
}

export const TrackWaste = () => {
  useEffect(() => {
    // getmenuitems
  }, [])

  return (
    <div className='w-full'>
      <div className='flex items-end mb-16'>
        <p className='mr-4 text-lg pb-3'>Add Item:</p>
        <div className='mr-4'>
          <Select
            testId='search'
            enableSearch
            placeholder='Search for your item'
            label='Search for your item'
            onChange={(e) => {}}
            value={''}
            options={[
              { label: 'Pastry 1', value: 'pastry 1' },
              { label: 'Pastry 2', value: 'pastry 2' },
              { label: 'Pastry 3', value: 'pastry 3' },
              { label: 'Pastry 4', value: 'pastry 4' },
              { label: 'Pastry 5', value: 'pastry 5' },
              { label: 'Pastry 6', value: 'pastry 6' },
              { label: 'Pastry 7', value: 'pastry 7' }
            ]}
          />
        </div>
        <div className='mr-4'>
          <Select
            testId='reason'
            label='Reason'
            onChange={(e) => {}}
            value={''}
            options={[
              { label: 'Reason 1', value: 'Reason 1' },
              { label: 'Reason 2', value: 'Reason 2' },
              { label: 'Reason 3', value: 'Reason 3' },
              { label: 'Reason 4', value: 'Reason 4' },
              { label: 'Reason 5', value: 'Reason 5' },
              { label: 'Reason 6', value: 'Reason 6' },
              { label: 'Reason 7', value: 'Reason 7' }
            ]}
          />
        </div>
        <div className='mr-4'>
          <NumberInput label='Quantity' placeholder='0' />
        </div>
        <Button>Add</Button>
      </div>

      <TodayTable />

      <ReportTable />
    </div>
  )
}
