import { useParams, useNavigate } from "react-router-dom"
import { Section, IconWrap } from "./styled"
import SvgIcon from "@mui/material/SvgIcon"

import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined"
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"

import { ReactComponent as FaceBookIcon } from "assets/images/icons/facebook.svg"
import { ReactComponent as InstagramIcon } from "assets/images/icons/instagram.svg"
import { ReactComponent as GoogleMapIcon } from "assets/images/icons/google-maps.svg"
import { ReactComponent as DigiMeniIcon } from "assets/images/icons/digi-meni.svg"

import IconButton from "components/base/IconButton"

import Typography from "components/base/typography/Text"
import withPageLayout from "views/generalPagelayout"
import {
  RoutePaths,
  buildAccPageUrl,
  buildAddMealUrl,
  buildEditFoodUrl,
  buildEditMealUrl,
  buildResAdminUrl,
  replaceResSlug,
} from "routing/RoutePaths"

const Home: React.FC = () => {
  const router = useNavigate()
  const { slug } = useParams()

  function handleButtonClick(url: string) {
    router(url)
  }
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", gap: "20px", rowGap: "30px" }}
    >
      <div style={{ fontSize: "3rem" }}>Kacina Kafa Kod Kuce - 4k</div>
      <Section>
        <IconWrap>
          <IconButton
            icon={<MenuBookOutlinedIcon />}
            onClick={() =>
              handleButtonClick(
                replaceResSlug(RoutePaths.resEditMenu),
              )
            }
          />
          <Typography variant="body2">Izmeni Jelovnik</Typography>
        </IconWrap>
        <IconWrap>
          <IconButton
            icon={<DinnerDiningOutlinedIcon />}
            onClick={() => handleButtonClick(buildEditFoodUrl())}
          />
          <Typography variant="body2">Izmeni Hranu</Typography>
        </IconWrap>

        <IconWrap>
          <IconButton icon={<HomeOutlinedIcon />} />
          <Typography variant="body2">Izmeni pocetnu</Typography>
        </IconWrap>
      </Section>
      <Section style={{ flex: "0 0 25%" }}>
        <IconWrap>
          <IconButton
            icon={<AddCircleOutlineOutlinedIcon />}
            onClick={() =>
              handleButtonClick(buildAddMealUrl())
            }
          />
          <Typography variant="body2">Dodaj jelo</Typography>
        </IconWrap>
      </Section>
      <Section style={{ flex: "1" }}>
        <IconWrap>
          <IconButton icon={<PhotoCameraOutlinedIcon />} />
          <Typography variant="body2">Ucitaj meni iz slike</Typography>
        </IconWrap>
      </Section>

      <Section>
        <IconWrap>
          <IconButton icon={<SvgIcon component={FaceBookIcon} />} />

          <Typography variant="body2">
            Povezi <br /> Facebook
          </Typography>
        </IconWrap>
        <IconWrap>
          <IconButton icon={<SvgIcon component={InstagramIcon} />} />
          <Typography variant="body2">
            Povezi <br /> Instagram
          </Typography>
        </IconWrap>
        <IconWrap>
          <IconButton icon={<SvgIcon component={GoogleMapIcon} />} />
          <Typography variant="body2">
            <CheckCircleOutlineOutlinedIcon color="success" />
          </Typography>
        </IconWrap>
      </Section>
      <Section>
        <IconWrap>
          <IconButton icon={<BarChartOutlinedIcon />} />
          <Typography variant="body2">Statistika</Typography>
        </IconWrap>
        <IconWrap>
          <IconButton icon={<ManageAccountsOutlinedIcon />} 
          onClick={() =>
            handleButtonClick(buildAccPageUrl())
          }
          />
          <Typography variant="body2">Podesavanja naloga</Typography>
        </IconWrap>
      </Section>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          height: "50px",
          alignItems: "end",
        }}
      >
        <div>Powered by DigiMeni</div>
        <DigiMeniIcon />
      </div>
    </div>
  )
}

const Homepage = withPageLayout(Home)
export default Homepage
