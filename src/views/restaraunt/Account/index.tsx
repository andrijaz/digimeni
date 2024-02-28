import Button from "components/base/Button"
import Typography from "components/base/typography/Text"
import withPageLayout from "views/generalPagelayout"


const Account: React.FC = () => {
    return (<div>
        <Typography variant="h3">Podesavanja naloga</Typography>
        <Button>
            <Typography>Odjavi se</Typography>
        </Button>
    </div>)
}

const AccountPage = withPageLayout(Account)
export default AccountPage