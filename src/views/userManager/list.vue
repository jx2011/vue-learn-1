<template>
    <div>
        <h3>{{name}}</h3>
        <p class="title">user list</p>
        <p class="title-scss">user list sass</p>
        <div class="container">
            <el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker>
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                accept="image/jpeg,image/png">
                <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div ref="testDiv">
                <h2>htmel content</h2>
            </div>
            <!-- <div class="loader-inner line-scale-pulse-out-rapid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> -->
            <el-button type="primary" :loading="true">主要按钮</el-button>
            <!-- <img :src="img" alt=""> -->
        </div>
        <div>

        </div>

        <!-- <div class="content"></div> -->
        <ul>
            <li v-for="item in users1" :key="item.name">{{item.name}}======{{item.age}}</li>
        </ul>
        <ul>
            <li v-for="item in companys" :key="item.name">{{item.name}}======{{item.addr}}</li>
        </ul>
        <div>
            <h2>wang E</h2>
            <div class="wangeditor">
                <div class="editor-head" ref="editorHead"></div>
                <div
                    id="editorContent"
                    class="editor-content"
                    ref="editorContent"
                    :style="{height: 80 + 'px'}">
                </div>
            </div>
        </div>
        <p>tianjia</p>
        <div>
            <a href>bianji</a>
            <div style="height:200px;"></div>
        </div>
        <div>
            <a href>bianji</a>
            <div style="height:200px;"></div>
        </div>
        <div>
            <b @click="clickfun($event)">bianji</b>
            <div style="height:200px;"></div>
        </div>
    </div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from "vuex";
import E from "wangeditor";
export default {
    data() {
        return {
            name: this.$root.name,
            date: new Date(),
            editorContent: "",
            editor: null,
            menuSimple: ["head", "bold", "italic", "list", "image"],
            menuNormal: ["head", "bold", "italic", "underline", "list", "image"],
            img: require('#/assets/logo.png')
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
        
        //29 30 1 2 3 4 5
        // var start = new Date().getTime();
        // // var a = Array(10).fill('*')
        // var a = [];
        // for (var i = 0; i < 10; i++) {
        //     a.push("*")
        // }
        // console.log(a);
        // console.log(new Date().getTime() - start);
        // console.log(process.env.VUE_APP_TITLE);
        // console.log(process.env.VUE_APP_URL);
        this.getList().then(d => {
            console.log(d);
        });
        this.getCompanyList();
        setTimeout(() => {
            this.$confirm('是电饭锅电饭锅<br/>法律框架该房间给','',{
                dangerouslyUseHTMLString:true,
                type:'error'
            });
            // this.$root.reload()
            // console.log(
            //   (this.$store.getters.userList = { name: "dfffffff", age: 18 })
            // );
            // this.$store.state.user.list = [{ name: "0001", age: 18 }];
            // this.$store.commit('setState_user',{key:'list',data:[{name:"0001",age:18}]})
            this.setState_user({
                key: "list",
                data: [{
                    name: "jx2011--01",
                    age: 18
                }]
            });
        }, 5000);
    },
    methods: {
        ...mapMutations(["setState_user"]),
        ...mapActions({
            getList: "getList1",
            getCompanyList: "getCompanyList"
        }),
        clickfun(e) {
            console.log(e);
        },
        initEditor() {
            this.editor = new E(this.$refs.editorHead, this.$refs.editorContent);

            this.editor.customConfig.uploadImgShowBase64 = true; // base 64 存储图片
            this.editor.customConfig.onchange = html => {
                this.editorContent = html;
            };
            this.editor.customConfig.menus = this.menuSimple;
            this.editor.customConfig.pasteTextHandle = function (content) {
                console.log(content);
                var temEl = document.createElement("P");
                temEl.innerHTML = content;
                content = temEl.innerText
                    .replace(/(<!--[\s\S]*-->)/gm, "")
                    .replace(/[\s\r\n]/gm, "");

                return content;
            };
            this.editor.create();
            this.editor.txt.html("this.value");
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
            const isLt1M = file.size / 1024 / 1024 <= 1;
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
            }
            if (!isLt1M) {
                this.$message.error('上传头像图片大小不能超过 1MB!');
            }
            return isJPG && isLt1M;
        }
    },
    mounted() {
        this.initEditor();
        this.$refs.testDiv.innerHTML = '';
    }
};
</script>

<style lang="less" scoped>
@import url(~@/assets/style/common.less);

.title {
    & {
        color: red;
    }
}

.content {
    display: flex;
    width: 200px;
    height: 200px;
    background-image: url('~@/assets/logo.png');
}
</style>
