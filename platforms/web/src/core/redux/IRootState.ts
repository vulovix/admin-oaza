import { ABOUT_PAGE_SCOPE } from "@web/pages/About/constants";
import { AboutPageState } from "@web/pages/About/types";
import { HOME_PAGE_SCOPE } from "@web/pages/Home/constants";
import { HomePageState } from "@web/pages/Home/types";
import { PUBLISH_SCOPE } from "@web/pages/Publish/constants";
import { PublishState } from "@web/pages/Publish/types";
import { AUTH_SCOPE } from "@web/providers/Auth/constants";
import { AuthState } from "@web/providers/Auth/types";
import { THEME_SCOPE } from "@web/providers/Theme/constants";
import { IThemeState } from "@web/providers/Theme/types";
import { PERSISTED_SCOPE } from "@web/slices/persisted/constants";
import { PersistedState } from "@web/slices/persisted/types";

export interface IRootState {
  [PERSISTED_SCOPE]: PersistedState;
  [THEME_SCOPE]: IThemeState;
  [ABOUT_PAGE_SCOPE]: AboutPageState;
  [AUTH_SCOPE]: AuthState;
  [PUBLISH_SCOPE]: PublishState;
  [HOME_PAGE_SCOPE]: HomePageState;
}
