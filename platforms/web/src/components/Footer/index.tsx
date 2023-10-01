import { useDispatch, useSelector } from "@web/core";
import "./style.scss";
import { selectIsLoggedIn } from "@web/providers/Auth/selectors";
import { themeActions } from "@web/providers/Theme/slice";
import { Button } from "@equilibrius/ui";
import { ThemeEnum } from "@web/providers/Theme/types";
import { useThemeDetector } from "@web/providers/Theme/useThemeDetector";
import { actions as persistableActions } from "@web/slices/persisted";
import { selectExperimentalInvert } from "@web/slices/persisted/selectors";
import { BsFillSunFill } from "react-icons/bs";
import { FaCloudMoon } from "react-icons/fa";
import { MdInvertColorsOff, MdInvertColors } from "react-icons/md";
import { PiCopyrightBold } from "react-icons/pi";
import { RiShieldUserFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Footer(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { opositeTheme } = useThemeDetector();
  const experimentalInvertEnabled = useSelector(selectExperimentalInvert);

  const onThemeChange = () => {
    dispatch(themeActions.changeTheme(opositeTheme));
  };

  const onExperimentalInvertChange = () => {
    dispatch(persistableActions.setExperimentalInvert(!experimentalInvertEnabled));
  };

  const onUserLogin = () => {
    navigate("/sign-in");
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="align-center">
          <PiCopyrightBold />
          &nbsp;{new Date().getFullYear()} Oaza
        </div>
        <div className="align-center">
          {isLoggedIn ? (
            <></>
          ) : (
            <Button onClick={onUserLogin}>
              <RiShieldUserFill />
            </Button>
          )}
          <Button onClick={onExperimentalInvertChange}>{experimentalInvertEnabled ? <MdInvertColorsOff /> : <MdInvertColors />}</Button>
          <Button onClick={onThemeChange}>{opositeTheme === ThemeEnum.Light ? <BsFillSunFill /> : <FaCloudMoon />}</Button>
        </div>
      </div>
    </footer>
  );
}
