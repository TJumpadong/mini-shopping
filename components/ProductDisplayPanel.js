import Link from 'next/link'

export default ({
  product
}) => (
  <div>
    <Link>
      <img src={ product.image } className="product-image"/>
    </Link>
    <style jsx>{`
      .product-image {
        width: 100%;
      }
    `}</style>
  </div>
)
