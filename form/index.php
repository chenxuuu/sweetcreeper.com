<?php
session_start();
header("Content-Type: text/html;charset=utf-8");
function set_token() {
  $_SESSION['token'] = md5(microtime(true));
}
//如果token为空则生成一个token
if(!isset($_SESSION['token']) || $_SESSION['token']=='') {
  set_token();
}
?><!DOCTYPE html>
<html>

<head>
	<title>糖拌苦力怕白名单申请</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="//source.papapoi.com/sweetcreeper.com/form/css/index.css">
    <link rel="stylesheet" href="//source.papapoi.com/sweetcreeper.com/form/css/FormMaking.css">
    <style>
    	.el-form-item__label{
    		font-size: 18px; !important
    	}
    </style>
</head>

<body>
    <div style="text-align: center;">
        <h1>
            糖拌苦力怕白名单申请
        </h1>
        <h3>
            本服为公益服，为了服务器内的和谐融洽，需要提交白名单申请
        </h3>
        <p>
            已有过白名单的老玩家回服务器无需再次申请！直接联系腐竹加白名即可！<br/>
            如填写途中遇到问题无法继续，请去wiki页GitHub源码处提交issue
        </p>
    </div>

    <div id="app" style="padding: 0 10% 10% 10%;max-width: 1000px;margin: 0 auto;">
        <fm-generate-form :data="jsonData" :remote="remoteFuncs" :value="editData" :remote-option="dynamicData"
            ref="generateForm">
        </fm-generate-form>
        <el-button type="primary" @click="handleSubmit" style="display:block;margin:0 auto">填完了，提交~</el-button>
    </div>
    <script src="//source.papapoi.com/sweetcreeper.com/form/js/vue.js"></script>
    <script src="//source.papapoi.com/sweetcreeper.com/form/js/index.js"></script>
    <script src="//source.papapoi.com/sweetcreeper.com/form/js/FormMaking.umd.js"></script>
    <script>var done_token = "<?php echo $_SESSION['token'];?>";</script>
    <script src="js/form.js"></script>
    <script src="//source.papapoi.com/sweetcreeper.com/form/js/axios.min.js"></script>
</body>

</html>
