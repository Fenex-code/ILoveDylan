document.querySelector('.looks').addEventListener('click', function () {
    const looksText = document.getElementById('looks-text');
    if (looksText.style.display === 'block') {
        looksText.style.display = 'none';
    } else {
        looksText.style.display = 'block';
    }
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 100);
});
document.querySelector('.personality').addEventListener('click', function () {
    const looksText = document.getElementById('personality-text');
    if (looksText.style.display === 'block') {
        looksText.style.display = 'none';
    } else {
        looksText.style.display = 'block';
    }
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 100);
});
document.querySelector('.Ideals').addEventListener('click', function () {
    const looksText = document.getElementById('Ideals-text');
    if (looksText.style.display === 'block') {
        looksText.style.display = 'none';
    } else {
        looksText.style.display = 'block';
    }
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 100);
});
document.querySelector('.Time').addEventListener('click', function () {
    const looksText = document.getElementById('Time-text');
    if (looksText.style.display === 'block') {
        looksText.style.display = 'none';
    } else {
        looksText.style.display = 'block';
    }
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 100);
});
document.querySelector('.Letter').addEventListener('click', function () {
    const looksText = document.getElementById('letter-text');
    if (looksText.style.display === 'block') {
        looksText.style.display = 'none';
    } else {
        looksText.style.display = 'block';
    }
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 100);
});