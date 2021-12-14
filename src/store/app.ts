export const state = () => ({
  dark: false,
  snackbar: {
    show: false,
    message: "",
    color: "info",
  },
  pageBgColor: "white",
});

export const mutations = {
  toast(state, { message, color }) {
    state.snackbar.show = true;
    state.snackbar.message = message;
    state.snackbar.color = color;
  },

  setSnackbar(state, val) {
    state.snackbar.show = val;
  },

  setPageBgColor(state, val) {
    state.pageBgColor = val;
  },

  setDark(state, val) {
    state.dark = val;
  },
};
