import Vue from "vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./Button-group.vue";
import Input from "./Input.vue";
import Row from "./Row.vue";
import Col from "./Col.vue";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Sider from "./Sider";
import Content from "./Content";
import plugins from "./plugins/Toast";
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(Input.name, Input);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Layout.name, Layout);
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(Sider.name, Sider);
Vue.component(Content.name, Content);
Vue.use(plugins);
new Vue({
  el: "#app",
  data: {
    loading: true,
    loading1: false,
    message: ""
  },
  methods: {
    toast_bottom() {
      this.$toast("我知道了我知道了我知道了", {
        position: "bottom",
        closeButton: {
          text: "bottom",
          cb() {
            console.log("我被执行了");
          }
        }
      });
    },
    toast_top() {
      this.$toast("我知道了我知道了我知道了", {
        position: "top",
        closeButton: {
          text: "top",
          cb() {
            console.log("我被执行了");
          }
        }
      });
    },
    toast_middle() {
      this.$toast("我知道了我知道了我知道了", {
        position: "middle",
        closeButton: {
          text: "middle",
          cb() {
            console.log("我被执行了");
          }
        }
      });
    }
  }
});

import chai from "chai";
import spies from "chai-spies";
chai.use(spies);
const expect = chai.expect;

// 单元测试
try {
  {
    const Construtor = Vue.extend(Button);
    const button = new Construtor({
      propsData: {
        icon: "setting"
      }
    }).$mount();
    let useElement = button.$el.querySelector("use");
    expect(useElement.getAttribute("xlink:href")).to.eq("#i-setting");
    button.$el.remove();
    button.$destroy();
  }
  {
    const Construtor = Vue.extend(Button);
    const vm = new Construtor({
      propsData: {
        icon: "settings",
        loading: true
      }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.eq("#i-loading");
    vm.$el.remove();
    vm.$destroy();
  }
  {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Construtor = Vue.extend(Button);
    const vm = new Construtor({
      propsData: {
        icon: "setting"
      }
    }).$mount(div);
    let svg = vm.$el.querySelector("svg");
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("1");
    vm.$el.remove();
    vm.$destroy();
  }
  {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Construtor = Vue.extend(Button);
    const vm = new Construtor({
      propsData: {
        icon: "settings",
        iconPosition: "right"
      }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector("svg");
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("2");
    vm.$el.remove();
    vm.$destroy();
  }
  {
    // mock
    const Construtor = Vue.extend(Button);
    const vm = new Construtor({
      propsData: {
        icon: "settings"
      }
    }).$mount();
    let spy = chai.spy(function() {});
    vm.$on("click", spy);
    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called();
    vm.$el.remove();
    vm.$destroy();
  }
} catch (error) {
  window.errors = [error];
} finally {
  window.errors &&
    window.errors.forEach(err => {
      console.error(err.message);
    });
}
