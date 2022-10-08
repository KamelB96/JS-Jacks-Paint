function configureListeners() {
  // select img elements
    let images = document.getElementsByTagName ('img')

    // iterate over images and add mouseover event listeners 
     for (let i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)        
    } 
}

  // add appropriate CSS class
function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    getProductInfo(event.target.id);     
}

    // remove appropriate CSS class
function removeOpacity(event) {
    if (this.classList.contains('dim')){
       this.classList.remove('dim');
   }

   let element = document.getElementById('color-price');
       element.textContent = '';
       
   let color = document.getElementById('color-name');
       color.textContent = ''; 

   event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price  
            price = '$14.99';
            colorName = 'Lime Green'; 
            updatePrice(colorName, price);  
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            price = '$11.14';
            colorName = 'Medium Brown'; 
            updatePrice(colorName, price);  
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '$22.99';
            colorName = 'Royal Blue'; 
            updatePrice(colorName, price);  
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '$13.42';
            colorName = 'Solid Red'; 
            updatePrice(colorName, price);  
            break; 
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            price = '$21.98';
            colorName = 'Soild White'; 
            updatePrice(colorName, price); 
            break; 
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            price = '$4.99';
            colorName = 'Solid Black'; 
            updatePrice(colorName, price); 
            break; 
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$8.22';
            colorName = 'Solid Cyan'; 
            updatePrice(colorName, price);
            break;
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            price = '$11.99';
            colorName = 'Soild Purple'; 
            updatePrice(colorName, price);  
            break;  
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$14.99';
            colorName = 'Solid Yellow'; 
            updatePrice(colorName, price);  
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        // select element with corresponding id
        let colorPrice = document.getElementById('color-price');
        // display price
        colorPrice.textContent = price;
        
        // select element with corresponding id
        let color = document.getElementById('color-name');
        //display color name
        color.textContent = colorName;
    }
    
}
