$('.navigation-link').on('click', function() {
	$('.navigation-link.is-active').removeClass('is-active');
	$(this).addClass('is-active');
});

$('.languages-button').on('click', function() {
	$('.languages-button.is-active').removeClass('is-active');
	$(this).addClass('is-active');
});
$('.navigation-button').on('click', function() {
	$('.navigation').toggleClass('is-active');
	
});
$('.work-navigation-button-previous').on('click', function() {
	var oldItem = $('.work-item.is-active');
	var newItem = oldItem.prev();

	if (oldItem.is($('.work-item:first'))) {
		alert('first-child')
	} else {
		oldItem.removeClass('is-active');
		newItem.addClass('is-active');
	}
});
$('.work-navigation-button-next').on('click', function() {
	var oldItem = $('.work-item.is-active');
	var newItem = oldItem.next();

	if (oldItem.is($('.work-item:last'))) {
		alert('last-child')
	} else {
		oldItem.removeClass('is-active');
		newItem.addClass('is-active');
	}
});