
var background = ['#99213a', '#36489e', '#7d1516', '#644749', '#b62b26', '#0e2f50', '#264468', '#4b4e21', '#316767', '#107347', '#a03a36', '#2d132c', '#317963', '#1d2d3d'];

var details = ['#de304b', '#3a66b1', '#7d1516', '#b2685b', '#d84e2a', '#529292', '#5d9b58', '#757831', '#5b9a7f', '#1ba866', '#ce5a41', '#510a32', '#f69520', '#de304b'];

var event = ['#f15e64', '#597cbe', '#ed1e24', '#dc9965', '#f5b716', '#74b8a9', '#2e7062', '#9a9a38', '#8eb9a8', '#55b947', '#e97a67', '#821334', '#fbb515', '#f15e64'];

var cat = ['anim', 'anub', 'cres', 'dram', 'eqiq', 'ergo', 'foot', 'hc', 'ire', 'kal', 'lens', 'ps', 'psy', 'xven'];
var cunt = 0;
var cunt2 = 0;
var categorydetails;
var alleventsdetail;
var eventdetails= [];
var allschedule;
var dayschedule = [];

function randomc(){

	return	Math.floor(Math.random()*11);

}

$(document).ready(function(){

	$('#cate').on('click', function(){
		// console.log("hello")

		$('#category').removeClass('nactive');
		$('#category').addClass('active');
		categorydetail();
		
		
		
		
	})

	$('#teambt').on('click', function(){
		$('.team-row').removeClass('nactive');
		$('.team-row').addClass('active');
	})

	$('#sch').on('click', function(){
		// console.log("hello")

		$('#schedule-cont').removeClass('nactive');
		$('#schedule-cont').addClass('box');
		$('#schedule-cont').addClass('effect5');
		schedule();
	})

	$('.grid-item').on('click', function(){
		$('#view-schd').addClass('nactive');
		// $('.grid-cont').removeClass('grid-cont');
		var day = $(this).attr('id');
		// console.log(day)
		daywiseevent(day.substring(3));
		$('#event-schedule').removeClass('nactive')
		$('#event-schedule').addClass('active')
		// $('#schedule-day-cont').empty()
		$('#schedule-day-cont').each(function(i, ele){
			console.log(i +": "+ele)
		})
		$('#day-title').text(day)
		dayschedule.forEach(function(sch){
			console.log("chal rha hai");
			// console.log(sch);
		$('#schedule-day-cont').append("<div class='grid-schd-cont'> <div class='grid-schd-item'>"+sch.etime+" - "+sch.stime+"</div><div class='grid-schd-item'><i class='fa fa-calendar' style='padding-right: 1em;'></i><strong>&nbsp;&nbsp;&nbsp;"+sch.ename+"</strong><br><i class='fa fa-compass' style='padding-right: 1em;'></i>&nbsp;"+sch.venue+"<br>"+sch.round+"</div></div>")
		})
		
	})

	$('#back-schd').on('click', function(){
		$('#event-schedule').removeClass('active')
		$('#event-schedule').addClass('nactive')
		$('#view-schd').removeClass('nactive')
		$('#view-schd').addClass('active')
		$('#schedule-day-cont').empty()
	})

	$('.downnav').on('click', function(){
		
		cunt2 = 0;
		$('#left-event').removeClass(cat[cunt++])
		if(cunt==14){
			cunt = 0;
		}
		$('.logo').css('background-color', background[cunt])
		$('#right-event').css('background-color', details[cunt])
		$('.events-name').css('background-color', event[cunt])
		console.log(cat[cunt])
		$('#left-event').addClass(cat[cunt])
		$('#category-detail').css('display', 'block')
		$('#event-detail').css('display', 'none')
		$('#category-name').text(categorydetails[cunt].cname)
		$('#cat-desc').text(categorydetails[cunt].cdesc)
		searchevent(categorydetails[cunt].cid);
		$('#event-name').text(eventdetails[cunt2].ename)
	})

	$('.rightnav').on('click', function(){
		// console.log(eventdetails)
		if(cunt2 == eventdetails.length){
			cunt2=-1;
		}
		$('#event-name').text(eventdetails[++cunt2].ename)
		console.log(cunt2)
	})

	$('.leftnav').on('click', function(){
		// console.log("hello")

		$('#event-name').text(eventdetails[--cunt2].ename)
		if(cunt2==0){
			cunt2 = eventdetails.length;
		}
		console.log(cunt2)
	})

	$('.upnav').on('click', function(){
		

		
		cunt2 = 0;
		$('#left-event').removeClass(cat[cunt--])

		if(cunt==-1){
			cunt = 13;
		}
		// console.log(cunt)
		$('.logo').css('background-color', background[cunt])
		$('#right-event').css('background-color', details[cunt])
		$('.events-name').css('background-color', event[cunt])
		console.log(categorydetails);
		// console.log(cat[cunt])
		$('#left-event').addClass(cat[cunt])
		$('#category-detail').css('display', 'block')
		$('#event-detail').css('display', 'none')
		$('#category-name').text(categorydetails[cunt].cname)
		$('#cat-desc').text(categorydetails[cunt].cdesc)
		searchevent(categorydetails[cunt].cid);
		$('#event-name').text(eventdetails[cunt2].ename)

	})	

	$('#event-name').on('click', function(){
		$('#category-detail').css('display', 'none')
		$('#event-detail').css('display', 'block')
		$('#event-name-title').text(eventdetails[cunt2].ename)
		$('#event-desc').text(eventdetails[cunt2].edesc)
		$('#team-size').text("Max Team Size: "+eventdetails[cunt2].emaxteamsize)
		$('#poc').html("Contact Name: "+eventdetails[cunt2].cntctname+"<br/>Contact No: "+eventdetails[cunt2].cntctno)
		console.log(eventdetails[cunt2])
	})

	$('.close').on('click', function(){
		var par = $(this).parent().closest('div').attr('id')
		$('#'+par).removeClass('active')
		$('#'+par).addClass('nactive')
	})

	$('#open').on('click', function(){
		$('#left').addClass('zoomOutLeft')
		$('#right').addClass('zoomOutRight')
	})

})

