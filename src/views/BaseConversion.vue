<template>
    <div class="baseConversion">
        <h1>进制转换</h1>
        <hr />
        <el-row class="demo-autocomplete">
            <el-col :span="12">
                <div class="sub-title">10进制</div>
                <el-input type="text" v-model="val1to" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="12">
                <div class="sub-title">64进制</div>
                <el-input class="inline-input" v-model="val2to" placeholder="请输入内容"></el-input>
            </el-col>
        </el-row>
        <br />
        <el-button type="primary" plain @click="btn1">10To64</el-button>
        <el-button type="primary" plain @click="btn2">64To10</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            val1to: "",
            val2to: ""
        };
    },

    methods: {
        btn1() {
            console.log(this.val1);
            this.val2to = "";
            if (this.val1to === "") {
                this.$notify({
                    title: "警告",
                    message: "请输入需要转化的10进制数字！",
                    type: "warning"
                });
                return;
            }
            this.val2to = this.string10to64(this.val1to);
        },
        btn2() {
            this.val1to = "";
            if (this.val2to === "") {
                this.$notify({
                    title: "警告",
                    message: "请输入需要转化的64进制数字！",
                    type: "warning"
                });
                return;
            }
            this.val1to = this.string64to10(this.val2to);
        },
        string10to64(number) {
            var chars = "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ-~".split(
                    ""
                ),
                radix = chars.length,
                qutient = +number,
                arr = [];
            do {
                let mod = qutient % radix;
                qutient = (qutient - mod) / radix;
                arr.unshift(chars[mod]);
            } while (qutient);
            return arr.join("");
        },
        string64to10(number_code) {
            var chars =
                    "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ-~",
                radix = chars.length,
                len = number_code.length,
                i = 0,
                origin_number = 0;
            number_code = String(number_code);
            while (i < len) {
                origin_number +=
                    Math.pow(radix, i++) *
                    chars.indexOf(number_code.charAt(len - i) || 0);
            }
            return origin_number;
        }
    }
};
</script>
<style lang="less" scoped>
.baseConversion {
    .el-row {
        width: 50%;
        margin: auto;

        .sub-title {
            margin-bottom: 10px;
        }
        .el-input {
            width: 300px;
        }
        .el-col:not(:last-child) {
            border-right: 1px solid rgba(224, 230, 237, 0.5);
        }
    }
}
</style>