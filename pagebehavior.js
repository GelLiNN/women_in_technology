//JS file for events & behavior in Info 102 solution, Kellan Nealy, 5/7/2015
	
	//-----TO IMPLEMENT
	//scanning, scanned, item info injected w/ big X button so user can rescan, "add to cart" button change

"use strict";

(function(){

	//-Application Labels- can be thought of as chosen titles of different "pages" in an asynchronous front-end app
	var APP_LABELS = ["home", "rr1", "rr2", "rr3", "pr", "fthp"];
	var APP_ID = "page";
	var curLabel = "";
	
	/* Different HTML structural data can be stored for dynamic application re-population */
	
	var HOME =
				"<h1>Home</h1>" +
				"<div id=\"bar\"></div>" +
				"<h2>About:</h2>" +
				"<p id=\"about\">" +
				"Check out these <a href=\"http://www.techrepublic.com/article/the-state-of-women-in-technology-15-data-points-you-should-know/\"><strong>statistics.</strong></a>" +
				"<br /><br />It's no small fact that technology and programming are currently male-dominated fields.  " +
				"The purpose of this website is to explore that fact, and it's implications, with the hope of raising " +
				"awareness and possibly finding a <strong>solution</strong>.  A quick Google search yields that women " +
				"were, in all actuality, the first people to program a computer.  These projects were known as 'ENIAC' and " +
				"'Colossus' during World War II.  Anybody should perform that Google search and find reality; " +
				"I find it senseless that a field started by women would become male-dominated over time." +
				"<br /><br />The fight against gender inequalities in the world is happening, and you can be a part of it " +
				"too by simply speaking up and raising awareness of these realities.  It's <strong>a fight worth fighting.</strong>" +
				"<br /><br /></p><br /><img src=\"http://uxrepo.com/static/icon-sets/ionicons/svg/ios7-lightbulb.svg\" alt=\"light\" id=\"light\" />" +
				"<p id=\"metech\"><span id=\"metech1\">Me + Tech</span>" +
				"<br /><br /><br /><br /><br /><br /><br />I study mostly computer-related technical information, but I\'m also highly interested in the way humans use technology, and how it intertwines with our existing and developed social structures in the world (including gender perceptions).  For this reason, the user research/data science side of technology is intrigues me to say the least." +
				"<br /><br />  Coming into this class, I have pretty extensive applicable knowledge about web development.  I've used lots of PHP, Javascript, Java, C#, and the classic HTML/CSS to accomplish small things for small class projects, and bigger things for my own side projects.  I\'d definitely be interested in learning about other tools or frameworks that are available to assist web developers.  I\'d love to get my hands dirty with AngularJS, or maybe see if I can grab the code generated from templates in Squarespace, etc.  Those are just initial ideas, and I\'m definitely looking for guidance!  I would love to collaborate in lab section, and maybe get some more people interested in learning to code for the Internet.  It\'s a fun thing to do, and a cool skill to have." +
				"<br /><br />  Also, going back to the research side of things, it would be cool to set up some kind of online interactive game or application that collects data from student users, to paint a better picture of our gender perceptions in an indirect way (something along the lines of the implicit bias test, with actual fun going on in the interactivity).  Could be interesting!  It\'s ideas like this that I want to run with and collaborate about.</p>";
				
	//Written Response
	var RR1 =
				"<h1>Reading Response 1</h1>" +
				"<div id=\"bar\"></div>" +
				"<h3>Where Are We? -- Written Response</h3>" +
				"<div id=\"bar\"></div>" +
				"<p id=\"response1\">" +
				"I chose this reading because it truly analyzes the system of patriarchy, and discusses the effects of that system at length.  Before reading this, I mostly assumed I knew what a patriarchy was, and I now see how that can be problematic.  When one really takes the time to break down the concept into multiple sub-categories, true insight can be gathered regarding how it affects social structures in different industries like Technology.  In Addition, the author does a nice job of being forward-looking and discussing solutions later in the chapter.<br /> <br />" +
				"Author Allan Johnson begins with an anecdote where he reflects on workplace discussions, where men and women discuss advantages of their gender in such context.  When advantages are enumerated, Johnson states, \"The accumulated sum hangs heavy in the air.  There are flashes of anger from some of the women, but many don\'t seem to know what to do with how they feel\"<strong> (Johnson p.4)</strong>.  I found this particularly interesting, because it shows the reader that other people see this problem, and they are likewise confused with how to deal with it.  It\'s important, in the context of inequality, for people to not feel isolated.  This applies to those who are victims, and those trying to find solutions; both can feel like they\'re struggling with something that is too complex to fix.  I felt that the author did a nice job with this anecdote, to make both parties comfortable going forward into the reading.<br /><br />" +
				"Johnson is a nonfiction author, novelist, sociologist, public speaker, and workshop presenter who has devoted most of his working life to understanding the human condition, especially in relation to issues of social justice rooted in gender, race, and social class <strong>(www.agjohnson.us)</strong>.  This background demonstrates expertise in the social realm, and without it, he could not have integrated this anecdote in such a meaningful way.<br /><br />" +
				"Johnson does a nice job of breaking down the concept of a patriarchy, saying \"A society is patriarchal to the degree that it promotes male privilege by being male dominated, male identified, and male centered\" <strong>(Johnson p.5)</strong>.  This was significant for me as a gender studies student reader, allowing me to understand the system in a more in-depth way.  Enumerating sub-categories for an issue can be vital in discussing possible courses of action, and Johnson deeply discussing each layer really empowers anybody looking to analyze our society.<br /><br />" +
				"In lecture, we discussed how the imbalanced gender representation in Technology is related to a patriarchal system, because a patriarchy influences societal norms.  These societal norms can unfortunately lead to a lot of the misrepresentation we see today, through stereotyping.  In chapter 1 of Janet Abbate\'s book:  Recoding Gender, she describes how females were actually the first people to program a computer.  If our social structure wasn\'t so patriarchal, this truth could likely be more advertised to women, and they could be less intimidated to pursue a career in the field.<br /><br />" +
				"In any case, Johnson argues for possible solutions to this problem of a patriarchal perspective, explaining \"this is just a matter of training… we need to incorporate into common usage ways of making sense of societies and our relation to them\" <strong>(Johnson p.20)</strong>.  The field of Technology is convoluted and relatively new; imagine what humans could do if we put more effort into understanding these societal systems, how they\'re causing specific misrepresentation, and how to move forward.<br /><br />" +
				"<strong>Citations (MLA):</strong><br /><br />" +
				"<em>Abbate, Janet. \"Breaking Codes and Finding Trajectories.\" Recoding Gender: Women's Changing Participation in Computing. Cambridge, Mass.: MIT, 2012. Print.</em><br /><br />" +
				"<em>Johnson, Allan G. The Gender Knot: Unraveling Our Patriarchal Legacy. Philadelphia: Temple UP, 1997. Print.</em></p>";				
	
	//Search Client
	var RR2 =
				"<h1>Reading Response 2</h1>" +
				"<div id=\"bar\"></div>" +
				"<h3>Recoding Gender Chapter 1 -- Search Client</h3>" +
				"<div id=\"bar\"></div>" +
				"<br />" +
				"<p id=\"searchhelper\">" +
				"Start typing to quickly bring up important female figures in the Tech field!" +
				"  Check out the list of results with short bios!  <strong>Happy Searching!</strong></p>" +
				"<br /><input type=\"text\" id=\"name\" placeholder=\"Enter Name\">" +
				"<div id=\"results\"><h2>Results</h2>Search to get results!</div>" +
				"<p id=\"searchhelper\"><strong>Explanation:</strong><br />" +
				"Author Janet Abbate explores the history of computation in her book " +
				"<em>Recoding Gender</em>, highlighting in the first chapter the generally untold " +
				"story of highly skilled female programmers working on highly classified computer projects " +
				"during World War II.  This was a time when programming wasn't even a field, and that " +
				"allowed women to assume these roles as 'operators'.  However, as Abbate states, " +
				"\"the undefined nature of their job was challenging, but it also gave them the freedom " +
				"to define programming--through their actions and achievements--as a wide-ranging and " +
				"intellectually fulfilling task\"(Abbate p.	26).  When we learn about computer science in school, " +
				"we don't often learn of these historical facts.  Speaking from personal experience, " +
				"I was never aware that women were the first programmers and essentially created the field.  " +
				"Despite this, I feel it is necessary to celebrate female contribution to computer science, " +
				"so I've developed this simple search client to allow people to easily type in a letter " +
				"and see what awesome woman made what awesome contributions to this male-dominated field." +
				"<br /><br />The problem of gender gaps in the workplace spans every industry, " +
				"but I feel that maybe more women could be less intimidated by the field of programming if they just " +
				"<em>knew</em> that women started it all!<br /><br />" +
				"<strong>Citations (MLA):</strong><br />" +
				"<em>Abbate, Janet. \"Breaking Codes and Finding Trajectories.\" Recoding Gender: Women's Changing Participation in Computing. Cambridge, Mass.: MIT, 2012. Print.</em></p>";
				
	//Podcast			
	var RR3 =
				"<h1>Reading Response 3</h1>" +
				"<div id=\"bar\"></div>" +
				"<h3>Geek Mythology -- Podcast</h3>" +
				"<audio controls id=\"podplayer\"><source src=\"podcast.mp3\" type=\"audio/mpeg\">" +
				"Your browser does not support the audio element.</audio><br />" +
				"<div id=\"bar\"></div>";
				
	//Presentation Responses		
	var PR =
				"<h1>Presentation Responses</h1>" +
				"<div id=\"bar\"></div>" +
				"<h3>Insightful Thoughts from the Class!</h3>" +
				"<p id=\"res1\"><strong>Gender Bias Awareness and Twitter: </strong><br /><br />" +
				"I find this subject to be important because social media platforms like Twitter are " +
				"immensely popular with our modernized culture.  Basically, lots of people are going to be affected by any biases floating around in these spaces.  Also, with such a popular social expression database, it\'s interesting to consider the types of data-driven conclusions one could make about people and their gender biases.  Anytime you have a ton of people with all of their conversations stored, things can get interesting." +
				"<br /><br />  I found it surprising that Twitter can determine gender with up to 90% accuracy, when users don\'t have to input their gender.  I also found it very interesting that Twitter takes confidence of the gender assessment seriously, and claims \"...Where we can\'t predict gender seriously, we won\'t\".  Unfortunately however, Twitter mostly fails to pass the Bechdel Test (media must have two women conversing about something other than a man)." +
				"<br /><br />  I enjoyed how the presenters called out positive work being done, and activism against sexism on Twitter.  I\'m still wondering specifically how tweeting about sexism increased the \"well-being\" of the oppressed on twitter, but apparently progress was made.  Whenever there\'s a social issue, it\'s important to call out success stories and positives in the conversation, so the audience has an example to consider." +
				"<br /><br />  I personally am interested in the Twitter data science & algorithm conversation, because there are just so many statistical conclusions you could make with such an ocean of dialogue.  I\'ve actually applied for an internship with Twitter in their Seattle office for next fall, so the presentation was intriguing from the beginning!  Wanting to be a software developer, I definitely see built-in gender biases out there in social networking (or at least supported gender biases).  When I\'m designing anything, I plan on having an active conversation with myself regarding which social constructs my design supports." +
				"<br /><br />  Lastly, thanks to Michelle, Santasha, Seth, and Sijia for a captivating and insightful presentation!</p>" +
				"<p id=\"res2\"><strong>Gender and Mobile Apps: </strong><br /><br />" +
				"Talking about gender when it comes to mobile applications is arguably a conversation that could go on for decades.  That\'s why I really enjoyed this presentation for its excellent job narrowing down the discussion to key facts and nice sub-topics." +
				"  I feel it is important to consider gender in the realm of mobile applications because they are really being pushed onto the people these days.  We\'ve seen the number of downloads on application marketplaces skyrocket in the past few years, and not a whole ton of thought has been directed towards important social considerations." +
				"<br /> <br />  I really thought the section on application usage and lifestyle was interesting, mentioning remote mothering apps, and how those could be considered to perpetuate gender stereotypes.  If mothers are being helped with their work-life balance through a baby-monitoring mobile application, I think that can definitely be empowering.  And, depending on the design (and whether or not it\'s neutral), this product could even assist dads keeping up with their children.  I guess I slightly disagree that this product would have to perpetuate gender stereotypes.  In any case, niche apps like these really make me think \"Oh!  What a great idea!\"  It\'s important to always keep creativity honed; the next idea like this could be yours." +
				"<br /> <br />  I also found it particularly interesting that women download more shopping apps, and men actually spend more money on these apps.  That\'s definitely something that makes my brain do a double-take.  Not the most socially intriguing thing I\'ve learned in this class, but a fact that\'s interesting to consider nonetheless." +
				"<br /> <br />  Mobile applications come in many shapes and sizes, and not all of them are gender-neutral.  I stand with the presenters when it comes to designing apps for females.  They don\'t necessarily have to be pink, flowery, and frilly.  These design decisions actually support and perpetuate the same gender stereotypes that prohibit women from becoming leaders in this country.  The presenters themselves even noted that these biased designs were determined to be less appealing overall to their intended demographic.  This means less downloads!  If engineers want to make money, they ought to go for the gender neutral designs." +
				"<br /> <br />  I\'ve gotten into the mobile application scene a little bit, and have definitely considered working on the mobile side as an engineer.  This topic relates to my professional aspirations because I\'m driven to take these conversations with me to the workforce.  In an engineering team, I want to be the one who brings up demographics and neutrality; we need more advocates in this space!" +
				"<br /> <br />  Lastly, thanks to Riley, Randi, Brittney, and Lizzie for an interesting and though-provoking presentation!</p>";
				
	//FemTech Hero Profile			
	var FTHP =
				"<h1>FemTech Hero Profile</h1>" +
				"<div id=\"bar\"></div>" +
				"<h3>Anita Sarkeesian</h3>" +
				"<div id=\"bar\"></div>" +
				"<div id=\"ft1\"><strong>Information Bullets: </strong>" +
				"<img src=\"https://yt3.ggpht.com/-mPW-VWXuYWo/AAAAAAAAAAI/AAAAAAAAAAA/4A7sGa8UKJc/s900-c-k-no/photo.jpg\" alt=\"fem\" id=\"femimg1\" />" +
				"<ul><li>Website <a href=\"http://www.feministfrequency.com\">Feminist Frquency</a>, Classified as a 501 c3 political group!</li>" +
				"<li>Started by Anita herself!</li>" +
				"<li>Partner in crime Jonathan McIntosh who co-writes and co-produces with her!</li>" +
				"<li><a href=\"http://www.feministfrequency.com\">Feminist Frquency</a> Centered around her Video Series (look it up on YouTube!)</li>" +
				"<li>Ideology focuses on intersections between feminism, activism, and popular culture!</li>" +
				"<li>Has received numerous threats from individuals on numerous occasions!</li>" +
				"<li>Very involved with \"Gamergate\" where her ideas are shot down and she\'s repeatedly threatened!</li>" +
				"<li>Actually very involved in the multiplayer gaming space!  She\'s Good!  Look for her live stream on <a href=\"http://www.twitch.tv\">Twitch!</a></li></ul></div>" +
				"<img src=\"https://d262ilb51hltx0.cloudfront.net/max/1750/1*SlOdSvABZmXdjdwM63Tasg.jpeg\" alt=\"fem\" id=\"femimg2\" />" +
				"<p id=\"femdes\"><strong>Anita Sarkeesian</strong> (born 1983) is a Canadian American feminist public speaker, media critic and blogger. She is the founder of Feminist Frequency, a registered charity, and with Jonathan McIntosh is responsible for the production of the video series Tropes vs. Women in Video Games." +
				"<br /><br />In 2012, Sarkeesian was targeted by an online harassment campaign following her launch of a Kickstarter project to fund the Tropes vs. Women in Video Games series. At the same time, supporters donated almost $160,000 to the project, far beyond the $6,000 she had sought. The situation was covered extensively in the media, placing Sarkeesian at the center of discussions about misogyny in video game culture and online harassment. Subsequently, she has continued to present commentary and analysis about gender representation in video games and to speak publicly about gender and harassment in the gaming industry and culture." +
				"<br /><br />The Tropes vs Women project triggered a campaign of sexist harassment against Sarkeesian. Attackers sent Sarkeesian rape and death threats, hacked her webpages and social media, and distributed her personal information. They posted disparaging comments online, vandalized Sarkeesian's article on Wikipedia with racial slurs and sexual images, and sent Sarkeesian drawings of herself being raped by video game characters. One attacker created the computer game \"Beat Up Anita Sarkeesian\", which prompted players to bloody a picture of Sarkeesian by clicking the mouse. Toronto feminist Stephanie Guthrie received death and rape threats for criticizing the \"Beat Up Anita Sarkeesian\" game. Following Guthrie\'s complaint to the police, one of the men behind the attacks was arrested and charged with criminal harassment and breach of a peace bond. Sarkeesian responded to the threats against Guthrie in a statement to the Toronto Standard, condemning the widespread harassment she and other women have faced online.</p>";
	
	//------------------------------------------Javascript for labelling mechanism and event handling
	
	window.onload = function() {
		changeTo("home"); //start Website with "home" label
	};
	
	//changes the current load of Website with label parameter
	function changeTo(label) {
		curLabel = label;
		populate();
		setEvents();
	}
	
	function searchBio() {
		//Info to be searched
		var results = get("results");
		
		var name = get("name").value;
		var params = new FormData();
		params.append("name", name);
		
		var ajax = new XMLHttpRequest();
		ajax.open("POST", "search.php", true);
		ajax.onload = function() {
			results.innerHTML = "<h2>Results</h2>";
			var data = ajax.responseText.split("0");
			
			for (var i = 0; i < data.length; i++) {
				var res = document.createElement("p");
				res.innerHTML = data[i];
				results.appendChild(res);
			}
		};
		
		results.innerHTML = "<p id=\"searching\">searching...</p>";
		
		ajax.send(params);
	}	
	
	//Populates the web page with page-specific HTML content asynchronously
	function populate() {
		var element = get(APP_ID);
		
		if (curLabel === "home") {
			element.innerHTML = HOME;
			
		} else if (curLabel === "rr1") {
			element.innerHTML = RR1;
			
		} else if (curLabel === "rr2") {
			element.innerHTML = RR2;
			
		} else if (curLabel === "rr3") {
			element.innerHTML = RR3;
			
		} else if (curLabel === "pr") {
			element.innerHTML = PR;
			
		} else if (curLabel === "fthp") {
			element.innerHTML = FTHP;
			
		}
	}
	
	//sets event handlers from certain page-loads of Website
	//-----NOTE: each event handler function MUST NOT have parameters, and MUST call changeTo()
	function setEvents(label) {
		//universal events (ex. Navigation)
		setNavEvents();
		
		//events for home page
		if (curLabel === "home") {
			
		//events for rr1 page
		} else if (curLabel === "rr1") {
		
		//events for rr2 page
		} else if (curLabel === "rr2") {
			get("name").onkeyup = searchBio;
			
		//events for rr3 page
		} else if (curLabel === "rr3") {
			
		//events for project responses page
		} else if (curLabel === "pr") {
			
		//events for FemTech profile page
		} else if (curLabel === "fthp") {
			
		}
	}
	
	//Sets the navigation bar to correctly change page data
	function setNavEvents() {
		get("home").onclick = function() {changeTo("home");};
		get("rr1").onclick = function() {changeTo("rr1");};
		get("rr2").onclick = function() {changeTo("rr2");};
		get("rr3").onclick = function() {changeTo("rr3");};
		get("pr").onclick = function() {changeTo("pr");};
		get("fthp").onclick = function() {changeTo("fthp");};
	}
	
	//---------------------------other event handler methods
	
	
	//---------------------------getter methods for HTML DOM
	
	function get(id) {
		return document.getElementById(id);
	}
	
	function classes(className) {
		return document.querySelectorAll("." + className);
	}
	
	function getInput(name) {
		return document.getElementsByName(name);
	}
	
	function clear() {
		get(APP_ID).innerHTML = "";
	}

})();




