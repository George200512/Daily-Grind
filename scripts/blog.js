$(document).ready(function(event) {
const observer = new IntersectionObserver((entries)=>{
	entries.forEach(e =>{
		if (e.isIntersecting){
			e.target.style.transform = "translate(0)";
		}
	});
});

$('.post').each((idx, ele)=>{
	observer.observe(ele);
});
});

