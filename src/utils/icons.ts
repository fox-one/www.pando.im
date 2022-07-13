import { mdiArrowRight, mdiPlus } from "@mdi/js";
import {
  FIconDiscordFill,
  FIconTwitterFill,
  FIconTelegramFill,
  FIconRedditFill,
  FIconMenuBold,
  FIconClose,
  FIconAdd,
  FIconDocumentFill,
  FIconUpRightBold,
  FIconPlayFill,
} from "@foxone/icons";

const ficons = {
  FIconDiscordFill: { component: FIconDiscordFill },
  FIconTwitterFill: { component: FIconTwitterFill },
  FIconTelegramFill: { component: FIconTelegramFill },
  FIconRedditFill: { component: FIconRedditFill },
  FIconMenuBold: { component: FIconMenuBold },
  FIconClose: { component: FIconClose },
  FIconAdd: { component: FIconAdd },
  FIconDocumentFill: { component: FIconDocumentFill },
  FIconUpRightBold: { component: FIconUpRightBold },
  FIconPlayFill: { component: FIconPlayFill },
};

export default {
  mdiArrowRight,
  mdiPlus,
  ...ficons,
};
