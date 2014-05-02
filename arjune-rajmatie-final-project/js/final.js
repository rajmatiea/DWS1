//Collecting user input for order.

{function(select, menu) {

    //Defining input information.
    myform.onsubmit = function(e){

        var input_select = document.querySelector("menu");
        var input_quantity = document.querySelector("select");
      
        var submit = addEventListener("Submit",onSubmit);

    //validate input information for user data.

        function onSubmit(e){
        validateField(input_Menu_items);
        validateField(Quantity);
        

        //validateField(id);  //id = is the form input field ID

        e.preventDefault();
        return ;
		};
    };
}

	
	alert = "Thank you for your order.";
	