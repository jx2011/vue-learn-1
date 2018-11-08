<template>
    <div>
        <h3>{{name}}</h3>
        <p class="title">user list</p>   
        <p class="title-sass">user list sass</p>   
        <div class="content"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: this.$root.name
    };
  }
};
</script>

<style lang="less" scoped>
.title {
  & {
    color: red;
  }
}
.content {
  width: 200px;
  height: 200px;
  background-image: url(../../assets/logo.png);
}
</style>
<style lang="sass" scoped>
.title-sass{
    &{
        color:red
    }
}

</style>



