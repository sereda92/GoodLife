document.getElementById('burger-btn').addEventListener('click', function() {
    var target = document.getElementById('burger-body');
    
    if (target.classList.contains('active-btn')) {
        target.classList.remove('active-btn');
    } else {
        target.classList.add('active-btn');
    }
});