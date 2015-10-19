// creates JSON work object
var work = {
	"jobs" : [
		{
			"employer": "SVGref.com",
			"title": "(unpaid independent project, not yet launched)",
			"location": "Sunnyvale, CA",
			"dates": "2013-Present",
			"description": "Studied the performance and compatibility implications of animating SVG with SMIL and JavaScript. Wrote blog posts demonstrating these concepts. Working toward creating a Web site that will act as a trusted reference for learning SVG and animated SVG.",
			// CUSTOMIZATION: adds an array of skill utilization that will be used to create interactive charts
			// for each job. See skillNames array for corresponding skill names.
			"skills": [9, 9, 9, 9, 9, 0, 9, 9, 4, 2]
		},
		{
			"employer": "Current Employer",
			"title": "(not public)",
			"location": "Redwood City, CA",
			"dates": "2002-Present",
			"description": "As this file will be available to the public through GitHub, my current employer info is not in this version. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus tempora fugiat, voluptatum deserunt error quaerat qui iure et aut? Accusamus numquam at velit architecto perspiciatis atque et, quod, tenetur sit.",
			"skills": [5, 5, 5, 0, 4, 9, 7, 8, 9, 9]
		},
		{
			"employer": "Yodlee",
			"title": "Web Design Engineer",
			"location": "Redwood Shores, CA",
			"dates": "2000-2001",
			"description": "Built financial aggregation Web sites for AltaVista, AOL, Citigroup, Morgan Stanley, Palm and other companies. Introduced to the engineering teams as \"the HTML guru we stole from The Washington Post.\" Optimized rendering performance and taught engineers how to make HTML/CSS do things they said were impossible. Conceived, built and supported the company intranet to facilitate information sharing as new international offices opened.",
			"skills": [9, 9, 3, 0, 5, 5, 6, 5, 3, 1]
		},
		{
			"employer": "WashingtonPost.Newsweek Interactive",
			"title": "Web Technical Specialist",
			"location": "Arlington, VA",
			"dates": "1999-2000",
			"description": "Jack-of-all-trades front-end technical resource and liaison between the editorial, production and technology teams. Created and maintained the template for The Washington Post home page (3 million views per day). Selected by the top editor for speed and multi-disciplinary proficiency to break a major development in the Microsoft antitrust trial; the president of the company that owned The Post called to congratulate us on beating The New York Times by 11 minutes. Tim Berners-Lee once took a photo of me at my desk (seriously... ask me!). Specialized in researching browser compatibility and performance. Incorporated a primitive analogue of SVG into the home page in 1999 to reduce server load and render time. Optimized templates throughout the site. Created scripts to monitor production servers. Maintained PBS HealthWeek Web site.",
			"skills": [9, 9, 3, 0, 9, 9, 6, 8, 3, 3]
		},
		{
			"employer": "WashingtonPost.Newsweek Interactive",
			"title": "Editorial Intern",
			"location": "Arlington, VA",
			"dates": "1998-1999",
			"description": "Monitored wire services for breaking news. Created news packages, features and databases. Obtained Microsoft antitrust trial documents at the federal courthouse. Produced live online discussions between readers and celebrities. Acting business and technology editor for six weeks after full-time staff left for dot coms, then helped select and train the new editor. Helped create the layout for the front page of the printed newspaper the night before Clinton was impeached.",
			"skills": [5, 2, 1, 0, 9, 9, 4, 4, 9, 4]
		},
		{
			"employer": "Eclipse Diversity Newsmagazine",
			"title": "Managing Editor, Online Editor",
			"location": "University of Maryland, College Park, MD",
			"dates": "1997-1999",
			"description": "Introduced the university’s second-largest news publication to the Web. Recruited and managed editors and reporters. Managed the print layout, copy-editing and content of the bi-weekly. Scooped the local news media on an interview with Martin Luther King, III, resulting in a job interview at washingtonpost.com in my freshman year.",
			"skills": [9, 0, 0, 0, 9, 9, 9, 7, 9, 8]
		}
	]
};

// creates JSON projects object
var projects = {
	"projects" : [
		{
			"title": "Portfolio Mockup to HTML",
			"dates": "Aug 2015",
			"description": "Flexbox proficiency demonstration using media queries, art direction and animated SVG images that showcase some previous work in a responsive portfolio. For extra credit, HTML5 semantic tags were used to organize the document and the Udacity logo was created from scratch in SVG to scale cleanly as the page width changes.",
			"images": ["images/p1.jpg", "images/p1_small.jpg", "images/p1_mobile.jpg"]
		},
		{
			"title": "JavaScript Resume Builder",
			"dates": "Sep 2015",
			"description": "JavaScript proficiency demonstration using jQuery to dynamically build my resume based on JSON objects in a separate file and JavaScript variables containing template formatting in a third file. For extra credit, Snap.svg was used to build and animate interactive charts for the skills utilized in each job.",
			"images": ["images/p2.jpg", "images/p2charts.gif", "images/p2map.jpg"]
		}
	]
};

