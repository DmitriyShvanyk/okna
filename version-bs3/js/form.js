$('document').ready(function() {
   
   $('#formAction').validate({

        rules: {
            fnameAction: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
			telAction: {
                required: true
            }
			
        },

        messages: {

           "fnameAction": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },			
			
			"telAction": {
				required: "Заполните это поле"
            }

        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#formActionTarget',

                success: function(data) {                                      
					
					swal({   
						title: "Спасибо! Ваша заявка принята",   						
						text: 'Мы Вам перезвоним',
						type: "success",
						timer: 5000,						
						showConfirmButton: false 
					});					

                    $("#formAction").clearForm();
                }
            });
        }

    });
	
	
	$('#formContacts').validate({

        rules: {
            fnameContacts: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
			telContacts: {
                required: true
            },
			
			emailContacts: {
                required: true
            }
			
        },

        messages: {

           "fnameContacts": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },			
			
			"telContacts": {
				required: "Заполните это поле"
            },
			
			"emailContacts": {
				required: "Заполните это поле"
            }

        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#formContactsTarget',

                success: function(data) {                                      
					
					swal({   
						title: "Спасибо! Ваша заявка принята",   						
						text: 'Мы Вам перезвоним',
						type: "success",
						timer: 5000,						
						showConfirmButton: false 
					});					

                    $("#formContacts").clearForm();
                }
            });
        }

    });


	$('#formProduct').validate({

        rules: {
            fnameProduct: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
			telProduct: {
                required: true
            },
			
			emailProduct: {
                required: true
            }
			
        },

        messages: {

           "fnameProduct": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },			
			
			"telProduct": {
				required: "Заполните это поле"
            },
			
			"emailProduct": {
				required: "Заполните это поле"
            }

        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#formProductTarget',

                success: function(data) {                                      
					
					swal({   
						title: "Спасибо! Ваша заявка принята",   						
						text: 'Мы Вам перезвоним',
						type: "success",
						timer: 5000,						
						showConfirmButton: false 
					});					

                    $("#formProduct").clearForm();
                }
            });
        }

    });
	
});