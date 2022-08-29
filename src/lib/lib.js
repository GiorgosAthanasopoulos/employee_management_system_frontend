function toggleForm(id) {
    document.getElementById(id).style.display = document.getElementById(id).style.display === 'none' ? 'block' : 'none';
}

export function toggleFormPost() {
    toggleForm('form-post');
}

export function toggleFormPut() {
    toggleForm('form-put');
} 

export function closeForms() {
    document.getElementById('form-post').style.display = 'none';
    document.getElementById('form-put').style.display = 'none';
}

export function refresh() {
    window.location.reload();
}