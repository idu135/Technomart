var write = document.getElementsbyClass(".logo");

alert("foo");

var feedbackForm = document.querySelector(".feedback-form");

write.addEventListener("click", function (event){
	event.preventDefault();
	feedbackForm.classList.add("feedback-form-show");
});