var fragments;

function loadFragment(index) {       
    
    fetch(fragments[index]).then(response => response.text()).then(text => {
      document.body.appendChild(document.createElement('div')).innerHTML = text;
      if(index < fragments.length - 1 ) {
        loadFragment(index+1);
      }
    });

}