// creates JSON bio object
var bio = {
	"name": "Adam Guttentag",
	"role": "Aspiring Udacian",
	"welcomeMessage": "Whoopi Goldberg offered to sweep floors on the Next Generation set just to be a part of Star Trek. I'd sweep floors to be a part of what Udacity is doing, but I'm hoping I can offer more than that.",
	"pictureURL" : "images/adam.png",
	"contacts" : {
		"mobile": "(408) 000-0000",
		"email": "user@domain.com",
		"github": "adamguttentag",
		"twitter": "@svganimation",
		"blog": "codepen.io/guttentag",
		"location": "Sunnyvale, CA",
		"description": "Home"
	},
	// CUSTOMIZATION: adds an array of skills to be presented as list items in the header
	"skills": ["HTML, CSS, JavaScript", "Animated SVG", "Written and Verbal Communication", "Design", "Teaching", "Management", "Auditing"],
	// CUSTOMIZATION: adds an array of skill names to be used as chart descriptors during mouseover.
	// I could have used the array in bio.skills, but I wanted to group some together for presentation
	// reasons while preserving granularity in the charts.
	"skillNames": ["HTML", "CSS", "JavaScript", "Animated SVG", "Written Comm.", "Verbal Comm.", "Design", "Teaching", "Management", "Auditing"]
};

var education = {
	"schools": [
		{
			"name": "University of Maryland",
			"location": "College Park, MD",
			"degree": "Left the university early to accept a salaried position at The Washington Post",
			"majors": [
				"Journalism, Newspaper Concentration"
			],
			"dates": "1997-1999",
			"url": "http://www.umd.edu/",
			"onlineCourses": []
		},
		{
			"name": "Udacity",
			"location": "Mountain View, CA",
			"degree": "Front-End Nanodegree anticipated late 2015/early 2016",
			"majors": [
				"Front-End Web Development"
			],
			"dates": "Aug 2015-Present",
			"url": "https://www.udacity.com/",
			"onlineCourses": [
				{
					"title": "Responsive Web Design Fundamentals",
					"school": "Udacity",
					"dates": "Aug 2015",
					"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
				},
				{
					"title": "Responsive Images",
					"school": "Udacity",
					"dates": "Aug 2015",
					"url": "https://www.udacity.com/course/responsive-images--ud882"
				},
				{
					"title": "How to Use Git and GitHub",
					"school": "Udacity",
					"dates": "Sep 2015",
					"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
				},
				{
					"title": "JavaScript Basics",
					"school": "Udacity",
					"dates": "Sep 2015",
					"url": "https://www.udacity.com/course/javascript-basics--ud804"
				},
				{
					"title": "Intro to jQuery",
					"school": "Udacity",
					"dates": "Oct 2015",
					"url": "https://www.udacity.com/course/intro-to-jquery--ud245"
				},
				{
					"title": "Object-Oriented JavaScript",
					"school": "Udacity",
					"dates": "Oct 2015",
					"url": "https://www.udacity.com/course/object-oriented-javascript--ud015"
				},
				{
					"title": "HTML5 Canvas",
					"school": "Udacity",
					"dates": "Oct 2015",
					"url": "https://www.udacity.com/course/html5-canvas--ud292"
				}
			]
		}
	]
};


// encapsulates display function in bio object
bio.display = function() {

  //Display Locations on Google Maps
  $("#mapDiv").append(googleMap);

  // prepends/appends HTML template snippets to the header
  // while replacing %data% with content from the bio object
  $("#header").prepend(HTMLheaderRole.replace(/%data%/, bio.role));
  $("#header").prepend(HTMLheaderName.replace(/%data%/, bio.name));
  $("#header").append(HTMLbioPic.replace(/%data%/, bio.pictureURL));
  $("#header").append(HTMLwelcomeMsg.replace(/%data%/, bio.welcomeMessage));

  // wraps elements of class wrappedCol1Bottom in a div to apply a vertical flexbox layout
  $(".wrappedCol1Bottom").wrapAll(HTMLwrapCol1);

  // wraps elements of class wrappedCol1 in a div to apply a horizontal flexbox layout
  $(".wrappedCol1").wrapAll(HTMLwrapCol1Container);

  // appends HTML template snippets to both the header contacts and footer contacts
  // while replacing %data% with content from the bio object
  $("#topContacts, #footerContacts").append(HTMLmobile.replace(/%data%/, bio.contacts.mobile));
  $("#topContacts, #footerContacts").append(HTMLemail.replace(/%data%/, bio.contacts.email));
  $("#topContacts, #footerContacts").append(HTMLgithub.replace(/%data%/, bio.contacts.github));
  $("#topContacts, #footerContacts").append(HTMLblog.replace(/%data%/, bio.contacts.blog));
  $("#topContacts, #footerContacts").append(HTMLlocation.replace(/%data%/, bio.contacts.location));
  $("#header").append(HTMLskillsStart);
  for (var skill in bio.skills) {
      $("#skills").append(HTMLskills.replace(/%data%/, bio.skills[skill]));
  }
};
// calls display function in bio object
bio.display();

