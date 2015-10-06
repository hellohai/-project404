//@codekit-prepend "vendor-libs/jRespond.1.0.js"; // Responsive JS solution
//@codekit-prepend "vendor-libs/response-0.7.8.js"; // Responsive Image / Content solution
//@codekit-prepend "vendor-libs/$.bxslider4.1.1.js"; // BXSlider - Content slider
//@codekit-prepend "vendor-libs/$.hoverIntent.1.8.1.js"; // HoverIntent
//@codekit-prepend "vendor-libs/$.superfish.1.7.5.js"; // Superfish Menus
//@codekit-prepend "vendor-libs/$.fancybox.pack.js"; // 

(function(window, document, $, R, J) {

	// to allow :active styles to work in mobile Safari
	// https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/
	document.addEventListener("touchstart", function(){}, true);
	

	// service drawer	
	$('.service-titles li').click(function() {
		$('.service-titles').addClass('shadow');
		$('.service-drawer').addClass('padding');
		$('.services .title span').addClass('hide');
	});

	$("#serviceTabs li").click(function(e){
	        if (!$(this).hasClass("active")) {
	            var tabNum = $(this).index();
	            var nthChild = tabNum+1;
	            $("#serviceTabs li.active").removeClass("active");
	            $(this).addClass("active");
	            $("#serviceTab li.active").removeClass("active");
	            $("#serviceTab li:nth-child("+nthChild+")").addClass("active");
	        }
	 });

    	// form container
	$("#formTabs li").click(function(e){
		if (!$(this).hasClass("active")) {
		    var tabNum = $(this).index();
		    var nthChild = tabNum+1;
		    $("#formTabs li.active").removeClass("active");
		    $(this).addClass("active");
		    $("#formTab li.active").removeClass("active");
		    $("#formTab li:nth-child("+nthChild+")").addClass("active");
		}
	});

   
	// contact forms
	var contactForm = {
		settings: {
			input: $('.contact-form .input-txt')
		},
		init: function() {
			this.setInitialState();
			this.bindUIActions();
		},
		bindUIActions: function() {
			this.settings.input.on('focus blur', function(e) {
				contactForm.toggleLabelPosition($(this), e);
			});
		},

		// Looks for the presence of values witin form fields to determine if form
		// labels need to change.
		setInitialState: function() {
			this.settings.input.each(function(i) {
				if($(this).val() != '') {
					$(this).parent('fieldset').addClass('label-up');
				}
			});
		},

		// Determines the position of a field's label based on focus and value
		toggleLabelPosition: function(elem, e) {
			if(e.type == 'focus') {
				elem.parent('fieldset').addClass('label-up');
			}
			if((e.type == 'blur') && (elem.val() == '')) {
				elem.parent('fieldset').removeClass('label-up');
			}
		}
	};
	contactForm.init();



}(this, this.document, this.$, this.Response, this.jRespond));


