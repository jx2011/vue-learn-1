<template>
    <div>
        <h3>{{name}}</h3>
        <p class="title">user list</p>   
        <p class="title-scss">user list sass</p>   
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
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  data() {
    return {
      name: this.$root.name
    };
  },
  computed:{
    ...mapState({
      users:state=>state.user.list,
      companys:state=>state.company.list
    }),
    ...mapGetters({
      users1:'userList'
    })
  },
  created(){
    this.getList().then(d=>{
      console.log(d);
    });
    this.getCompanyList();
    setTimeout(()=>{
      this.setState_user({key:'list',data:[{name:"jx2011--01",age:18}]});
    },5000)
   
  },
  methods:{
    ...mapMutations(['setState_user']),
    ...mapActions(['getList','getCompanyList'])
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

