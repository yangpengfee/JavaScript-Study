<template>
    <div class="home">
        <div id="nav">
            <router-link to="/baseConversion">进制转换</router-link>
            <router-link to="/editRead">编辑读取</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
<style lang="less" scoped>
#nav {
    padding: 30px;
    display: flex;
    a {
        font-weight: bold;
        color: #2c3e50;
        display: inline-block;
        text-decoration: none;
        box-shadow: 0 0 3px #ccc;
        padding: 20px 20px;
        margin-right: 20px;
        border-radius: 10px;
    }
    a:hover {
        background-color: #42b983;
        color: #fff;
    }
    a.router-link-exact-active {
        color: #42b983;
    }
}
</style>