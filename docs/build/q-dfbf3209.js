const r=(t,e,n)=>({variables:{checkoutId:t,lineItems:[{variantId:e,quantity:n}]},query:`
  ${a}
  mutation ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout {
        ...CheckoutFragment
      }
    }
  }    
`}),c=(t,e)=>({variables:{checkoutId:t,lineItemIds:e},query:`
  ${a}
  mutation ($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
`}),i=`
  fragment VariantFragment on ProductVariant {
    id
    title
    price {
      amount
      currencyCode
    }
    available: availableForSale
    image {
      url
      altText
    }
  }
`,o=`
  ${i}
  fragment VariantWithProductFragment on ProductVariant {
    ...VariantFragment
  }
`,a=`
  ${o}
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalPrice {
      amount
      currencyCode
    }
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          quantity
          variant {
            ...VariantWithProductFragment
          }
        }
      }
    }
  }
`;export{r as m,c as r};
