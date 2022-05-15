<template>
  <div class="f-card" :style="width ? { width: `${width}px` } : {}">
    <div
      class="f-card-header"
      :style="imgHeight ? { height: `${imgHeight}px` } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div class="f-card-body">
      <template v-if="content">
        {{ content }}
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
    <div class="f-card-footer" v-if="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    /** 卡片宽度 */
    width: {
      type: Number,
      default: 0,
    },
    /** 卡片图片地址 */
    imgSrc: {
      type: String,
      default: "",
    },
    /** 卡片图片高度 */
    imgHeight: {
      type: Number,
      default: 0,
    },
    /** 卡片内容 */
    content: {
      type: String,
      default: "",
    },
    /** 卡片页脚 */
    footer: {
      type: String,
      default: "",
    },
  },
};
</script>