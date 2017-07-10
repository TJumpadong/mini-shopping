import Link from 'next/link'

export default ({
  product
}) => (
  <div>
    <Link href={{ pathname: 'product', query: { id: product._id }}}>
      <a><img src={ product.image } className="product-image"/></a>
    </Link>
    <style jsx>{`
      .product-image {
        width: 100%;
      }
    `}</style>
  </div>
)
