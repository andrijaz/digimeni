import Footer from "components/base/Footer"
import Header from "components/base/Header"
import { FC } from "react"
import styled from "styled-components"

export const mobileHeaderHeight = "70px"
export const desktopHeaderHeight = "123px"

const Layout = styled.div`
  min-height: calc(100vh - 120px);
  padding: ${mobileHeaderHeight} 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`

export default function withPageLayout(PageComponent: FC) {
  return (props: any) => {
    return (
      <>
        <Header />
        <Layout>
          <PageComponent {...props} />
        </Layout>
        <Footer aboutLink="www.google.com" contactLink="www.google.com" />
      </>
    )
  }
}
