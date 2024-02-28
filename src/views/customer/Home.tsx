import React, { useContext, useEffect, useState } from "react"
import Button from "components/base/Button"
import TextField from "components/base/TextField"
import Typography from "components/base/typography/Text"
import { GlobalContext } from "context/GlobalContext"
import { useNavigate } from "react-router-dom"
import { buildResAdminUrl } from "routing/RoutePaths"

const Home: React.FC = () => {
  const { name, setName } = useContext(GlobalContext)!;
  const [input, setInput] = useState<string>()

  const router = useNavigate()

  const handleLogin = () => {
    if(!input)return;
    setName(input);
    router(buildResAdminUrl())

  };
  return (
    <div>
      <Typography variant="h2">Welcome to the Home Page of DigiMenu</Typography>
      <TextField onChange={(e)=>setInput(e.target.value)}></TextField>
      <Button onClick={handleLogin}>
        <Typography>Prijavi se</Typography>
      </Button>
    </div>
  )
}

export default Home
