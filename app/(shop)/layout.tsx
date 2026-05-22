import { CartProvider } from '@/src/components/GiftComponents/CartContext'

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}