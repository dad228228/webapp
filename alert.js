const refLinkBtn = document.getElementById('ref-link-btn');
const closeBtn = document.getElementById('close-alert-btn')
const alertElement = document.getElementById('alert');
const progressBar = document.getElementById('progress-bar');
let timer;


function startTimer() {
	timer = setTimeout(function() {
		alertElement.classList.add('show');
  		progressBar.classList.add('start-anim');
  		hideAlert();
	}, 5000)
};

function hideAlert() {
	clearTimeout(timer)
	alertElement.classList.add('hide');
	alertElement.classList.remove('show', 'hide');
	progressBar.classList.remove('start-anim');
	timer = undefined;
}

function showAlert() {
	event.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)
	if (timer) {
		clearTimeout(timer);
		progressBar.classList.remove('start-anim');
		hideAlert();
		void progressBar.offsetWidth; // Перерисовывает элемент для сброса анимации возвращая в исходное состояние
	}

	alertElement.classList.add('show');
  	progressBar.classList.add('start-anim');
  	startTimer();
}


function closeAlertBtn() {
	event.preventDefault();
	hideAlert();
}


refLinkBtn.addEventListener("click", showAlert);
closeBtn.addEventListener("click", closeAlertBtn);