import Toast from "../Toast";

let currentToast;
export default {
  install(Vue, opts) {
    Vue.prototype.$toast = function(message, userOpts) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: userOpts,
        onClose() {
          currentToast = null;
        }
      });
    };
  }
};
function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast);
  console.log();
  let toast = new Constructor({
    propsData
  });

  toast.$slots.default = [message];
  toast.$mount();
  toast.$on("close", onClose);

  document.body.appendChild(toast.$el);
  return toast;
}
