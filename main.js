// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked


$(".item").click(function(e) {
	e.preventDefault();
	// $(".description").toggle();
	$(".description", this).toggle();
});


// 2. Remove each item when we click on the closing X

$(".close").click(function(e) {
	e.preventDefault();
	$(this).closest(".item").remove()
});





// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items

function appendText() {
	// var txt1 = "<p>Text</p>";
	// var txt2 = $("<div class='item'></div>").html('<h1 class="title">Title 1</h1><span class="close">x</span><p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p>');
	var txt3 = $('input[name=newtitle]').val();

	// $(".item-list").append("<div class='item'>" + txt3 + "</div>");

	$(".item-list").append('<div class="item"><h1 class="title">'+ txt3 +'</h1><span class="close">x</span><p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p></div>');
}


//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page