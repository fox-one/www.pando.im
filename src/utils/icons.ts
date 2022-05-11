import { mdiArrowRight, mdiOpenInNew, mdiPlus, mdiClose } from "@mdi/js";
import {
  FIconDiscordFill,
  FIconTwitterFill,
  FIconTelegramFill,
  FIconRedditFill,
  FIconMenuBold,
} from "@foxone/icons";

const ficons = {
  FIconDiscordFill: { component: FIconDiscordFill },
  FIconTwitterFill: { component: FIconTwitterFill },
  FIconTelegramFill: { component: FIconTelegramFill },
  FIconRedditFill: { component: FIconRedditFill },
  FIconMenuBold: { component: FIconMenuBold },
};

export default {
  mdiArrowRight,
  mdiOpenInNew,
  mdiPlus,
  mdiClose,
  ...ficons,
};
