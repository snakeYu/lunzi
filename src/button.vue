<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click='$emit("click")'>
    <g-icon class="icon"  v-if='icon && !loading' :name='icon'></g-icon>
    <g-icon class="icon loading" v-if="loading" :name='icon'></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props:{
      icon:{},
      loading:{
          type:Boolean,
          default:false
      },
      iconPosition:{
          type:String,
          default:"left",
          validator(val){
              if(val!=='left'&&val!=='right'){
                  return false
              }else{
                  return true
              }
          }
      }
  }
};
</script>
<style scoped lang='scss'>
@keyframes spin{
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform: rotate(360deg)
    }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  vertical-align: middle;//display:inline-flex;会引起错位，所以要使用vertical-align修正
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right{
      > .icon{
          order:2;
          margin-right: 0;
          margin-left: .1em;
      }
      > .content{
          order:1;
      }
  }
  .loading{
      animation: spin 1s infinite linear;
  }
}
</style>