<template>
    <div class="editRead">
        <h3>monaco-editor编辑保存</h3>
        <hr />
        <div id="monaco"></div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import * as monaco from "monaco-editor";

export default {
    name: "editRead",
    props: {
        code: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            monacoInstance: {}
        };
    },
    mounted() {
        this.monacoInstance = monaco.editor.create(
            document.getElementById("monaco"),
            {
                value: this.code,
                readOnly: false,
                language: "javascript",
                theme: "vs-dark",
                folding: true, //代码折叠
                quickSuggestions: true, //支持搜索
                automaticLayout: true, //自动布局
                cursorStyle: "line", // 光标样式
                roundedSelection: true // 控制选区是否圆角
            }
        );
        this.addAction();
        // monacoInstance.dispose();
    },
    methods: {
        // 右击菜单+快捷键
        addAction() {
            //格式化文档
            // this.fmtJS();
            this.save();
        },
        save() {
            let that = this;
            this.monacoInstance.addCommand(
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
                () => {
                    console.log("save>>>");
                    console.log(
                        `总行数：${this.monacoInstance
                            .getModel()
                            .getLineCount()}`
                    );
                    console.log(`内容打印：${that.monacoInstance.getValue()}`);
                }
            );
        },
        // fmtJS(){
        //     this.monacoInstance.addAction({
        //         id:'formatDocument',
        //         label:'格式化文档',
        //         keybindings:[
        //             monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_F,

        //         ],
        //         contextMenuGroupId:"formatDocument",
        //         run:()=>{
        //         }
        //     })
        // },
        distroyEditor() {
            this.monacoInstance.dispose();
        }
    }
};
</script>
<style lang="less" scoped>
.editRead {
    height: 100%;
    h3 {
        margin: 0;
        padding: 10px 0;
        padding: 10px;
    }
    #monaco {
        height: 600px;
        widows: 500px;
        margin: 10px;
        box-shadow: 0 0 3px;
        text-align: left;
    }
}
</style>