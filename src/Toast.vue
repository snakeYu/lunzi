<template>
  <div class="g-toast">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-toast"
};
</script>

<style scoped>
.g-toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 14px;
  line-height: 1.8;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0 16px;
}
</style>
