import React from "react"
import Button from "components/base/Button"
import TextField from "components/base/TextField"
import Typography from "components/base/typography/Text"

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home Page of DigiMenu</p>
      <Typography variant="body1">Ime jela</Typography>
      <TextField />

      <Button>Proba</Button>
    </div>
  )
}

export default Home