// encapsulates display function in work object
work.display = function() {
  // while replacing %data% with content from the work object
  for (var job in work.jobs) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      // appends the current index of the work.jobs array to a class name to allow
      // jQuery to select and wrap only divs for this job and apply nested flexbox layouts
      formattedEmployer = formattedEmployer.replace("%jobWrapped%", "jobWrapped" + job);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      formattedLocation = formattedLocation.replace("%jobWrapped%", "jobWrapped" + job);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      formattedDates = formattedDates.replace("%jobWrapped%", "jobWrapped" + job);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      formattedDescription = formattedDescription.replace("%jobWrapped%", "jobWrapped" + job);
      // the following lines append HTML template snippets with data from the work object to the workExperience div
      $("#workExperience").append(HTMLworkStart);
      $("#workExperience").append(formattedEmployerTitle);
      $("#workExperience").append(formattedLocation);
      $("#workExperience").append(formattedDates);
      $("#workExperience").append(formattedDescription);

      // CUSTOMIZATION: creates and appends an empty SVG with an id that ties it to this job
      var formattedChart = HTMLworkChart.replace(/\%job\%/g, job);
      $("#workExperience").append(formattedChart);

	  // CUSTOMIZATION: wraps elements of class jobWrapped in a div to apply a vertical flexbox layout
      $(".jobWrapped" + job).wrapAll(HTMLwrapJobStart + job + HTMLwrapEnd);
	  // CUSTOMIZATION: wraps elements of class jobWrappedV in a div to apply a horizontal flexbox layout
      $(".jobWrappedV" + job).wrapAll(HTMLwrapJobContainer);

      // CUSTOMIZATION: references the empty SVG for this job for use with Snap.svg JavaScript library
      var currentSVG = Snap("#svg" + job);
      // CUSTOMIZATION: loops through the array of skills for the current job
      for (var skillNumber in work.jobs[job].skills) {
          // CUSTOMIZATION: creates a group for the current skill
          window['group' + skillNumber] = currentSVG.g().attr({
              id: 'g' + skillNumber
          });
          // CUSTOMIZATION: sets a mouseover function for this group, changing opacity of the group to 0.6 onmouseover
          window['group' + skillNumber].mouseover(function() {
              this.attr({
                  fillOpacity: 0.6
              });
          });
          // CUSTOMIZATION: sets a mouseout function for this group, changing opacity of the group back to 1 onmouseout
          window['group' + skillNumber].mouseout(function() {
              this.attr({
                  fillOpacity: 1
              });
          });
          // CUSTOMIZATION: stores the skill level for the current skill in local skillLevel variable
          var skillLevel = work.jobs[job].skills[skillNumber];
          // CUSTOMIZATION: creates a column of 10 rects representing dormant lights in a chart for the current skill
          for (i = 0; i < 11; i++) {
              var lightNumber = 9 - i;
              // CUSTOMIZATION: creates an 8x8 rectangle in our svg with a horizontal position that
              // based on the skill number and a vertical position based on the skill  level
              var rect = currentSVG.rect([skillNumber * 9], [i * 9], 8, 8);
              rect.attr({
                  // CUSTOMIZATION: sets the id of the rect to a 2-digit number, with the first digit
                  // representing the skill number and the second digit representing the skill level
                  id: "light" + skillNumber + lightNumber,
                  // sets the color of the rect to appear dimmed
                  fill: "#545A61",
                  // CUSTOMIZATION: sets the initial opacity of the rect to 0 so it can fade in
                  opacity: 0,
                  // CUSTOMIZATION: sets custom attributes we can access later via javascript
                  dataSkillName: bio.skillNames[skillNumber],
                  dataSkillNumber: skillNumber,
                  dataSkillLevel: skillLevel,
                  dataJob: job
              });

              // CUSTOMIZATION: Animates the opacity of each rect from 0 to 1.
              // By multiplying the light number by 0.9 seconds, lights at the bottom of the chart
              // appear to fade in faster than lights at the top, creating a inverse waterfall effect
              rect.animate({
                  opacity: 1
              }, (lightNumber * 900), mina.easeinout);
              // CUSTOMIZATION: adds the current rect to the current skill group so their opacity
              // will change together on mouseover
              window['group' + skillNumber].add(rect);
              // CUSTOMIZATION: sets the chart descriptor to the custom data attributes of
              //  a mouseovered rect, allowing the audience to see what data each column represents
              rect.mouseover(function() {
                  document.getElementById("chartDescriptor" + this.attr("dataJob")).innerHTML = this.attr("dataSkillName") + ": " + this.attr("dataSkillLevel");
              });
              // CUSTOMIZATION: resets the chart descriptor to the default text when no rect is mouseovered
              rect.mouseout(function() {
                  document.getElementById("chartDescriptor" + this.attr("dataJob")).innerHTML = "Skill Utilization";
              });
              // CUSTOMIZATION: "turns on" a number of lights in the current column corresponding to the skillLevel
              if (9 - i < skillLevel) {
                  currentSVG.select("#light" + skillNumber + [9 - i]).attr({
                      fill: '#6cbae3'
                  });
              }
          }
      }
  }
};
// calls display function in work object
work.display();

