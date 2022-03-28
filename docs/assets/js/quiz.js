var quiz = document.getElementById("quiz");
var question;

for (question_ind = 0; question_ind < quiz.children.length; question_ind++) {
	var question_node = quiz.children[question_ind];
	for (answer_ind = 0; answer_ind < question_node.children.length; answer_ind++) {
		var answer_node = question_node.children[answer_ind];
		answer_node.addEventListener("click", function() {
			this.classList.toggle("active");
		});
	}
}