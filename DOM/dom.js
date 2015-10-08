// DOM TASK 1:
document.getElementById("Button").onclick=sayHello;
	
	function sayHello() {
		alert('Hello World!');
	}

// DOM TASK 2:	
document.getElementById("secondButton").onclick=print;

	function print(val) {
		alert(document.getElementById('textBox').value);
}

// DOM TASK 3:
var div = document.getElementById("color");

	div.onmouseover=colorChange;
	
	function colorChange() {
		div.style.color='#' + Math.random().toString(16).substr(-6);
	}
	div.onmouseout=colorBack;
	
	function colorBack() {
		div.style.color='black';
	}	
	
// DOM TASK 4:
var Color = document.getElementById("clickColor");

	Color.onclick=clickColor;
	
	function clickColor() {
		Color.style.color='#' + Math.random().toString(16).substr(-6);
	}
// DOM TASK 5:
var emptyDiv = document.getElementById('empty');
var span = document.createElement('span');
	span.textContent="Daniel Boone";
	emptyDiv.appendChild(span);

// DOM TASK 6:
var array = ['Peter', 'Dog', 'Special', 'Ant', 'Class'];
	var objects= document.getElementById('list')
	for (i = 0; i < array.length; i++) {
	var lists = document.createElement('li');
	var content = document.createTextNode(array[i]);
	lists.appendChild(content);
	objects.appendChild(lists);
	}
	

