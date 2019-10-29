function convert() {
    var amount = document.getElementsByName("amount1")[0].value;
    var dollar = Number(amount) * 0.012;
	var euro = Number(amount) * 0.011;
	var pound = Number(amount) * 0.0091;
	
	var value = 0
	var x = document.getElementById("currency").selectedIndex;
	var y = document.getElementById("currency1").selectedIndex;
	if (x == 0  && y == 1) {
		value = Number(amount) * 0.012;
	}else if (x == 0 && y == 2) {
		value = Number(amount) * 0.011;
	}else if (x == 0  && y == 3) {
		value = Number(amount) * 0.0091;
	}else if (x == 1 && y == 0) {
		value = Number(amount) * 84.67;
	}else if (x == 1 && y == 2) {
		value = Number(amount) * 0.9;
	}else if (x == 1 && y == 3) {
		value = Number(amount) * 0.78;
	}else if (x == 2 && y == 0) {
		value = Number(amount) * 93.93;
	}else if (x == 2 && y == 1) {
		value = Number(amount) * 1.11;
	}else if (x == 2 && y == 3) {
		value = Number(amount) * 0.86;
	}else if (x == 3 && y == 0) {
		value = Number(amount) * 109;
	}else if (x == 3 && y == 1) {
		value = Number(amount) * 1.29;
	}else if (x == 3 && y == 2) {
		value = Number(amount) * 1.16;
	}else {
		value = Number(amount);
	}
	
    document.getElementsByName("amount2")[0].value = value;
	/*alert(x)
	document.getElementById('eq').innerHTML = "Equal"
	document.getElementById('dollar').innerHTML = dollar+" Dollar"
	document.getElementById('euro').innerHTML = euro+" Euro"
	document.getElementById('pound').innerHTML = pound+" Pound" */
}
function fortune() {
	var textArray = ["Smiling is definitely one of the best beauty remedies. If you have a good sense of humor and a good approach to life, that's beautiful.","Always do your best. What you plant now, you will harvest later.","An investment in knowledge pays the best interest.","Research shows that there is only half as much variation in student achievement between schools as there is among classrooms in the same school","The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.","Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.","The best preparation for tomorrow is doing your best today.","Love yourself for who you are, and trust me, if you are happy from within, you are the most beautiful person, and your smile is your best asset.","The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.","Good, better, best. Never let it rest. 'Til your good is better and your better is best."]
	var num =Math.floor(Math.random() * 10);
	document.getElementById('fortune').innerHTML = textArray[num]
	
}
function quizQuestion() {
	
	var selectedOption1 = document.querySelector('input[name="1"]:checked').value;
	var selectedOption2 = document.querySelector('input[name="2"]:checked').value;
	var selectedOption3 = document.querySelector('input[name="3"]:checked').value;
	var selectedOption4 = document.querySelector('input[name="4"]:checked').value;
	var selectedOption5 = document.querySelector('input[name="5"]:checked').value;
	
	var i = 0
	if (selectedOption1 == 'a') {
		i+=1;
		document.getElementById('ans1').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans1').innerHTML = "INCORRECT: the correct answer is A) largest railway station"
	}
	
	if (selectedOption2 == 'b') {
		i+=1;
		document.getElementById('ans2').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans2').innerHTML = "INCORRECT: the correct answer is B) Insects"
	}
	
	if (selectedOption3 == 'b') {
		i+=1;
		document.getElementById('ans3').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans3').innerHTML = "INCORRECT: the correct answer is B) Africa"
	}
	
	if (selectedOption4 == 'b') {
		i+=1;
		document.getElementById('ans4').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans4').innerHTML = "INCORRECT: the correct answer is B) Diphu, Assam"
	}
	
	if (selectedOption5 == 'c') {
		i+=1;
		document.getElementById('ans5').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans5').innerHTML = "INCORRECT: the correct answer is C) All of the above"
	}
	document.getElementById('result').innerHTML = "You answered "+i+" out of 5 questions correctly"
	
	
	//alert(selectedOption)
	
	
	
	
	
	
	
	
	
}