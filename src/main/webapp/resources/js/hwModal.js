const toggleModal = () => {
    document.querySelector('.modal')
        .classList.toggle('modal--hidden');
};

document.querySelector('#show-modal')
    .addEventListener('click', toggleModal);

document.querySelector('.modal__close-bar span')
    .addEventListener('click', toggleModal);

const toggleModal2 = (seq, title, end_date) => {
	var contents = $("#getContents").val();
    document.querySelector('.modal2')
        .classList.toggle('modal2--hidden');
	document.querySelector('#modifTitle').value = title;
	document.querySelector('#modifContents').value = contents;
	//document.querySelector('#modifEndDate').value = end_date;
	document.querySelector('#hwModifSubmitBtn').value = seq;
};

document.querySelector('.modal2__close-bar span')
    .addEventListener('click', toggleModal2);
