// ✅ 테마 저장 및 적용
const savedTheme = localStorage.getItem('selectedTheme') || 'theme1';
document.body.className = savedTheme;

document.querySelectorAll('.corner-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.getAttribute('data-theme');
    document.body.className = theme;
    localStorage.setItem('selectedTheme', theme); // 테마 저장
  });
});

// ✅ Contact 팝업
const popup = document.getElementById('popup');
const contactBtn = document.getElementById('contactBtn');
const closePopup = document.getElementById('closePopup');
const contactForm = document.getElementById('contactForm');
const hiddenForm = document.getElementById('hiddenForm');
const popupMessage = document.getElementById('popupMessage');

contactBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  hiddenForm.name.value = this.name.value;
  hiddenForm.email.value = this.email.value;
  hiddenForm.company.value = this.company.value;
  hiddenForm.message.value = this.message.value;

  fetch(hiddenForm.action, {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(hiddenForm),
  })
    .then(response => {
      if (response.ok) {
        popup.style.display = 'none';
        popupMessage.style.display = 'block';
        setTimeout(() => {
          popupMessage.style.display = 'none';
        }, 5000);
        contactForm.reset();
      } else {
        alert("전송 실패. 다시 시도해주세요.");
      }
    })
    .catch(() => {
      alert("오류가 발생했습니다.");
    });
});

// ✅ About Me 모달
const aboutModal = document.getElementById('aboutModal');
const closeAbout = document.getElementById('closeAbout');

function openAboutModal() {
  aboutModal.style.display = 'block';
}

closeAbout.addEventListener('click', () => {
  aboutModal.style.display = 'none';
});

aboutModal.addEventListener('click', (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = 'none';
  }
});

// ✅ 이미지 모달
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  modalImg.src = imageSrc;
  modal.style.display = "block";
}

document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = 'none';
});

document.getElementById('imageModal').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = 'none';
});
