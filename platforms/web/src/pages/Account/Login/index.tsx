import { Input, Button } from "@equilibrius/ui";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "@web/core";
import { Link } from "react-router-dom";

import Logo from "@web/components/Logo";
import { FormattedMessage, useTranslation } from "@web/core/intl";
import { actions } from "@web/providers/Auth/slice";
import "../style.scss";

export function LoginPage(): JSX.Element {
  const dispatch = useDispatch();
  const t = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (): void => {
    dispatch(actions.login({ email, password }));
  };

  return (
    <div className="page-wrapper auth-page">
      <div className="auth-title">
        <Logo />
        <FormattedMessage id="signIn" />
      </div>
      <div className="auth-form">
        <Input id="login-email" label={t("email")} name="email" type={"text"} onChange={onChange} />
        <Input id="login-password" label={t("password")} name="password" type={"password"} onChange={onChange} />
      </div>
      <div className="auth-form-footer">
        <div />
        {/* <div>
          {t("noAccount")}{" "}
          <Link tabIndex={-1} to="/sign-up">
            {t("signUp")}
          </Link>
        </div> */}
        <Button onClick={onSubmit}>{t("signIn")}</Button>
      </div>
    </div>
  );
}
