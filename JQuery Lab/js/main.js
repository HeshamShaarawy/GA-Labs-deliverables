
// <img src="https://i.imgur.com/k06ZMEN.png">
// 	- As a User (AAU), I don't want to see any developer skills when the page first loads so that I can start with a fresh slate.
$('li').remove()

// 	- AAU, I want to be able to type in a skill and have it added to my list of skills by clicking a button.
var newskill = $('input').html;

$(document).ready($('#addBtn').click(function(){
    let newskill =$('#addSkill').val();
    if(newskill) {
        let $newskill = `<li class="border-0 text-warning list-group-item ml-sm-1">
         <button class="btn btn-xs btn-danger mr-3 ">x
         </button>${newskill}</li>`

        $('ul').append($newskill) 
        
        $('#addSkill').val(' ')
    }
}))


// 	- AAU, I want to be able to remove an individual skill one at a time in case I make a mistake.

$('#skillList').on('click', 'button', 
function() {
    $(this).closest('li').fadeOut(1000, function() {  
    $(this).closest('li').remove();
  });
});

// ## Deliverable

// When completed, please slack the link to your GitHub repo to your instructors. 

// ## Bonus

// ##### Replace the first user story above with the following story:

// - AAU, I want to see my previous list of developer skills so that I can start from where I last left off.

// ##### Hint:

// - Research [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) as a way to persist (remember) the developer skills each time they are updated.