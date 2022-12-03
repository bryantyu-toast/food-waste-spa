import * as React from 'react'
import { useMemo } from 'react'
import { useTable } from 'react-table'

import {
  Table,
  Head,
  Body,
  Row,
  HeadingCell,
  Cell
} from '@toasttab/buffet-pui-table'
import { CardContainer } from '@toasttab/buffet-pui-card'
import { PageLayout } from '@toasttab/buffet-pui-config-templates'
import { generateRandomNumber } from '../ProductionSheet/ProductionSheet'
import { NumberInput } from '@toasttab/buffet-pui-text-input'

export const WasteReport = ({ items }: any) => {
  const columns = useMemo(() => {
    return [
      {
        Header: 'id',
        accessor: 'id',
        id: 'data-table-id'
      },
      {
        Header: 'Name',
        accessor: 'name',
        id: 'data-table-name'
      },
      {
        Header: 'Quantity produced',
        accessor: 'quantity',
        id: 'data-table-quantity'
      },
      {
        Header: 'Sold',
        accessor: 'sold',
        id: 'data-table-sold',
        Cell: ({ cell }: any) => {
          return cell.row.original.quantity > cell.value ? (
            <p className='text-color-warning'>{cell.value}</p>
          ) : (
            <p className='text-color-success'>{cell.value}</p>
          )
        }
      },
      {
        Header: 'Wasted',
        id: 'data-table-diff',
        Cell: ({ cell }: any) => {
          return cell.row.original.quantity > cell.row.original.sold
            ? cell.row.original.quantity - cell.row.original.sold
            : 0
        }
      }
    ]
  }, [])

  const data = React.useMemo(() => {
    return items.map((item: any) => {
      item.quantity = generateRandomNumber()
      item.sold = generateRandomNumber()
      return item
    })
  }, [items])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
      initialState: {},
      disableSortRemove: true
    })
  return (
    <PageLayout>
      <div className='mt-20'>
        <h1 className='text-heading-1 mb-20'>Daily report</h1>
        <CardContainer>
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
      </div>
    </PageLayout>
  )
}
