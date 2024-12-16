<?php
session_start();
header("Content-Type: text/html;charset=utf-8");
//如果token为空则生成一个token
if(!isset($_SESSION['token']) ||
$_SESSION['token']=='' ||
!isset($_GET['token']) ||
$_SESSION['token']!=$_GET['token']) {
  echo '<script>alert("请认真填写白名单");window.location.href="/form";</script>';
  exit(0);
}
?><!DOCTYPE html>
<html>

<head>
    <title>结束页</title>
    <meta name="referrer" content="never">
    <meta charset="UTF-8">
</head>

<body>
    <div style="text-align: center;">
        <h1>
            申请提交成功
        </h1>
        <h2>
            加群密码：a5vOVlnVhv8mJfSA9yMn<br/>
            请进群并且在群内绑定id后，耐心等待审核
        </h2>
        下面是选择题部分的标准答案:<br/>
        <img src="http://ww3.sinaimg.cn/large/006HJ39wgy1feyvfmrp4lj30pk2l4n0z.jpg"/>
    </div>
</body>

</html>
