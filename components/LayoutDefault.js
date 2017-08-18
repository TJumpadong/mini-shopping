import Link from 'next/link'

import MainSiteLayout from './MainSiteLayout'

export default ({ children, title }) => (
  <MainSiteLayout title={ title }>
    <header>
      <div className="container">
        <Link href="/">
          <a><label className="logo">MINI SHOPPING</label></a>
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

      header .logo {
        background-color: #828282;
        color: #fff;
        font-size: 40px;
        height: 55px;
        padding: 0px 15px;
        margin-top: 6px;
        cursor: pointer;
      }

      .templ-content-box {
        background-color: #f3f3f4;
      }
    `}</style>
  </MainSiteLayout>
)
