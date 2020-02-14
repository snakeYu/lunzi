# 前端造轮子

## 介绍

## 开始使用
1.添加css样式

  使用前，请在css中开启 border-box
  ```css
    *,*::before,*::after{box-sizing:border-box}
    /* ie 8及以上支持 */
  ```
  你还需要设置默认颜色等变量（后续会改为scss变量）
  ```css
  html{
      --button-height:32px;
      --font-size:14px;
      --button-bg:white;
      --button-active-bg:#eee;
      --border-radius:4px;
      --color:#333;
      --border-color:#999;
      --border-color-hover:#666;
  }
  /* IE15及以上支持此样式 */
  ```
2.安装
  ```javascript
      npm install --save wheel_yu
  ```
3.引入
  ```javascript
    import {Button} from 'wheel_yu'
    import 'wheel_yu/dist/index.css'

    export default{
      components:{
        'g-button':Button
      }
    }
  ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
