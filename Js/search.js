var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

new MultiSelectTag('countries',{
    rounded: true,    // default true
    shadow: true,      // default false
    placeholder: 'Search',  // default Search...
    onChange: function(values) {
        console.log(values)
    }
})