document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'c' || e.metaKey && e.key === 'c') {
        e.preventDefault();
    }
});
