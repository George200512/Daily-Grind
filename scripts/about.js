$(document).ready(function(event){
const observer = new IntersectionObserver(entries => {
	entries.forEach(e => {
		if (e.isIntersecting){
			e.target.style.transform = "translateY(0)";
			e.target.style.opacity = "1";
			observer.unobserve(e.target)
		}
	});
},
{
	threshold: 0.2
}
);

observer.observe($(".s1-description")[0]);
$(".bio").each((idx, ele) => {
	observer.observe(ele);
});
}
);