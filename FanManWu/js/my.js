$(document).ready(function() {

	/****************导航菜单************************/

	var arrayObj = [

		{
			title: "首页",
			href: "index.html",
			Children: []
		},

		{
			title: "番剧",
			href: "fanju.html",
			Children: [{
				Ctitle: "最近更新",
				Chref: "####"
			}, {
				Ctitle: "连载动画",
				Chref: "####"
			}, {
				Ctitle: "完结动画",
				Chref: "####"
			}, {
				Ctitle: "新番时间表",
				Chref: "####"
			}]
		}, {
			title: "漫画",
			href: "manhua.html",
			Children: [

				{
					Ctitle: "热门",
					Chref: "####"
				}, {
					Ctitle: "类型",
					Chref: "####"
				}, {
					Ctitle: "排行",
					Chref: "####"
				}

			]
		}, {
			title: "音乐",
			href: "####",
			Children: []
		}, {
			title: "漫评",
			href: "####",
			Children: [

				{
					Ctitle: "番剧",
					Chref: "####"
				}, {
					Ctitle: "漫画",
					Chref: "####"
				}, {
					Ctitle: "专题",
					Chref: "####"
				}

			]
		}, {
			title: "商城",
			href: "####",
			Children: []
		}, {
			title: "论坛",
			href: "####",
			Children: []
		}, {
			title: "排行",
			href: "####",
			Children: []
		}
	];

	arrayObj.forEach(function(val, index, arr) {
		var $li = $("<li></li>");
		var $a = $("<a href=''></a>");
		$a.attr("href", val["href"])
		var $p = $("<p></p>");
		$p.text(val["title"]);
		var $img = $("<img src='img/dainshi.png' />")
		$a.append($p, $img);

		var $subul = $("<ul></ul>");
		val["Children"].forEach(function(xval, xindex, xarr) {
			var $ele = $("<li><a href='" + xval["Chref"] + "'>" + xval["Ctitle"] + "</a></li>");
			$subul.append($ele);
		})

		$li.append($a, $subul);
		$(".subnav").append($li);
		$li.hover(function() {
			$(".line").show();
		}, function() {
			$(".line").hide();
		})
	})

	/*****************************************************************************************************/

	/****最新番剧title***/
	/****第一种 foEach 实现****/
	//  var arrTitle =["为你推荐","周一","周二","周三","周四","周五","周六","周日"];
	//	arrTitle.forEach(function(val,index,arr){
	//		var $li=$("<li></li>");
	//		$li.text(val);
	//		$(".parter1_list").append($li);
	//	})

	/****最新番剧title***/
	/****第二种 for实现****/
	var arrTitle = ["为你推荐", "周一", "周二", "周三", "周四", "周五", "周六", "周日"];
	for(var i = 0; i < arrTitle.length; i++) {
		var $li = $("<li></li>");
		$li.text(arrTitle[i]);
		$(".parter1_list").append($li);
	}

	/********************* 第一部分 内容部分parter1_content*************************/

	arrNews = [
		[{
				imgSrc: "img/baoshi1.jpg",
				animateName: "宝石之国",
				updateNum: 12
			},

			{
				imgSrc: "img/huoying.jpg",
				animateName: "火影忍者",
				updateNum: 24
			}, {
				imgSrc: "img/wixos.jpg",
				animateName: "WIXOSS",
				updateNum: 12
			}, {
				imgSrc: "img/qirechuanqi.jpg",
				animateName: "七人传奇",
				updateNum: 12
			}, {
				imgSrc: "img/ouxiangdashi.jpg",
				animateName: "偶像大师灰姑娘",
				updateNum: 12
			}, {
				imgSrc: "img/qimunaxiong.jpg",
				animateName: "齐木楠雄的灾难",
				updateNum: 20
			}, {
				imgSrc: "img/gaobai.jpg",
				animateName: "告白实行委员会",
				updateNum: 12
			}, {
				imgSrc: "img/huxian.jpg",
				animateName: "妖狐小红娘",
				updateNum: 12
			}

		],
		[{
				imgSrc: "img/BEM.jpg",
				animateName: "B E M 第一季",
				updateNum: 7
			},

			{
				imgSrc: "img/anzhiju.jpg",
				animateName: "闇芝居 第7季",
				updateNum: 5
			}, {
				imgSrc: "img/binghaizhanji.jpg",
				animateName: "冰海战记",
				updateNum: 6
			}, {
				imgSrc: "img/gaoxiaoxinggeju.jpg",
				animateName: "高校星歌剧",
				updateNum: 8
			}, {
				imgSrc: "img/liushoushenbing.jpg",
				animateName: "猎兽神兵",
				updateNum: 9
			}, {
				imgSrc: "img/pingfanzhiye.jpg",
				animateName: "平凡职业世界最强",
				updateNum: 5
			}, {
				imgSrc: "img/zhilongmicheng.jpg",
				animateName: "智龙迷城",
				updateNum: 2
			}, {
				imgSrc: "img/zhiyaozhangdekeai.jpg",
				animateName: "只要长得可爱",
				updateNum: 7
			}

		],
		[

			{
				imgSrc: "img/COP-CRAFT.jpg",
				animateName: "COP CRAFT",
				updateNum: 12
			},

			{
				imgSrc: "img/YU-NO.jpg",
				animateName: "詠唱愛的少女",
				updateNum: 24
			}, {
				imgSrc: "img/heisesiyecao.jpg",
				animateName: "黑色四叶草",
				updateNum: 12
			}, {
				imgSrc: "img/moshuxuejie.jpg",
				animateName: "魔术学姐",
				updateNum: 12
			}, {
				imgSrc: "img/nizaonanlme.jpg",
				animateName: "你遭难了吗",
				updateNum: 12
			}, {
				imgSrc: "img/shaonianaba.jpg",
				animateName: "少年阿贝 GO!GO!",
				updateNum: 20
			}, {
				imgSrc: "img/zuanshiwangpai.jpg",
				animateName: "钻石王牌",
				updateNum: 12
			}

		],
		[{
				imgSrc: "img/jianshenshaonv.jpg",
				animateName: "健身少女",
				updateNum: 12
			},

			{
				imgSrc: "img/astesila.jpg",
				animateName: "彼方的阿斯特拉",
				updateNum: 24
			}, {
				imgSrc: "img/TRY-KNIGHTS.jpg",
				animateName: "TRY KNIGHTS",
				updateNum: 12
			}

		],
		[

			{
				imgSrc: "img/CAROLE-&-TUESDAY.jpg",
				animateName: "CAROLE...",
				updateNum: 12
			},

			{
				imgSrc: "img/jiapaligongyuan.jpg",
				animateName: "加帕里公园",
				updateNum: 24
			}, {
				imgSrc: "img/xiangjiaodashu.jpg",
				animateName: "香蕉怪大叔",
				updateNum: 12
			}, {
				imgSrc: "img/chonglaibamowang.jpg",
				animateName: "重来吧魔王大人",
				updateNum: 12
			}

		],
		[

			{
				imgSrc: "img/shijiyuan.jpg",
				animateName: "石纪元",
				updateNum: 12
			},

			{
				imgSrc: "img/beizengyudeweilai.jpg",
				animateName: "GIVEN被贈與",
				updateNum: 24
			}, {
				imgSrc: "img/jiejiaomozu.jpg",
				animateName: "街角魔族",
				updateNum: 12
			}, {
				imgSrc: "img/nvgaozhongsheng.jpg",
				animateName: "女高的虛度日常",
				updateNum: 12
			}

		],
		[

			{
				imgSrc: "img/MIX.jpg",
				animateName: "MIX 第二季",
				updateNum: 6
			},

			{
				imgSrc: "img/dixiacheng.jpg",
				animateName: "在地下城偶遇",
				updateNum: 10
			}, {
				imgSrc: "img/moukexue.jpg",
				animateName: "某科学一方通行",
				updateNum: 12
			}, {
				imgSrc: "img/nuannuanriji.jpg",
				animateName: "暖暖日记",
				updateNum: 12
			}, {
				imgSrc: "img/putonggongji.jpg",
				animateName: "普通攻击是二连",
				updateNum: 12
			}, {
				imgSrc: "img/huanluianshijie.jpg",
				animateName: "慌乱时节的少女",
				updateNum: 20
			}, {
				imgSrc: "img/shuiguolanzi.jpg",
				animateName: "水果篮子",
				updateNum: 12
			}, {
				imgSrc: "img/yanyanxiaofangdui.jpg",
				animateName: "炎炎消防队",
				updateNum: 12
			}
		],
		[

			{
				imgSrc: "img/aiwanguishou.jpg",
				animateName: "爱玩怪兽",
				updateNum: 12
			},

			{
				imgSrc: "img/guimiezhiren.jpg",
				animateName: "鬼灭之刃",
				updateNum: 24
			}, {
				imgSrc: "img/meimiaopindao.jpg",
				animateName: "美妙频道",
				updateNum: 12
			}, {
				imgSrc: "img/moyanshouji.jpg",
				animateName: "魔眼收集列车",
				updateNum: 12
			}, {
				imgSrc: "img/shikuantaotuo.jpg",
				animateName: "逃脱游戏",
				updateNum: 12
			}, {
				imgSrc: "img/huoying.jpg",
				animateName: "新时代博人传",
				updateNum: 12
			}
		]
	];

	createParter1(0);
	$(".parter1_list>li").click(function() {
		createParter1($(this).index());
	})

	function createParter1(x) {
		$(".parter1_content").empty();
		var n = x;
		var $li = $("<li></li>");
		var $div1 = $("<div class='parter1_bottom'></div>");
		arrNews[n].forEach(function(val) {
			var $ele = $('<div class="parter1_bottom_demo">' +
				'<img src="' + val["imgSrc"] + '" />' +
				'<p class="parter1_p1">' + val["animateName"] + '</p>' +
				'<p class="parter1_p2">更新至 <span> 第' + val["updateNum"] + '画</span></p>' +
				'</div>')
			$div1.append($ele);
		})
		$li.append($div1);
		$(".parter1_content").append($li);

	}

	/***************第二部分连载漫画*************/

	var arrtitle2 = ["为你推荐", "冒险热血", "未来科幻", "少女爱情", "心理悬疑", "完结经典"];

	for(var i = 0; i < arrtitle2.length; i++) {
		var $li = $("<li></li>");
		$li.text(arrtitle2[i]);
		$(".parter2_list").append($li);
	}

	/********************* 第二部分 内容部分parter2_content*************************/

	arrNews2 = [
		[{
			imgSrc2: "img/heizhishi.jpg",
			animateName2: "黑执事",
			updateNum2: 135
		}, {
			imgSrc2: "img/yinhun.jpg",
			animateName2: "银魂",
			updateNum2: 664
		}, {
			imgSrc2: "img/haizuiwang.jpg",
			animateName2: "海贼王",
			updateNum2: 889
		}, {
			imgSrc2: "img/youxiwang.jpg",
			animateName2: "游戏王",
			updateNum2: "已完结"
		}],

		[{
			imgSrc2: "img/dajian.jpg",
			animateName2: "大剑",
			updateNum2: 9
		}, {
			imgSrc2: "img/guimiezren.jpg",
			animateName2: "鬼灭之刃",
			updateNum2: 170
		}, {
			imgSrc2: "img/quanyuanaxiuluo.jpg",
			animateName2: "拳愿阿修罗",
			updateNum2: 189
		}, {
			imgSrc2: "img/yingxiongxueyuan.jpg",
			animateName2: "我的英雄学院",
			updateNum2: 81
		}],
		[{
			imgSrc2: "img/Fate-Grand-Order.jpg",
			animateName2: "Fate/Grand Order",
			updateNum2: 125
		}, {
			imgSrc2: "img/dagongbamowang.jpg",
			animateName2: "打工吧魔王",
			updateNum2: 46
		}, {
			imgSrc2: "img/doupocangqiong.jpg",
			animateName2: "斗破苍穹",
			updateNum2: 162
		}, {
			imgSrc2: "img/zhongjiezhitianshi.jpg",
			animateName2: "终结炽天使",
			updateNum2: "81"
		}],
		[{
			imgSrc2: "img/chuanyueshikongdeshaonv.jpg",
			animateName2: "穿越时空的少女",
			updateNum2: 112
		}, {
			imgSrc2: "img/henchunhenchun.jpg",
			animateName2: "很纯很纯的爱恋",
			updateNum2: 32
		}, {
			imgSrc2: "img/jinzhilianai.jpg",
			animateName2: "禁止恋爱的世界",
			updateNum2: 123
		}, {
			imgSrc2: "img/nvyouzujie.jpg",
			animateName2: "租借女友",
			updateNum2: 104
		}],
		[{
			imgSrc2: "img/guowangyouxi.jpg",
			animateName2: "国王游戏",
			updateNum2: 26
		}, {
			imgSrc2: "img/mingzhentankenan.jpg",
			animateName2: "名侦探柯南",
			updateNum2: 1040
		}, {
			imgSrc2: "img/mingzhijingchaju.jpg",
			animateName2: "明智警察部事件",
			updateNum2: 30
		}, {
			imgSrc2: "img/youxiwang.jpg",
			animateName2: "欺诈游戏",
			updateNum2: 203
		}],
		[{
			imgSrc2: "img/sishen.jpg",
			animateName2: "死神",
			updateNum2: "已完结"
		}, {
			imgSrc2: "img/touwenziD.jpg",
			animateName2: "头文字D",
			updateNum2: "已完结"
		}, {
			imgSrc2: "img/shengdoushixingshi.jpg",
			animateName2: "圣斗士星矢",
			updateNum2: "已完结"
		}, {
			imgSrc2: "img/youyoubaishu.jpg",
			animateName2: "幽游白书",
			updateNum2: "已完结"
		}]

	];

	createParter2(0);
	$(".parter2_list>li").click(function() {
		createParter2($(this).index());
	})

	function createParter2(x) {

		$(".parter2_content").empty();
		var parter2_n = x;
		var $parter2_li = $("<li></li>");
		var $parter2_div1 = $("<div class='parter1_bottom'></div>");
		arrNews2[parter2_n].forEach(function(val) {
			var $ele2 = $('<div class="parter2_bottom_demo">' +
				'<img src="' + val["imgSrc2"] + '" />' +
				'<p class="parter2_bottom_p1">' + val["animateName2"] + '</p>' +
				'<p class="parter2_bottom_p2">更新至' + val["updateNum2"] + '</p>' +
				'</div>')
			$parter2_div1.append($ele2);
		})
		$parter2_li.append($parter2_div1);
		$(".parter2_content").append($parter2_li);

	}

	/***************第三部分饭漫音乐*************/

	var arrtitle3 = ["为你推荐", "内地", "港台", "欧美", "日本", "韩国"];

	for(var i = 0; i < arrtitle3.length; i++) {
		var $li = $("<li></li>");
		$li.text(arrtitle3[i]);
		$(".parter3_list").append($li);
	}

	arrNews3 = [

		[{
			imgSrc3: "img/huoyingrenzhe.jpg",
			animateName3: "ブルーバード（青鸟）",
			singer: "生物股长"
		}, {
			imgSrc3: "img/aLIEz.jpg",
			animateName3: "aLIEz",
			singer: "澤也弘之"
		}, {
			imgSrc3: "img/guanlangaoshou.jpg",
			animateName3: "好想大声说喜欢你",
			singer: "BAAD"
		}, {
			imgSrc3: "img/shumabaobei.jpg",
			animateName3: "Butter-Fly",
			singer: "和田光司"
		}],
		[{
			imgSrc3: "img/gebifeiqiu.jpg",
			animateName3: "隔壁非酋",
			singer: "折腾5号"
		}, {
			imgSrc3: "img/modaozushi.jpg",
			animateName3: "魔道祖师",
			singer: "老子叫魏无羡"
		}, {
			imgSrc3: "img/nazha.jpg",
			animateName3: "哪吒",
			singer: "籽三"
		}, {
			imgSrc3: "img/xiaohuanxi.jpg",
			animateName3: "小欢喜",
			singer: "没有理由"
		}],
		[{
			imgSrc3: "img/qilixiang.jpg",
			animateName3: "七里香",
			singer: "周杰伦"
		}, {
			imgSrc3: "img/qianlizhiwai.jpg",
			animateName3: "千里之外",
			singer: "周杰伦"
		}, {
			imgSrc3: "img/wobupei.jpg",
			animateName3: "我不配",
			singer: "周杰伦"
		}, {
			imgSrc3: "img/yeyepaodecha.jpg",
			animateName3: "爷爷拍的茶",
			singer: "周杰伦"
		}],
		[{
			imgSrc3: "img/Ritual.jpg",
			animateName3: "Ritual",
			singer: "Rita Ora,Tiesto和Jonas Blue"
		}, {
			imgSrc3: "img/Ready-For-It.jpg",
			animateName3: "...Ready For It",
			singer: "Taylor Swift"
		}, {
			imgSrc3: "img/senorita.jpg",
			//imgSrc3: "img/Señorita.jpg",
			animateName3: "Señorita",
			singer: "萌德X卡妹"
		}, {
			imgSrc3: "img/loverMV.jpg",
			animateName3: "莓莓",
			singer: "loverMV"
		}],
		[{
			imgSrc3: "img/shenshenbeinixiyin.jpg",
			animateName3: "深深被你吸引",
			singer: "七龙珠"
		}, {
			imgSrc3: "img/qianqianqianshi.jpg",
			animateName3: "前前前世",
			singer: "你的名字"
		}, {
			imgSrc3: "img/orian.jpg",
			animateName3: "orian",
			singer: "米津玄师"
		}, {
			imgSrc3: "img/unravel.jpg",
			animateName3: "unravel",
			singer: "TK"
		}],
		[{
			imgSrc3: "img/lenged.jpg",
			animateName3: "传说 lenged",
			singer: "指甲"
		}, {
			imgSrc3: "img/FIESTAR-_-One-More.jpg",
			animateName3: "FIESTAR",
			singer: "One-More"
		}, {
			imgSrc3: "img/Punch---Done-For-Me.jpg",
			animateName3: "DoneForMe",
			singer: "DoneForMe"
		}, {
			imgSrc3: "img/trouble-maker.jpg",
			animateName3: "trouble-maker",
			singer: "金泫雅X张贤胜"
		}]

	];

	createParter3(0);
	$(".parter3_list>li").click(function() {

		createParter3($(this).index());

	})

	function createParter3(x) {
		$(".parter3_content").empty();
		var parter3_n = x;
		var $parter3_li = $("<li></li>");
		var $parter3_div1 = $("<div class='parter3_bottom'></div>");
		arrNews3[parter3_n].forEach(function(val) {
			var $ele3 = $('<div class="parter3_bottom_demo">' +
				'<img src="' + val["imgSrc3"] + '" />' +
				'<p class="parter3_bottom_p1">' + val["animateName3"] + '</p>' +
				'<p class="parter3_bottom_p2">' + val["singer"] + '</p>' +
				'</div>')
			$parter3_div1.append($ele3);
		})
		$parter3_li.append($parter3_div1);
		$(".parter3_content").append($parter3_li);

	}

	/***************第四部分特色漫评*************/

	var arrtitle4 = ["为你推荐", "专题", "番剧", "漫画", "音乐", "娱乐吐槽"];

	for(var i = 0; i < arrtitle4.length; i++) {
		var $li = $("<li></li>");
		$li.text(arrtitle4[i]);
		$(".parter4_list").append($li);
	}

	arrNews4 = [

		[{
				imgSrc4: "img/jiaruyoumeimei.jpg",
				animateName4: "如果有妹妹就好了",
				num: "9.0分",
				user: "BULE",
				toDate: "2017-12-19",
				title: "如果能被认可就好了",
				content: "其实看完了这不番剧之后有一个想法，那就是追番不能够真正地去体味作者的想法。只有在一种把番剧当做观看的心态的时候，可能体悟才会更深。..."

			}, {
				imgSrc4: "img/guideng.jpg",
				animateName4: "鬼灯的冷彻",
				num: "8.6分",
				user: "小叮当",
				toDate: "2017-12-18",
				title: "鬼灯的冷彻",
				content: "重温这部动漫，依旧喜欢鬼灯大人，这次看的时候查了一下才知道，标题中的“鬼灯”是主人公的名字，“冷彻”则是日语中“不被感情左右，能够冷静看清事物”的意思。整 ..."

			}

		],

		[{
				imgSrc4: "img/chunqingfangdong.jpg",
				animateName4: "纯情房东俏房客",
				num: "9.0分",
				user: "龙晓飞",
				toDate: "2017-8-22",
				title: "后宫鼻祖哇",
				content: "初中那会第一次看到，当时还看的模模糊糊的，现在能当爹的年纪重温起来却别有滋味。也许下一次回味是五年、十年甚至不会再回味了，但过去的感觉会一直保留下来。..."

			}, {
				imgSrc4: "img/daojianshenyu.jpg",
				animateName4: "刀剑神域",
				num: "9.3分",
				user: "忆梦-苍穹",
				toDate: "2018-6-15",
				title: "刀剑的妹妹后宫",
				content: "其实，我认为这部番最可怜的人是小直，我也是一个有哥哥的人，小的时候我们形影不离，但随着时间的推移，我们渐行渐远了，想要找回以前的他，却发现自己无力回天 ..."

			}

		],

		[{
				imgSrc4: "img/OVERLORD.jpg",
				animateName4: "OVER LORD",
				num: "9.1分",
				user: "蛇之父",
				toDate: "2019-8-8",
				title: "第四季已经确认",
				content: "2019年8月5号Overlord动画光盘德国发行商KSM在twitter上说在（AnimagiC）上的Overlord主题活动上，嘉宾宣布了Overlord有..."

			}, {
				imgSrc4: "img/REconglingkaishi.jpg",
				animateName4: "RE：从零开始异世界生活",
				num: "8.6分",
				user: "优秀的咸鱼",
				toDate: "2019-8-18",
				title: "486只是个普通人，不是龙傲天的男主角",
				content: "看到很多人对486很反感，觉得这不是一个主角应有的样子，或许因为我们没有，也不可能 ......"

			}

		],

		[{
				imgSrc4: "img/yifangtongxing.jpg",
				animateName4: "某科学的一方通行",
				num: "9.0分",
				user: "御坂炮琴",
				toDate: "2018-2-19",
				title: "Lv.5超能力者",
				content: "动画换画风，这个不必担心。而且科方都动画化了肯定山路新也会认真起来的。而且剧情还有河马的大纲在那里..."

			}, {
				imgSrc4: "img/fate.jpg",
				animateName4: "Fate/Grand Order",
				num: "8.6分",
				user: "ROCKMANLAB洛家",
				toDate: "2018-5-11",
				title: "茗于花海，只为樱落",
				content: "首先恭喜b站上架HF第一章，作为一个樱厨开心到飞起，一本满足！ 剧场版第一章我个人是非常满意的，真的很感谢监督须藤友德，他大 ..."

			}

		],

		[{
				imgSrc4: "img/nidemingzi.jpg",
				animateName4: "前前前世",
				num: "9.0分",
				user: "范宝鑫",
				toDate: "2019-8-30",
				title: "超喜欢听前前前世",
				content: "看完了你的名字这个动画后，喜欢上了梦灯笼和前前前世这两首歌，也喜欢立花泷和宫水三叶互换身体的剧情，本人去日本旅行还想去一下须贺神社..."

			}, {
				imgSrc4: "img/gaodaseed.jpg",
				animateName4: "晓之车",
				num: "8.6分",
				user: "老坛酸菜",
				toDate: "2018-12-18",
				title: "高达seed经典",
				content: "《机动战士高达SEED》是高达系列在2002年至2003年度放映的动画。续作为《机动战士高达SEED Destiny》在2004年播放 ..."

			}

		],
		[{
				imgSrc4: "img/tucao.jpg",
				animateName4: "李诞吐槽",
				num: "9.0分",
				user: "柯南是个死神",
				toDate: "2018-12-19",
				title: "吐槽的很经典",
				content: "每次看李诞吐槽都觉得很开心，仔细想想其实他有表达一些思想在里面，吐槽是一种态度..."

			}, {
				imgSrc4: "img/papijiang.jpg",
				animateName4: "PAPI酱",
				num: "8.6分",
				user: "到处找茬的闰土",
				toDate: "2018-5-28",
				title: "短视频吐槽",
				content: "Papi酱是一个集美貌与才华于一身的女子，每期看PAPI酱更新短视频都觉得好搞笑..."

			}

		]

	]

	createParter4(0);
	$(".parter4_list>li").click(function() {
		createParter4($(this).index());

	})

	function createParter4(x) {

		$(".parter4_content").empty();
		var parter4_n = x;
		var $parter4_li = $("<li></li>");
		var $parter4_div1 = $("<div class='parter4_bottom'></div>");
		arrNews4[parter4_n].forEach(function(val) {
			var $ele4 = $('<div class="parter4_bottom_demo">' +
				'<img src="' + val["imgSrc4"] + '" />' +
				'<div class="parter4_bottom_right">' +
				'<div class="parter4_bottom_right_top">' +
				'<h3>"' + val["animateName4"] + '"</h3>' +
				'<img src="img/bishu.png" />' +
				'</div>' +
				' <div class="parter4_bottom_right_mid">' +
				'<img src="img/star.png" />' +
				'<img src="img/star.png" />' +
				'<img src="img/star.png" />' +
				'<img src="img/star1.png" />' +
				'<img src="img/star1.png" />' +
				'<p>"' + val["num"] + '"</p>' +
				'</div>' +
				'<div class="parter4_bottom_right_mid2">' +
				'<img src="img/touxiang.png" />' +
				'<a href="">"' + val["user"] + '"</a>' +
				'<p>"' + val["toDate"] + '"</p>' +
				'</div>' +
				'<h3>"' + val["title"] + '"</h3>' +
				'<p>"' + val["content"] + '"</p>' +
				'</div>' +
				'</div>')
			$parter4_div1.append($ele4);
		})
		$parter4_li.append($parter4_div1);
		$(".parter4_content").append($parter4_li);

	}

})