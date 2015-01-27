

var bio = {
"name":"David Santiago Gómez",
"role":"        Student at Universidade de Vigo",
"picture":"CV_Photo.JPG",
"welcome": "Hi! This is David's interactive resume!",
"skills": ["MS Office", "MS Project", "Qlikview", "VBA"],
"contacts": {
"location": "Rúa Reconquista, 13",
"mobile": "+34 698153506",
"email": "david.a.a@hotmail.com",
"github":"davidiacobus"}
};


var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);
var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
var picture = bio.picture;
var formattedPicture = HTMLbioPic.replace("%data%", picture);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPicture);

function appendResume(what, how, where) {
$(where).append(how.replace("%data%", what));
}

appendResume (bio.contacts.mobile, HTMLmobile, "#topContacts");
appendResume (bio.contacts.email, HTMLemail, "#topContacts");
appendResume (bio.contacts.github, HTMLgithub, "#topContacts");


if (bio.skills.length > 0) {


$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);


formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);

};

var work = {
"jobs": [
{
"employer":"Protección Civil", 
"title": "Lifeguard",
"location":"Arteixo",
"dates":"Jun 2007-Sept 2007"
},
{
"employer":"Protección Civil", 
"title": "Lifeguard",
"location":"Arteixo",
"dates": "Jun 2008-Sept 2008"
}
]};

for(job in work.jobs){
$("#workExperience").append(HTMLworkStart); 
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
var formattedDates= HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedEmployerTitle);
$(".work-entry:last").append(formattedDates);

};

var education = {
"school":
{
"name":"Universidade de Vigo",
"location":"Campus Lagoas Marcosende Vigo",
"degree":"Industrial Engineering",
"dates":"2008 - 2015 (Expected)"
}};


$("#education").append(HTMLschoolStart); 
var formattedName = HTMLschoolName.replace("%data%", education.school.name);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.school.degree);
var formattedStudies = formattedName + formattedDegree;
var formattedDates= HTMLschoolDates.replace("%data%", education.school.dates);
$(".education-entry:last").append(formattedStudies);
$(".education-entry:last").append(formattedDates);

var languages = {
	"language": [
	{
		"name": "Spanish",
		"level": "Native"
	},
	{ 
	  "name": "English",
	  "level": "IELTS-6.5 (C1)"
     },
     {
     	"name": "German",
     	"level": "Escola Oficial de Idiomas de Vigo - Certificate of Intermediate Level (B1)"
     }
     ]};


for(idioma in languages.language){
$("#languages").append(HTMLlanguageStart); 
var formattedLanguageName = HTMLlanguageName.replace("%data%", languages.language[idioma].name);
var formattedLevel= HTMLlanguageLevel.replace("%data%", languages.language[idioma].level);
$(".language-entry:last").append(formattedLanguageName);
$(".language-entry:last").append(formattedLevel);

};


 $("#mapDiv").append(googleMap);
 initializeMap();