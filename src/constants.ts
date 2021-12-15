export const isProduct = process.env.APP_ENV === "prod";

export const GA = "G-2MWG0DMS9R";

export const API_BASE = "";

export const fennecInstallURLs = {
  firefox: "https://addons.mozilla.org/en-US/firefox/addon/fox_fennec/",
  chrome:
    "https://chrome.google.com/webstore/detail/fennec/eincngenkhohbbfpkohipekcmnkfamjp",
  source: "https://github.com/fox-one/fennec",
  raw: "https://github.com/fox-one/fennec/releases",
};

export const supportedWallets = [
  {
    name: "mm",
    label: "Mixin Messenger",
    url: "https://mixin.one/messenger",
  },
  {
    name: "fennec",
    label: "Fennec",
    route: "/fennec",
  },
];

export const mtgMembers = [
  {
    name: "fox",
    icon: require("~/assets/images/mtg-members/pando-mtg-member-fox.png"),
    title: "Fox.One",
    text: "The main develop team of Pando",
    url: "https://pando.im",
  },
  {
    name: "mixin",
    icon: require("~/assets/images/mtg-members/pando-mtg-member-mixin.png"),
    title: "Mixin",
    text: "The core develop team of Mixin Network",
    url: "https://mixin.one",
  },
  {
    name: "poolin",
    icon: require("~/assets/images/mtg-members/pando-mtg-member-poolin.png"),
    title: "Poolin",
    text: "Industry-leading mining service provider",
    url: "https://poolin.com",
  },
  {
    name: "b1",
    icon: require("~/assets/images/mtg-members/pando-mtg-member-b1.png"),
    title: "Big.ONE",
    text:
      "A trading platform provides users with the secure and trusteeship services",
    url: "https://big.one",
  },
  {
    name: "box",
    icon: require("~/assets/images/mtg-members/pando-mtg-member-box.png"),
    title: "BOX Group",
    text: "BOX investment community",
    url: "https://b.watch",
  },
  {
    name: "exin",
    icon: require("~/assets/images/mtg-members/pando-mtg-member-exin.png"),
    title: "Exin",
    text: "Exin trade platform",
    url: "https://exin.one",
  },
  {
    name: "cedric",
    icon: require("~/assets/images/mtg-members/pando-mtg-member-cedric.png"),
    title: "Cedric Fung",
    text: "The main sponsor of Pando Leaf.",
    url: "https://github.com/cedricfung",
  },
];
