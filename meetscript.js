var sysadm=
[
	{
		"name" : "mr kitten one",
		"url" : "archit.jpg",
		"post" : "junior dev",
		"desc" : "basic front end",
		// "link" : ["#", "#", "#"]
	},
	{
		"name" : "mr kitten two",
		"url" : "divyanshu2.jpg",
		"post" : "junior dev",
		"desc" : "basic front end",
		// "link" : ["#", "#", "#"]
	},
	{
		"name" : "mr kitten three",
		"url" : "http://www.babylonpuzzles.com/6866-thickbox_default/500-pcs---curious-kitten---square-by-ravensburger.jpg",
		"post" : "junior dev",
		"desc" : "basic front end",
		// "link" : ["#", "#", "#"]
	},
	{
		"name" : "mr kitten four",
		"url" : "http://www.babylonpuzzles.com/6866-thickbox_default/500-pcs---curious-kitten---square-by-ravensburger.jpg",
		"post" : "junior dev",
		"desc" : "basic front end",
		// "link" : ["#", "#", "#"]
	},
	{
		"name" : "mr kitten five",
		"url" : "http://www.babylonpuzzles.com/6866-thickbox_default/500-pcs---curious-kitten---square-by-ravensburger.jpg",
		"post" : "junior dev",
		"desc" : "basic front end",
		// "link" : ["#", "#", "#"]
	},
	{
		"name" : "mr kitten six",
		"url" : "http://www.babylonpuzzles.com/6866-thickbox_default/500-pcs---curious-kitten---square-by-ravensburger.jpg",
		"post" : "junior dev",
		"desc" : "basic front end",
		// "link" : ["#", "#", "#"]
	},
	{
		"name" : "mr kitten seven",
		"url" : "http://www.babylonpuzzles.com/6866-thickbox_default/500-pcs---curious-kitten---square-by-ravensburger.jpg",
		"post" : "junior dev",
		"desc" : "basic front end",
		// "link" : ["#", "#", "#"]
	},
]

var num = 1, data;

$(document).ready(function()
{
	// init
	$("#name").html(sysadm[num - 1].name);
	$("#post").html("<i>" + sysadm[num - 1].post + "</i>");
	$("#line").html(sysadm[num - 1].desc);	
	$(".active-img").attr("src", sysadm[num - 1].url);
	//done

	$(".info").on("click", function(event)
	{
		if($(event.delegateTarget) == $(".active-border")) return;
		$(".active-border").removeClass("active-border");
		$(event.delegateTarget).addClass("active-border");
		num = $(event.delegateTarget).attr("data-key");
		data = sysadm[num - 1];

		// $(".active").fadeOut("slow", function()
		// {
		// 	$(".active").css("display", "none");
		// 	$("#name").html(data.name);
		// 	$("#post").html("<i>" + data.post + "</i>");
		// 	$("#line").html(data.desc);
		// 	$(".active-img").attr("src", data.url);
		// 	$(".active").fadeIn("slow");
		// });

		$(".active").addClass("animated fadeOutLeft");
		setTimeout(function()
		{
			$(".active").removeClass("animated fadeOutLeft");
			$("#name").html(data.name);
			$("#post").html("<i>" + data.post + "</i>");
			$("#line").html(data.desc);
			$(".active-img").attr("src", data.url);
			$(".active").addClass("animated fadeInRight");
			setTimeout(function()
			{
				$(".active").removeClass("animated fadeInRight");
			}, 800);
		}, 800);

	});

	$(document).keydown(function(event)
	{
		event.preventDefault();
		var dir = 0;
		switch(event.which)
		{
			case 37:
			case 38:
				dir = 1;
				break;
			case 39:
			case 40:
				dir = -1;
				break;
			default:
				return;
		}
		num = (((num - 1 - dir) % 7) + 7) % 7 + 1;
		exitAnim = dir == -1 ? "fadeOutLeft" : "fadeOutRight";
		entryAnim = dir == -1 ? "fadeInRight" : "fadeInLeft";
		$(".active-border").removeClass("active-border");
		data = sysadm[num - 1];

		$(".active").addClass("animated " + exitAnim);
		setTimeout(function()
		{
			$(".active").removeClass("animated " + exitAnim);
			$("#name").html(data.name);
			$("#post").html("<i>" + data.post + "</i>");
			$("#line").html(data.desc);
			$(".active-img").attr("src", data.url);
			$(".active").addClass("animated " + entryAnim);
			setTimeout(function()
			{
				$(".active").removeClass("animated " + entryAnim);
			},800);
		}, 800);
		$($(".container").children()[num - 1]).addClass("active-border");
	});
});
