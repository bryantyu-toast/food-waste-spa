import { gql } from '@apollo/client'

export const GET_NET_SALES_GUEST_COUNT = gql`
  query getNetSalesGuestCount(
    $restaurantGuid: ID!
    $currentDate: CurrentDate!
    $comparisonDate: ComparisonDate!
    $restaurantId: ID!
  ) {
    netSales(
      restaurantGuid: $restaurantGuid
      restaurantId: $restaurantId
      currentDate: $currentDate
      comparisonDate: $comparisonDate
    ) {
      data {
        day
        previousPeriod
        currentPeriod
        variation {
          value
          analysis
        }
        isHighlighted
        link
      }
    }
    guestCount(
      restaurantGuid: $restaurantGuid
      restaurantId: $restaurantId
      currentDate: $currentDate
      comparisonDate: $comparisonDate
    ) {
      data {
        day
        previousPeriod
        currentPeriod
        variation {
          value
          analysis
        }
        isHighlighted
        link
      }
    }
  }
`
