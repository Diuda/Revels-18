
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


		$('#category-detail').remove()
		$('#event-detail').remove()
		$('#category').removeClass('nactive');
		$('#category').addClass('active');
		categorydetail();

		
		
		
		
	})

	$("#conv").on('click', function(){
    // document.getElementById('contactus').style.display="block";
    $('#contactus').removeClass('nactive')
    $('#contactus').addClass('active')
    // document.getElementById('contact').style.display="none";
    document.getElementById('dabba').style.display="block";
    document.getElementById('ct').style.display="inline";
    document.getElementById('st').style.display="inline";

  });

	$('#teambt').on('click', function(){
		$('.team-row').removeClass('nactive');
		$('.team-row').addClass('active');
	})

	$('#conv').on('click', function(){
		// console.log('hello hi bye')
		// $('#contact-container').css('display', 'block')
	})


	$('#sponsbtn').on('click', function(){
		$('.sponsors').removeClass('nactive');
		$('.sponsors').addClass('active');
	})

	$('.sclose').on('click', function(){
		
		$('.sponsors').removeClass('active')
		$('.sponsors').addClass('nactive')
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


	$('#back-schd-home').on('click', function(){
		$('#schedule-cont').removeClass('active')
		$('#schedule-cont').addClass('nactive')
	})

	$('.downnav').on('click', function(){
		

		$('#event-detail').remove()
		$('#category-detail').remove()
		cunt2 = 0;
		// $('.logo-img-cont').removeClass(cat[cunt++])
		$('.logo-img-cont').remove();
		// $('#event-detail').remove();
		cunt++;
		// $('.logo-img-cont').removeClass('fadeInUp')
		// $('.logo-img-cont').addClass('fadeOutUp')
		if(cunt==14){
			cunt = 0;
		}
		$('.logo').css('background-color', background[cunt])
		
		$('.events-name').css('background-color', event[cunt])
		console.log(cat[cunt])
		// $('.logo-img-cont').addClass(cat[cunt])
		$('#left-event').append('<div class="logo-img-cont animated fadeInUp '+cat[cunt]+'"></div>')
		$('#right-event').append('<div id="category-detail" class="cont-c animated"><span id="category-name" class="title-c">'+categorydetails[cunt].cname+'</span><span id="cat-desc">'+categorydetails[cunt].cdesc+'</span></div>')
		// $('.logo-img-cont').addClass('fadeOutUp')
		// $('.logo-img-cont').addClass('fadeInUp')
		$('#right-event').css('background-color', details[cunt])
		$('#category-detail').css('display', 'block')
		searchevent(categorydetails[cunt].cid);
		$('#event-name').text(eventdetails[cunt2].ename)

	})

	$('.rightnav').on('click', function(){
		// console.log(eventdetails)
		$('#event-detail').remove()
		$('#category-detail').remove()
		
		// $('#event-detail').addClass('slideInRight')
		// cunt2++;
		if(cunt2 == eventdetails.length-1){
			// console.log("whadup")
			cunt2=-1;
		}
		
		$('#right-event').append('<div id="event-detail" class="cont-c animated slideInRight"><span id="event-name-title" class="title-c">'+eventdetails[++cunt2].ename+'</span><div id="cont-event"><span id="event-desc">'+eventdetails[cunt2].edesc+'</span><br><span id="team-size">'+eventdetails[cunt2].emaxteamsize+'</span><span id="poc">Contact Name: '+eventdetails[cunt2].cntctname+'<br/>Contact No: '+eventdetails[cunt2].cntctno+'</span></div></div>')

		// // 
		$('#event-name').text(eventdetails[cunt2].ename)
		$('#event-name-title').text(eventdetails[cunt2].ename)
		
		// $('#event-desc').text(eventdetails[cunt2].edesc)
		// $('#team-size').text("Max Team Size: "+eventdetails[cunt2].emaxteamsize)
		// $('#poc').html("Contact Name: "+eventdetails[cunt2].cntctname+"<br/>Contact No: "+eventdetails[cunt2].cntctno)
		console.log(cunt2)
	})

	$('.leftnav').on('click', function(){
		// console.log("hello")

		// $('#event-name').text(eventdetails[--cunt2].ename)
		$('#event-detail').remove()
		$('#category-detail').remove()

		if(cunt2==0){
			cunt2 = eventdetails.length;
		}
		cunt2--;
		$('#right-event').append('<div id="event-detail" class="cont-c animated slideInLeft"><span id="event-name-title" class="title-c">'+eventdetails[cunt2].ename+'</span><div id="cont-event"><span id="event-desc">'+eventdetails[cunt2].edesc+'</span><br><span id="team-size">'+eventdetails[cunt2].emaxteamsize+'</span><span id="poc">Contact Name: '+eventdetails[cunt2].cntctname+'<br/>Contact No: '+eventdetails[cunt2].cntctno+'</span></div></div>')

		$('#event-name').text(eventdetails[cunt2].ename)
		$('#event-name-title').text(eventdetails[cunt2].ename)


		console.log(cunt2)
	})

	$('.upnav').on('click', function(){
		
		$('#event-detail').remove()
		$('#category-detail').remove()
		$('.logo-img-cont').remove();
		$('#event-detail').remove();
		cunt--;
		cunt2 = 0;
		// $('.logo-img-cont').removeClass(cat[cunt--])

		if(cunt==-1){
			cunt = 13;
		}
		// console.log(cunt)
		$('.logo').css('background-color', background[cunt])
		$('#right-event').css('background-color', details[cunt])
		$('.events-name').css('background-color', event[cunt])
		console.log(categorydetails);
		// console.log(cat[cunt])
		$('#left-event').append('<div class="logo-img-cont animated fadeInDown '+cat[cunt]+'"></div>')
		$('#right-event').append('<div id="category-detail" class="cont-c animated"><span id="category-name" class="title-c">'+categorydetails[cunt].cname+'</span><span id="cat-desc">'+categorydetails[cunt].cdesc+'</span></div>')
		// $('.logo-img-cont').addClass(cat[cunt])
		$('#category-detail').css('display', 'block')
		// $('#event-detail').css('display', 'none')
		// $('#category-name').text(categorydetails[cunt].cname)
		// $('#cat-desc').text(categorydetails[cunt].cdesc)
		searchevent(categorydetails[cunt].cid);
		$('#event-name').text(eventdetails[cunt2].ename)

	})	

	$('#event-name').on('click', function(){
		console.log("Event name")

		$('#category-detail').remove()
		$('#event-detail').remove()
		// $('#category-detail').css('display', 'none')
		// $('#category-detail').addClass('zoomOut');	
		$('#category-detail').css('display', 'none')
		// $('#event-detail').css('display', 'block')
		// $('#event-detail').addClass('zoomIn');

		$('#right-event').append('<div id="event-detail" class="cont-c animated zoomIn"><span id="event-name-title" class="title-c">'+eventdetails[cunt2].ename+'</span><div id="cont-event"><span id="event-desc">'+eventdetails[cunt2].edesc+'</span><br><span id="team-size">'+eventdetails[cunt2].emaxteamsize+'</span><span id="poc">Contact Name: '+eventdetails[cunt2].cntctname+'<br/>Contact No: '+eventdetails[cunt2].cntctno+'</span></div></div>')
		
		// $('#event-name-title').text(eventdetails[cunt2].ename)
		// $('#event-desc').text(eventdetails[cunt2].edesc)
		// $('#team-size').text("Max Team Size: "+eventdetails[cunt2].emaxteamsize)
		// $('#poc').html("Contact Name: "+eventdetails[cunt2].cntctname+"<br/>Contact No: "+eventdetails[cunt2].cntctno)
		console.log(eventdetails[cunt2])
	})

	$('.close').on('click', function(){
		console.log("sup")
		var par = $(this).parent().closest('div').attr('id')
		console.log(par)
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
			$('#right-event').append('<div id="category-detail" class="cont-c animated"><span id="category-name" class="title-c">'+categorydetails[cunt].cname+'</span><span id="cat-desc">'+categorydetails[cunt].cdesc+'</span></div>')
			// $('#right-event').append('<div class="events-name"><i class="fa fa-chevron-circle-left fa-4x leftnav" id="lnav"></i><span id="event-name"></span><i class="fa fa-chevron-circle-right fa-4x rightnav" id="rnav"></i></div>')
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

