<style lang="sass" scoped>
	.sign {
		.sign_img img{
			width: 100%;
			height: auto;
			display: block;
		}
		.sign_box{
			padding: 1.5rem;
			font-size: 1.6rem;
			>span{float: left;}
			.sign_next{
				i{
					font-size: 2rem;
					font-weight: bold;
					transition: all .3s;
				}
				i:active{
					color: #d00204;
				}
				i:first-child{
					transform: rotate(180deg);
					display: inline-block;
					
				}
			}
			.sign_next{
				float: right;
				em{
					font-style: normal;
				}
			}
		}
		#js-qiandao-main{
			padding: 1.5rem;
			font-size: 1.6rem;
			.week{
				overflow: hidden;
				background: #ffeded;
				padding: 0.5rem 0;
				ul li{
					float: left; 
					width: 14.28%;
					color: #f36b6b;
					text-align: center;
				}
			}
			.qiandao-list{
				background: red;
				li{
					float: left;
					width: 14.28%;
					text-align: center;
					line-height: 4rem;
					text-align: center;
					position: relative;
				}
				li.iconfont{
					font-size: 1.6rem;
				}
				li.current.iconfont:before{
					font-size: 7rem;
					bottom: -1rem;
				}
				li.current:before{
					color: #5fca3a;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
				}
				li.notCur{
					color: #ccc;
				}
			}
		}	
	}
</style>

<template>
	<div class="sign">
		<div class="sign_img">
			<img src="images/sign.png"/>
		</div>
		<div class="sign_box">
			<span>签到日历</span>
			<div class="sign_next">
				<i class="iconfont" v-touch:tap="next()">&#xe628;</i>
				<span>{{yearShow}} - <em v-if="monthShow<10">0</em>{{monthShow}}</span>
				<i class="iconfont" v-touch:tap="prev()">&#xe628;</i>
			</div>
			
		</div>
		<div class="qiandao-main" id="js-qiandao-main">
			<div class="week">
				<ul>
					<li>日</li>
					<li>一</li>
					<li>二</li>
					<li>三</li>
					<li>四</li>
					<li>五</li>
					<li>六</li>
				</ul>
			</div>
			<ul class="qiandao-list" id="js-qiandao-list">
				<li v-for="item in dataArr" :class="{'notCur':item.notCur,'current iconfont icon-gou':item.data==item.sign}" track-by="$index">{{item.data}}</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	//var apiAddr = require('../../../src/network');
	//var actions = require('../../../libs/js/vuex/actions');
	module.exports = {
		data:function(){
			return {
				Month:1,
				Year:0,
				dataArr:[],
				signArray:[],	// 假设已经签到的
				yearShow:0,
				monthShow:0
			}
		},
//		vuex:{
//			actions:actions
//		},
		methods:{
			signFun:function(k) {
				this.dataArr = [];
		        var myDate = new Date(),
		       		curYear = myDate.getFullYear(),
		        	curMonth = myDate.getMonth();
		        if((this.Month+curMonth) > 12){
		        	this.Month=-curMonth+1;
		        	this.Year++;
		        }else if((this.Month+curMonth) < 1){
		        	this.Month=-curMonth+12;
		        	this.Year--;
		        }
		        var monthFirst = new Date(curYear+this.Year, parseInt(curMonth+(this.Month-1)), 1).getDay(),		//获取到当前是几号
		        	prevMoth =  new Date(curYear+this.Year, parseInt(curMonth + this.Month-1), 0).getDate(),  	//获取到上一个月天数
		        	nextMoth = new Date(curYear+this.Year, parseInt(curMonth+this.Month+1), 0).getDate(),		//获取到下一个月天数
		        	d = new Date(curYear+this.Year, parseInt(curMonth + this.Month), 0);
		        this.yearShow = curYear+this.Year;
		        this.monthShow = parseInt(curMonth + this.Month);
		        var totalDay = d.getDate(); //获取当前月的天数
		        var newArr = this.getDay(prevMoth);
		        for(var i=0;i<monthFirst;i++){		//将上个月最后要显示的日期等信息存到数组里
		        	var obj = {data:newArr[i],notCur:true}
		        	this.dataArr.push(obj);
		        }
		        for (var i = 1; i <= totalDay; i++) {	//将当前月份要显示的日期等信息存到数组
		        	var obj = {data:i,notCur:false}
		        	if(this.signArray){
		        		for(var j=0;j<this.signArray.length;j++){	//获取到当前月份已签到的天数并为对象赋值
			        		if(i == this.signArray[j]){
			        			obj.sign = this.signArray[j];
			        		}
			        	}
		        	}
		        	this.dataArr.push(obj);
		        }
		        var beLeft = 42 - this.dataArr.length;
				for(var i=1;i<=beLeft;i++){				//将下月要显示的日期等信息存到数组
					var obj = {data:i,notCur:true};
					this.dataArr.push(obj);
				}
			},
			getDay:function(num){
				var arr = [];
				for(var i=1;i<=num;i++){
					arr.push(i)
				}
				arr.reverse();
				return arr;
			},
			ajaxFun(mon,year){
				var $this = this;
				
				apiAddr.getMemberSignList.get({month:mon,year:year}).then(function(data){
					$this.$set('signArray',data.data.data.memberSignList);
					$this.signFun(mon);
				},function(msg){
					alert('数据请求失败...');
				});
			},
			next:function(){
				this.$set('signArray',[]);
				this.signFun(--this.Month);
				this.ajaxFun(this.monthShow,this.yearShow);
			},
			prev:function(){
				this.$set('signArray',null);
				this.signFun(++this.Month);
				this.ajaxFun(this.monthShow,this.yearShow);
			}
		},
		ready:function(){
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
			this.signFun(this.Month);
			this.ajaxFun(month+1,year);
			//this.hideAllSearchBar();
			//this.hideAllTabBar();
			//frameScript.setTitle('签到日历');
		}
	}
</script>