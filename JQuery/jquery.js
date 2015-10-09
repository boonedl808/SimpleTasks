// $(document).ready(function() {
	
// JQUERY TASK 1:
$('#Button').click(function() {
	alert("Hello Person!");
});

// JQUERY TASK 2:	
$("#secondButton").click(function() {
	alert($("#textBox").val());
});

// JQUERY TASK 3:
$("#color").hover(function() {
	$(this).css('color', '#' + Math.random().toString(16).substr(-6));
});
	
// JQUERY TASK 4:
$("#clickColor").click(function() {
	// $(this).css('color', 'red')
	$(this).css('color', '#' + Math.random().toString(16).substr(-6));
});

// JQUERY TASK 5:
$("#empty").append("<span>Daniel Boone</span>");

// JQUERY TASK 6:
// $("#list").add(function() {
	var array = ['Peter', 'Dog', 'Special', 'Ant', 'Class'];
	var oList = ('#list');
	
	$.each(array, function(i) {
		var li = $('<li/>')
		.appendTo(oList);
	});