/* eslint-disable react/prop-types */
import { CreditCardWrapper } from "./CreditCard.styles"

const CreditCard = ({cardNumber}) => {
  return (
    <CreditCardWrapper>{cardNumber}</CreditCardWrapper>
  )
}

export default CreditCard