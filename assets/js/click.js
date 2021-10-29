function switchVisible1() {
    if (document.getElementById('coding-2')) {

        if (document.getElementById('coding-1').style.display == 'none') {
            document.getElementById('coding-1').style.display = 'block';
            document.getElementById('coding-2').style.display = 'none';
        }
        else {
            document.getElementById('coding-1').style.display = 'none';
            document.getElementById('coding-2').style.display = 'flex';
        }
    }
};

function switchVisible2() {
    if (document.getElementById('design-2')) {

        if (document.getElementById('design-1').style.display == 'none') {
            document.getElementById('design-1').style.display = 'block';
            document.getElementById('design-2').style.display = 'none';
        }
        else {
            document.getElementById('design-1').style.display = 'none';
            document.getElementById('design-2').style.display = 'flex';
        }
    }
};