// encapsulates display function in projects object
projects.display = function() {
  for (var project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      formattedTitle = formattedTitle.replace("%projectWrapped%", "projectWrapped" + project);
      $("#projects").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      formattedDates = formattedDates.replace("%projectWrapped%", "projectWrapped" + project);
      $("#projects").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      formattedDescription = formattedDescription.replace("%projectWrapped%", "projectWrapped" + project);
      $("#projects").append(formattedDescription);
      for (var image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          formattedImage = formattedImage.replace("%projectWrappedV%", "projectWrappedV" + project);
          $("#projects").append(formattedImage);
      }
      $(".projectWrapped" + project).wrapAll(HTMLwrapProjectStart + project + HTMLwrapEnd);
      $(".projectWrappedV" + project).wrapAll(HTMLwrapProjectContainer);
  }
};
$("#projects").addClass("gray");
// calls display function in projects object
projects.display();

// encapsulates display function in education object
education.display = function() {
  for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      formattedSchoolName = formattedSchoolName.replace("%schoolWrapped%", "schoolWrapped" + school);
      $("#education").append(formattedSchoolName);

      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      formattedSchoolDegree = formattedSchoolDegree.replace("%schoolWrapped%", "schoolWrapped" + school);
      $("#education").append(formattedSchoolDegree);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      formattedSchoolDates = formattedSchoolDates.replace("%schoolWrapped%", "schoolWrapped" + school);
      $("#education").append(formattedSchoolDates);

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      formattedSchoolLocation = formattedSchoolLocation.replace("%schoolWrapped%", "schoolWrapped" + school);
      $("#education").append(formattedSchoolLocation);
      for (var major in education.schools[school].majors) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        formattedSchoolMajor = formattedSchoolMajor.replace("%schoolWrapped%", "schoolWrapped" + school);
        $("#education").append(formattedSchoolMajor);
      }

      if (education.schools[school].onlineCourses.length > 0) {
          var formattedHTMLonlineClasses = HTMLonlineClasses.replace("%schoolWrapped%", "schoolWrappedCourse" + school);
          $("#education").append(formattedHTMLonlineClasses);
          for (var onlineCourse in education.schools[school].onlineCourses) {
              var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.schools[school].onlineCourses[onlineCourse].title);
              formattedOnlineTitle = formattedOnlineTitle.replace("%schoolWrapped%", "schoolWrappedCourse" + school);
              formattedOnlineTitle = formattedOnlineTitle.replace("%url%", education.schools[school].onlineCourses[onlineCourse].url);
              formattedOnlineTitle = formattedOnlineTitle.replace("%dates%", education.schools[school].onlineCourses[onlineCourse].dates);
              $("#education").append(formattedOnlineTitle);
          }
      }
      $(".schoolWrapped" + school).wrapAll(HTMLwrapSchoolStart + school + HTMLwrapEnd);
      $(".schoolWrappedCourse" + school).wrapAll(HTMLwrapSchoolStart + school + HTMLwrapEnd);
      $(".schoolWrappedV" + school).wrapAll(HTMLwrapSchoolContainer);
  }
};
$("#education").addClass("gray");
// calls display function in education object
education.display();
