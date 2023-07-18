export type CartItem = {
    _id: string
    name: string
    slug: string
    image: string | undefined
    price: number
    countInStock: number
    quantity: number
}

export type ShippingAddress = {
    fullName: string
    address: string
    city: string
    country: string
    postalCode: string
}


export type Cart = {
    itemsPrice: number
    shippingPrice: number
    taxPrice: number
    totalPrice: number
    cartItems: CartItem[]
    shippingAddress: ShippingAddress
    paymentMethod: string
  }