//Hello everyone listening! today, I want to discuss a specifically interesting reading.  It's called

//Geek Mythology, chapter 4 in a work by Margolis Fisher.  I chose this reading for it's rich content

//surrounding the social structures in programming and technology.  It focuses on the geeky

//perspective everyone has towards programmers, and how such cultures affect people!

//The work does a nice job focusing on Carnegie Mellon University, one of the top computer science

//schools in the country.  Industry veterans and researchers alike basically flock here to get

//graduates, and there's a reason for it.  They're talented people!  But, the obsessive nature of

//young men in the field, and this "geeky" persona that develops around programmers definitely

//proves to be a problem.  Don't take this from me though, they interviewed CMU student Sarah

//and she said "I don't care! Can't you people talk about anything other than computers?"

//Interestingly enough, and actually taken from page 68, 69 percent of the female computer science 

//majors, as well as 32 percent of the men, perceive themselves as different from their peers, and assert that

//their lives do not revolve around computers.

//This is a huge number!  and it basically means that there's misperceptions going on here.  Not cool.

//This obsessive culture is problematic, because it's actually deterring women from completing their degrees!

//This idea is especially interesting to me because of the demand.  If we need more programmers

//in America, it doesn't make sense to allow ANY obstructions for people pursuing the field.

//In lecture, we discussed how these ideas come from a patriarchal culture, which is centered on

//the ideas of obsession and mastery.  However people, variety is the spice of life! In informatics we learn that

//good design comes from diversity and convergence, NOT from obsession.  From the reading,

//it becomes clear that this is a problem out there.  Something else I found interesting was Fisher's discussion

//of male and female interest patterns.  In fact, taking a test, girls scored higher than average on 

//several interest clusters, when boys showed a more unidimensional set of interests.

//This is huge, because diversity is the alleged key to great design!  we need more diversity,

//so based on those results we need more female programmers in the field

//I think it's insane to watch obstructions go unremoved, so let's raise awareness of this and make a difference

//I want to again cite Margolis Fisher as the author of this work , and shout a thankyou for being so insightful

//Thanks for listening!