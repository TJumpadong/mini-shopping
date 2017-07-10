import Link from 'next/link'

export default ({ children }) => (
  <div>
    <header>
      <div className="container">
        <Link href="/">
          <a className="logo-link">
            <label className="logo">MINI SHOPPING</label>
          </a>
        </Link>
      </div>
    </header>
    <div className="templ-content-box">
      { children }
    </div>
    <footer>
      <label>About Us</label>
    </footer>
    <style jsx>{`
      header {
        height: 70px;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
      }

      header .logo-link {
        display: inline-block;
      }

      header .logo {
        background-color: #828282;
        color: #fff;
        font-size: 40px;
        height: 55px;
        padding: 0px 15px;
        margin-top: 6px;
      }

      .templ-content-box {
        background-color: #f3f3f4;
      }
    `}</style>
  </div>
)