//Getting Category Details
function categorydetail(){
	$.ajax({
		type: 'GET',
		url: 'http://gamma.mitrevels.in/api/categories/',
		success: function(category) {
			category.data.sort(predicateBy('cname'))
			// console.log(category.data[14].cid)
			categorydetails = category.data;
			categorydetails.splice(14, 1)
			categorydetails.splice(11,1)
		
		// }
			// console.log(categorydetails)
			eventdetail();
			$('#category-name').text(categorydetails[cunt].cname)
			$('#cat-desc').text(categorydetails[cunt].cdesc)
			
		}
	})

}

function eventdetail(){
	$.ajax({
		type: 'GET',
		url: 'http://gamma.mitrevels.in/api/events/',
		success: function(events) {
			// console.log(events.data[cunt])
			events.data.sort(predicateBy('ename'))
			// category.data.forEach(function(ele){
			// 	console.log(ele.cname)
			// 	$('#category-name').text(ele.cname)
			// })
			alleventsdetail = events.data;
			console.log(alleventsdetail)
			searchevent(categorydetails[cunt].cid)
			$('#event-name').text(eventdetails[cunt2].ename)
			
		}
	})
}

function schedule(){
	$.ajax({
		type: 'GET',
		url: 'http://gamma.mitrevels.in/api/schedule/',
		success: function(scheduledata){
			allschedule = scheduledata.data;
		}
	})
}

function daywiseevent(day){
	var c = 0;
	dayschedule.length = 0;
	allschedule.forEach(function(scheduled){
		if(scheduled.day == day){
			dayschedule[c++] = scheduled;
		}

	})
	console.log(dayschedule)
}


function predicateBy(prop){
   return function(a,b){
      if( a[prop] > b[prop]){
          return 1;
      }else if( a[prop] < b[prop] ){
          return -1;
      }
      return 0;
   }
}


function searchevent(i){
	var c = 0;
	// eventdetails.length = 0;
	// eventdetails.splice(0, eventdetails.length);
	// console.log(eventdetails)
	alleventsdetail.forEach(function(eventsd){
		if(eventsd.cid==i){
			// console.log(eventsd)
			eventdetails[c++] = eventsd;
			
		}
	})
	console.log(eventdetails)
}

