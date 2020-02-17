<template>
  <div class="wrapper" :class="toastClass">
    <div class="g-toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHTML"></slot>
        <!-- 如果想要插入HTML代码，-->
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" @click="handleClose" v-if="closeButton">{{
        closeButton.text
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "g-toast",
  props: {
    enableHTML: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 30
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          cb: undefined
        };
      }
    },
    position: {
      type: String,
      default: "top",
      validate(val) {
        return ["top", "bottom", "middle"].indexOf(val) >= 0;
      }
    }
  },
  mounted() {
    this.setLineHeight();
    this.execAutoClose();
  },
  methods: {
    setLineHeight() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.toast.getBoundingClientRect().height + "px";
      });
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      //如果不写remove，元素还是存在在页面上

      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    handleClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.cb === "function") {
        this.closeButton.cb(this);
      }
    }
  },
  computed: {
    toastClass() {
      return { [`position-${this.position}`]: true };
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes fade_bottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade_middle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade_top {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  .g-toast {
    min-height: 40px;
    font-size: 14px;
    line-height: 1.8;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    color: white;
    padding: 0 16px;
    .message {
      padding: 8px 0;
    }
    .close {
      flex-shrink: 0;
      height: 100%;
    }
    .line {
      border-left: 1px solid rgba(255, 255, 255, 0.8);
      margin: 0 16px;
    }
  }
  &.position-top {
    top: 0;
    .g-toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: fade_top 1s;
    }
  }
  &.position-bottom {
    bottom: 0;
    .g-toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: fade_bottom 1s;
    }
  }
  &.position-middle {
    top: 50%;
    .g-toast {
      animation: fade_middle 1s;
    }
  }
}
</style>
