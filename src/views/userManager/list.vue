<template>
    <div>
        <h3>{{name}}</h3>
        <p class="title">user list</p>   
        <p class="title-scss">user list sass</p>   
        <div class="container">
           <el-date-picker
            v-model="date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="content"></div>
        <ul>
          <li v-for="item in users1" :key="item.name">{{item.name}}======{{item.age}}</li>
        </ul>
        <ul>
          <li v-for="item in companys" :key="item.name">{{item.name}}======{{item.addr}}</li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      name: this.$root.name,
      date: new Date()
    };
  },
  computed: {
    ...mapState({
      users: state => state.user.list,
      companys: state => state.company.list
    }),
    ...mapGetters({
      users1: "userList"
    })
  },
  created() {
    this.getList().then(d => {
      console.log(d);
    });
    this.getCompanyList();
    setTimeout(() => {
      // console.log(
      //   (this.$store.getters.userList = { name: "dfffffff", age: 18 })
      // );
      this.$store.state.user.list = [{ name: "0001", age: 18 }];
      // this.$store.commit('setState_user',{key:'list',data:[{name:"0001",age:18}]})
      // this.setState_user({key:'list',data:[{name:"jx2011--01",age:18}]});
    }, 5000);
  },
  methods: {
    ...mapMutations(["setState_user"]),
    ...mapActions(["getList", "getCompanyList"])
  }
};
</script>
<style lang="less" scoped>
@import url(../../assets/style/common.less);
.title {
  & {
    color: red;
  }
}
.content {
  display: flex;
  width: 200px;
  height: 200px;
  // background-image: url(../../assets/logo.png);
}
</style>

