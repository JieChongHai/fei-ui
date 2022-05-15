<template>
  <div id="app">
    <Card
      :width="300"
      :imgHeight="180"
      imgSrc="python.png"
      content="程序员理财课 Python量化交易系统实战"
    />
    <Card imgSrc="python.png" class="ml-md">
      <span>程序员理财课 spanython量化交易系统实战</span>
    </Card>
    <Card imgSrc="python.png" class="ml-md">
      <span>程序员理财课 spanython量化交易系统实战</span>
      <template v-solt="footer">
        <div class="difficulty">入门 · 1248人报名</div>
        <div class="price">￥299.00</div>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  .ml-md {
    margin-left: 16px;
  }
  .difficulty {
    color: #9199a1;
    font-size: 12px;
    margin: 8px 0;
  }
  .price {
    font-size: 12px;
    font-weight: 700;
    color: red;
  }
}
</style>
