new Vue({
    el: '#app',
    data: {
        jsonData: {"list":[{"type":"text","icon":"icon-wenzishezhi-","options":{"defaultValue":"请如实填写","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677224250","remoteOption":"option_1581677224250"},"name":"基本信息","key":"1581677224250","model":"commit3","rules":[]},{"type":"input","icon":"icon-input","options":{"width":"100%","defaultValue":"","required":true,"dataType":"string","pattern":"","placeholder":"","customClass":"","disabled":false,"labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"showPassword":false,"remoteFunc":"func_1581676855303","remoteOption":"option_1581676855303"},"name":"从哪里知道的这个服务器？","key":"1581676855303","model":"basic1","rules":[{"type":"string","message":"从哪里知道的这个服务器？格式不正确"},{"required":true,"message":"从哪里知道的这个服务器？必须填写"}]},{"type":"input","icon":"icon-input","options":{"width":"100%","defaultValue":"","required":true,"dataType":"string","pattern":"","placeholder":"","customClass":"","disabled":false,"labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"showPassword":false,"remoteFunc":"func_1581676870972","remoteOption":"option_1581676870972"},"name":"你的id（不允许中文、仅限英文和下划线）","key":"1581676870972","model":"basic2","rules":[{"type":"string","message":"你的id（不允许中文、仅限英文和下划线）格式不正确"},{"required":true,"message":"你的id（不允许中文、仅限英文和下划线）必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":true,"defaultValue":"","showLabel":false,"options":[{"value":"正版帐号","label":"Option1"},{"value":"盗版帐号，没有能力入正","label":"Option2"},{"value":"盗版帐号，但是准备入正","label":"Option3"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581676884927","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581676884927","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"帐号是正版还是盗版？","key":"1581676884927","model":"basic3","rules":[{"required":true,"message":"帐号是正版还是盗版？必须填写"}]},{"type":"input","icon":"icon-input","options":{"width":"100%","defaultValue":"","required":true,"dataType":"string","pattern":"","placeholder":"","customClass":"","disabled":false,"labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"showPassword":false,"remoteFunc":"func_1581676980599","remoteOption":"option_1581676980599"},"name":"写上自己QQ号，用于接收初始密码和过审通知，此项重要勿填错","key":"1581676980599","model":"basic4","rules":[{"type":"string","message":"写上自己QQ号，用于接收初始密码和过审通知，此项重要勿填错格式不正确"},{"required":true,"message":"写上自己QQ号，用于接收初始密码和过审通知，此项重要勿填错必须填写"}]},{"type":"input","icon":"icon-input","options":{"width":"100%","defaultValue":"","required":true,"dataType":"string","pattern":"","placeholder":"","customClass":"","disabled":false,"labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"showPassword":false,"remoteFunc":"func_1581676992931","remoteOption":"option_1581676992931"},"name":"年龄","key":"1581676992931","model":"basic5","rules":[{"type":"string","message":"年龄格式不正确"},{"required":true,"message":"年龄必须填写"}]},{"type":"input","icon":"icon-input","options":{"width":"100%","defaultValue":"","required":true,"dataType":"string","pattern":"","placeholder":"大佬还是萌新？","customClass":"","disabled":false,"labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"showPassword":false,"remoteFunc":"func_1581677018267","remoteOption":"option_1581677018267"},"name":"minecraft的熟悉程度？","key":"1581677018267","model":"basic6","rules":[{"type":"string","message":"minecraft的熟悉程度？格式不正确"},{"required":true,"message":"minecraft的熟悉程度？必须填写"}]},{"type":"input","icon":"icon-input","options":{"width":"100%","defaultValue":"","required":true,"dataType":"string","pattern":"","placeholder":"","customClass":"","disabled":false,"labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"showPassword":false,"remoteFunc":"func_1581677032433","remoteOption":"option_1581677032433"},"name":"对糖拌服的了解程度","key":"1581677032433","model":"basic7","rules":[{"type":"string","message":"对糖拌服的了解程度格式不正确"},{"required":true,"message":"对糖拌服的了解程度必须填写"}]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":true,"disabled":false,"pattern":"","placeholder":"","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677045877","remoteOption":"option_1581677045877"},"name":"请问你是否有去过其他服务器？如果有的话，请简述你的经历，并带上对那个服务器的评价。","key":"1581677045877","model":"basic8","rules":[{"required":true,"message":"请问你是否有去过其他服务器？如果有的话，请简述你的经历，并带上对那个服务器的评价。必须填写"}]},{"type":"input","icon":"icon-input","options":{"width":"100%","defaultValue":"","required":true,"dataType":"string","pattern":"","placeholder":"","customClass":"","disabled":false,"labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"showPassword":false,"remoteFunc":"func_1581677063111","remoteOption":"option_1581677063111"},"name":"请问你是从哪个Minecraft版本开始玩的？","key":"1581677063111","model":"basic9","rules":[{"type":"string","message":"请问你是从哪个Minecraft版本开始玩的？格式不正确"},{"required":true,"message":"请问你是从哪个Minecraft版本开始玩的？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":true,"defaultValue":"","showLabel":false,"options":[{"value":"是","label":"Option1"},{"value":"否","label":"Option2"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677076532","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677076532","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"您是否会将游戏帐号与他人共享？","key":"1581677076532","model":"basic10","rules":[{"required":true,"message":"您是否会将游戏帐号与他人共享？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":false,"defaultValue":"","showLabel":false,"options":[{"value":"提交白名单后，会获得糖拌苦力怕服务器群入群密码（241464054）","label":"Option1"},{"value":"我不想加群（无法审核）","label":"Option2"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677096062","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677096062","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"是否会加糖拌苦力怕官方群？（填完会给你加群密码，记得加群）","key":"1581677096062","model":"basic11","rules":[{"required":true,"message":"是否会加糖拌苦力怕官方群？（填完会给你加群密码，记得加群）必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":true,"defaultValue":"","showLabel":false,"options":[{"value":"是","label":"Option1"},{"value":"否","label":"Option2"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677116910","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677116910","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"是否服从服务器的相关规定以及管理组相关人员决定？","key":"1581677116910","model":"basic12","rules":[{"required":true,"message":"是否服从服务器的相关规定以及管理组相关人员决定？必须填写"}]},{"type":"input","icon":"icon-input","options":{"width":"100%","defaultValue":"","required":true,"dataType":"string","pattern":"","placeholder":"","customClass":"","disabled":false,"labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"showPassword":false,"remoteFunc":"func_1581677132995","remoteOption":"option_1581677132995"},"name":"如果你违反了服务器的相关条例，你会怎么做？","key":"1581677132995","model":"basic13","rules":[{"type":"string","message":"如果你违反了服务器的相关条例，你会怎么做？格式不正确"},{"required":true,"message":"如果你违反了服务器的相关条例，你会怎么做？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":true,"defaultValue":"","showLabel":false,"options":[{"value":"是","label":"Option1"},{"value":"否","label":"Option2"},{"value":"看情况","label":"Option3"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677142232","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677142232","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"是否会卷入玩家纠纷中","key":"1581677142232","model":"basic14","rules":[{"required":true,"message":"是否会卷入玩家纠纷中必须填写"}]},{"type":"input","icon":"icon-input","options":{"width":"100%","defaultValue":"","required":false,"dataType":"string","pattern":"","placeholder":"","customClass":"","disabled":false,"labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"showPassword":false,"remoteFunc":"func_1581677157531","remoteOption":"option_1581677157531"},"name":"是否有在其他MC网站/服务器进行过技术研讨或是管理方面的事务？如果有，请描述一下","key":"1581677157531","model":"basic15","rules":[{"type":"string","message":"是否有在其他MC网站/服务器进行过技术研讨或是管理方面的事务？如果有，请描述一下格式不正确"}]},{"type":"text","icon":"icon-wenzishezhi-","options":{"defaultValue":"此部分仅作参考，正确率不会影响是否过审！","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677204443","remoteOption":"option_1581677204443"},"name":"游戏常识性问题","key":"1581677204443","model":"commit4","rules":[]},{"type":"radio","icon":"icon-radio-active","options":{"inline":true,"defaultValue":"","showLabel":false,"options":[{"value":"食品工艺","label":"Option1"},{"value":"暮色森林","label":"Option2"},{"value":"神秘时代","label":"Option3"},{"value":"匠魂"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677320858","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677320858","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"下面哪个mod，不是服务器现在有的？","key":"1581677320858","model":"mc1","rules":[{"required":true,"message":"下面哪个mod，不是服务器现在有的？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":true,"defaultValue":"Option1","showLabel":false,"options":[{"value":"围杀OP(此项正确)","label":"Option1"},{"value":"刷怪塔","label":"Option2"},{"value":"向玩家普及基本法","label":"Option3"},{"value":"高频红石电路"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677346262","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677346262","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"以下哪件事情在糖拌服是允许的？","key":"1581677346262","model":"mc2","rules":[{"required":true,"message":"以下哪件事情在糖拌服是允许的？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":true,"defaultValue":"","showLabel":false,"options":[{"value":"小麦种子","label":"Option1"},{"value":"小麦","label":"Option2"},{"value":"西瓜","label":"Option3"},{"value":"花生"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677376624","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677376624","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"在Minecraft1.2.5版本中喂什么可以让猪繁殖？","key":"1581677376624","model":"mc3","rules":[{"required":true,"message":"在Minecraft1.2.5版本中喂什么可以让猪繁殖？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":false,"defaultValue":"","showLabel":false,"options":[{"value":"破坏一个红石矿石方块会产生6-8个红石粉","label":"Option1"},{"value":"红石矿石方块被玩家接触或点击后会激活发光","label":"Option2"},{"value":"能量只能传过15方块的导线","label":"Option3"},{"value":"在1.25版本中，当岩浆碰到水边的红石线时，红石线则会变成黑曜石"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677419299","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677419299","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"下面关于红石的说法错误的是？","key":"1581677419299","model":"mc4","rules":[{"required":true,"message":"下面关于红石的说法错误的是？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":false,"defaultValue":"","showLabel":false,"options":[{"value":"甘蔗能被用来制作水下通道，容许玩家在水下以正常的速度行走","label":"Option1"},{"value":"如果甘蔗被活塞推，会被破坏","label":"Option2"},{"value":"种在沙子上的甘蔗比种在泥土上的甘蔗生长更快","label":"Option3"},{"value":"从一格高开始自然生长的甘蔗最多只能长到三格高"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677445372","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677445372","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"下面关于甘蔗的叙述错误的是？","key":"1581677445372","model":"mc5","rules":[{"required":true,"message":"下面关于甘蔗的叙述错误的是？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":false,"defaultValue":"","showLabel":false,"options":[{"value":"14.5%的僵尸可以成功破门，包括铁门","label":"Option1"},{"value":"僵尸村民死于高压爬行者的爆炸会掉落普通的僵尸头颅","label":"Option2"},{"value":"僵尸在蜘蛛网上不会燃烧","label":"Option3"},{"value":"僵尸可以爬上梯子"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677473304","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677473304","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"下面关于僵尸的说法中错误的是？","key":"1581677473304","model":"mc6","rules":[{"required":true,"message":"下面关于僵尸的说法中错误的是？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":false,"defaultValue":"","showLabel":false,"options":[{"value":"力量III","label":"Option1"},{"value":"击退II","label":"Option2"},{"value":"精准采集II","label":"Option3"},{"value":"时运III"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677502128","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677502128","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"以下哪个附魔是普通玩家无法附魔出的？","key":"1581677502128","model":"mc7","rules":[{"required":true,"message":"以下哪个附魔是普通玩家无法附魔出的？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":false,"defaultValue":"","showLabel":false,"options":[{"value":"龙蛋会在下面没有方块时向下掉落","label":"Option1"},{"value":"龙蛋瞬移水平方向上最多20方块","label":"Option2"},{"value":"右击龙蛋会瞬移走","label":"Option3"},{"value":"龙蛋移动速度比香港记者快"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677527954","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677527954","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"下面关于龙蛋的说法错误的是？","key":"1581677527954","model":"mc8","rules":[{"required":true,"message":"下面关于龙蛋的说法错误的是？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":false,"defaultValue":"","showLabel":false,"options":[{"value":"在上床前迅速按下物品栏键不能在物品窗中看到睡觉的姿势","label":"Option1"},{"value":"当走在上面时，床会发出类似于走在它下面的方块上的声音。如果床下面的方块被移除，会发出走在移除前的方块上发出的声音","label":"Option2"},{"value":"如果床上方有一个方块，包括台阶，床的表面会变成黑色","label":"Option3"},{"value":"如果床的正上方被方块覆盖（比如，靠近天花板的床），那么睡觉醒来后会被传送到方块之上"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677552653","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677552653","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"下面关于床的说法错误的是？","key":"1581677552653","model":"mc9","rules":[{"required":true,"message":"下面关于床的说法错误的是？必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":false,"defaultValue":"","showLabel":false,"options":[{"value":"在群里骂街","label":"Option1"},{"value":"先用/pri命令查询，再找op","label":"Option2"},{"value":"按E可赛艇","label":"Option3"},{"value":"假装无事发生"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677592297","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677592297","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"糖拌服中发现自己东西被偷了，想查询方块记录看看是谁偷的，怎么做？","key":"1581677592297","model":"mc10","rules":[{"required":true,"message":"糖拌服中发现自己东西被偷了，想查询方块记录看看是谁偷的，怎么做？必须填写"}]},{"type":"rate","icon":"icon-pingfen1","options":{"defaultValue":0,"max":10,"disabled":false,"allowHalf":false,"required":true,"customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"showScore":false,"remoteFunc":"func_1581677639123","remoteOption":"option_1581677639123"},"name":"你觉得选择题你能对几题？","key":"1581677639123","model":"mc11","rules":[{"required":true,"message":"你觉得选择题你能对几题？必须填写"}]},{"type":"text","icon":"icon-wenzishezhi-","options":{"defaultValue":"这部分内容千万不要乱写，也不用长篇大论，简单描述就好了","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677680946","remoteOption":"option_1581677680946"},"name":"简答题","key":"1581677680946","model":"commit5","rules":[]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":true,"disabled":false,"pattern":"","placeholder":"不少于2点。不得包括讲文明懂礼貌遵纪守法爱护和平爱国敬业诚信友善","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677690984","remoteOption":"option_1581677690984"},"name":"请给出你认为你可以通过审核的理由","key":"1581677690984","model":"text1","rules":[{"required":true,"message":"请给出你认为你可以通过审核的理由必须填写"}]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":true,"disabled":false,"pattern":"","placeholder":"","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677714358","remoteOption":"option_1581677714358"},"name":"请想象当op玩脱导致你损失时你将会做什么？想什么？","key":"1581677714358","model":"text2","rules":[{"required":true,"message":"请想象当op玩脱导致你损失时你将会做什么？想什么？必须填写"}]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":true,"disabled":false,"pattern":"","placeholder":"你的看法，尽量写3点以上","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677731458","remoteOption":"option_1581677731458"},"name":"在服务器里生活有什么注意事项？","key":"1581677731458","model":"text3","rules":[{"required":true,"message":"在服务器里生活有什么注意事项？必须填写"}]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":true,"disabled":false,"pattern":"","placeholder":"","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677748513","remoteOption":"option_1581677748513"},"name":"请简单的阐述一下对糖拌服的第一印象和对糖拌服运营情况的评价","key":"1581677748513","model":"text4","rules":[{"required":true,"message":"请简单的阐述一下对糖拌服的第一印象和对糖拌服运营情况的评价必须填写"}]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":true,"disabled":false,"pattern":"","placeholder":"","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677756151","remoteOption":"option_1581677756151"},"name":"请说出你对高频、大型红石电路与刷怪塔的看法","key":"1581677756151","model":"text5","rules":[{"required":true,"message":"请说出你对高频、大型红石电路与刷怪塔的看法必须填写"}]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":true,"disabled":false,"pattern":"","placeholder":"","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677765162","remoteOption":"option_1581677765162"},"name":"假如你的建筑被熊孩子破坏了，请简述对熊孩子的正确做法","key":"1581677765162","model":"text6","rules":[{"required":true,"message":"假如你的建筑被熊孩子破坏了，请简述对熊孩子的正确做法必须填写"}]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":true,"disabled":false,"pattern":"","placeholder":"一共五条，必须全对，可以在糖拌小百科上找到（https://wiki.sweetcreeper.com）","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677773162","remoteOption":"option_1581677773162"},"name":"请写出服务器建造常识","key":"1581677773162","model":"text7","rules":[{"required":true,"message":"请写出服务器建造常识必须填写"}]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":true,"disabled":false,"pattern":"","placeholder":"必须全对，可以在糖拌小百科上找到（https://wiki.sweetcreeper.com）","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677785908","remoteOption":"option_1581677785908"},"name":"会被封禁的行为有哪些","key":"1581677785908","model":"text8","rules":[{"required":true,"message":"会被封禁的行为有哪些必须填写"}]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":false,"disabled":false,"pattern":"","placeholder":"必须全对，可以在糖拌小百科上找到（https://wiki.sweetcreeper.com）","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677804684","remoteOption":"option_1581677804684"},"name":"会被处予三年以上、七年以下的封禁处罚的行为有哪些","key":"1581677804684","model":"text9","rules":[]},{"type":"text","icon":"icon-wenzishezhi-","options":{"defaultValue":"马上就结束，辛苦了！","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677830441","remoteOption":"option_1581677830441"},"name":"收尾","key":"1581677830441","model":"commit6","rules":[]},{"type":"radio","icon":"icon-radio-active","options":{"inline":false,"defaultValue":"","showLabel":false,"options":[{"value":"提交完就自动有白名单了","label":"Option1"},{"value":"提交成功并进群绑定了id，最后被通知审核通过才有白名单","label":"Option2"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677857394","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677857394","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"怎样才会有白名单","key":"1581677857394","model":"last1","rules":[{"required":true,"message":"怎样才会有白名单必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":true,"defaultValue":"","showLabel":false,"options":[{"value":"是","label":"Option1"},{"value":"否","label":"Option2"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677882376","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677882376","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"审核的管理是不是24小时都盯着电脑","key":"1581677882376","model":"last2","rules":[{"required":true,"message":"审核的管理是不是24小时都盯着电脑必须填写"}]},{"type":"radio","icon":"icon-radio-active","options":{"inline":true,"defaultValue":"","showLabel":false,"options":[{"value":"甜的","label":"Option1"},{"value":"咸的","label":"Option2"},{"value":"甜咸的","label":"Option3"}],"required":true,"width":"","remote":false,"remoteType":"option","remoteOption":"option_1581677905156","remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1581677905156","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"disabled":false},"name":"豆腐脑是甜的好还是咸的好","key":"1581677905156","model":"last3","rules":[{"required":true,"message":"豆腐脑是甜的好还是咸的好必须填写"}]},{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"","required":false,"disabled":false,"pattern":"","placeholder":"感谢填写此申请！我们会尽快审核！","customClass":"","labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"remoteFunc":"func_1581677976706","remoteOption":"option_1581677976706"},"name":"如果可以，请给予此申请表单一些建议或意见","key":"1581677976706","model":"last4","rules":[]}],"config":{"labelWidth":100,"labelPosition":"top","size":"small","customClass":"","ui":"antd","layout":"vertical","labelCol":0}},
        editData: {},
        remoteFuncs: {

        },
        dynamicData: {

        }
    },
    methods: {
        handleSubmit() {
            this.$refs.generateForm.getData().then(data => {
                // Data verification succeeded
axios.post('/form/commit.php', JSON.stringify(data))
  .then(function (response) {
    //console.log(response);
  	window.location.href="/form/done.php?token="+done_token;
  })
  .catch(function (error) {
    console.log(error);
  	alert("提交失败，请重试，如果一直这样请联系服主");
  });
            }).catch(e => {
                alert("请填写必填项！");
                // Data verification failed
            })
        }
    }
})