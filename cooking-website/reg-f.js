let first = document.getElementById('first');
let second = document.getElementById('second');
let names = document.getElementById('names');
let mail = document.getElementById('mail');
function Check(){
    if (first.value==null&& second.value == null && names.value==null &&mail.value==null){
        let p = document.createElement("p");
        document.getElementById('check').appendChild(p);
        p.innerHTML="You have successfully joined"
        document.getElementById('checs').remove();
    } else{
        let p = document.createElement("p");
        document.getElementById('check').appendChild(p);
        p.innerHTML="Input correctly!"
        document.getElementById('checs').remove();
    }
}

(function() {
    $('form > input').keyup(function() {
        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#register').attr('disabled', 'disabled');
        } else {
            $('#register').removeAttr('disabled');
        }
    });
})()
