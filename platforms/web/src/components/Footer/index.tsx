import { useDispatch, useSelector } from "@web/core";
import "./style.scss";
import { themeActions } from "@web/providers/Theme/slice";
import { Button } from "@equilibrius/ui";
import { useThemeDetector } from "@web/providers/Theme/useThemeDetector";
import { ThemeEnum } from "@web/providers/Theme/types";
import { PiCopyrightBold } from "react-icons/pi";
import { MdInvertColorsOff, MdInvertColors } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { selectExperimentalInvert } from "@web/slices/persisted/selectors";
import { actions as persistableActions } from "@web/slices/persisted";
import { RiShieldUserFill } from "react-icons/ri";
import { FaCloudMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer(): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { opositeTheme } = useThemeDetector();
    const experimentalInvertEnabled = useSelector(selectExperimentalInvert);

    const onThemeChange = () => {
        dispatch(themeActions.changeTheme(opositeTheme))
    }

    const onExperimentalInvertChange = () => {
        dispatch(persistableActions.setExperimentalInvert(!experimentalInvertEnabled));
    }

    const onUserLogin = () => {
        navigate("/sign-in");
    }

    return <footer className="footer">
        <div className="footer-inner">
           <div className="align-center">
            <PiCopyrightBold />&nbsp;{new Date().getFullYear()} Web Oaza
           </div>
           <div className="align-center">
                <Button onClick={onUserLogin}>
                    {/* <RiLoginCircleFill /> */}
                    <RiShieldUserFill />
                </Button>
                <Button onClick={onExperimentalInvertChange}>
                    {experimentalInvertEnabled ? <MdInvertColorsOff /> : <MdInvertColors />}
                </Button>
                <Button onClick={onThemeChange}>
                    {opositeTheme === ThemeEnum.Light ? <BsFillSunFill /> : <FaCloudMoon />}
                </Button>
           </div>
        </div>
    </footer>
}