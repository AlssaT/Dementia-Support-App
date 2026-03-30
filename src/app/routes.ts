import { createBrowserRouter } from "react-router";
import { WakeScreen } from "./components/WakeScreen";
import { MyPhotos } from "./components/MyPhotos";
import { MyPeople } from "./components/MyPeople";
import { Messages } from "./components/Messages";
import { Location } from "./components/Location";
import { CaregiverMode } from "./components/CaregiverMode";
import { MainMenu } from "./components/MainMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WakeScreen,
  },
  {
    path: "/menu",
    Component: MainMenu,
  },
  {
    path: "/photos",
    Component: MyPhotos,
  },
  {
    path: "/people",
    Component: MyPeople,
  },
  {
    path: "/messages",
    Component: Messages,
  },
  {
    path: "/location",
    Component: Location,
  },
  {
    path: "/caregiver",
    Component: CaregiverMode,
  },
], {
  basename: "/Dementia-Support-App"
});
