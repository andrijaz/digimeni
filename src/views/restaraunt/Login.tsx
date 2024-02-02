import Button from 'components/base/Button'
import Typography from 'components/base/typography/Text'
import TextField from 'components/base/TextField'
import withPageLayout from 'views/generalPagelayout'
import styled from 'styled-components'

import { ReactComponent as DigiMeniIcon } from 'assets/images/icons/digi-meni.svg'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 200px;
`
function Login() {
  return (
    <>
      <h2>Dobrodosli u</h2>
      <h1>DigiMeni <DigiMeniIcon width={"50px"}/></h1>
      <Layout>
        <Typography variant="h1">Korisnicko ime</Typography>
        <TextField />
        <Typography variant="h1">Lozinka</Typography>
        <TextField />
        <Button>
          <Typography>Uloguj se</Typography>
        </Button>
      </Layout>
    </>
  )
}
const Loginpage = withPageLayout(Login)
export default Loginpage
