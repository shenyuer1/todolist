Vue.component("custom-input",{
    props:["title"],
    template:`<div class="inputbox" >
            <input type="text" @focus="focus" v-model="title">
        </div>`,
    methods:{
        focus(){
            this.$emit("customevent");
        }
    }
})
Vue.component("custom-list",{
    props:["listData","status"],
    template:`<ul class="list" v-show="status==true">
            <li v-for="item in listData" @click="click(item.title)">{{item.title}}</li>
        </ul>`,
    methods:{
        click(title){
            this.$emit("customevent1",title);
        }
    }
})