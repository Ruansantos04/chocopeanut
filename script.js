// Alternar seções com scroll suave
function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.classList.remove('visivel'));

  const secaoAtiva = document.getElementById(id);
  if (secaoAtiva) {
    secaoAtiva.classList.add('visivel');
    window.scrollTo({ top: secaoAtiva.offsetTop - 80, behavior: 'smooth' });
  }
}

// Validação genérica de formulários
function validarFormulario(event) {
  event.preventDefault(); // Previne o envio até validar

  const form = event.target;
  const nome = form.querySelector("input[name='nome']").value.trim();
  const email = form.querySelector("input[name='email']").value.trim();
  const mensagem = form.querySelector("textarea").value.trim();

  // Verificar se os campos estão preenchidos
  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Mensagem de sucesso (pode ser substituída por uma confirmação na página)
  alert("Obrigado pelo envio do seu feedback!");

  // Limpar o formulário após envio
  form.reset();
}

// Adicionar evento de validação ao formulário de feedback
document.addEventListener("DOMContentLoaded", () => {
  const formFeedback = document.getElementById("form-feedback");
  if (formFeedback) {
    formFeedback.addEventListener("submit", validarFormulario);
  }
});

// Função para encomendar produto
function encomendarProduto() {
  document.getElementById('encomendas').scrollIntoView({ behavior: 'smooth' });
}

// Controle de slides
let slideIndex = 0;

function mudarSlide(direcao) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  slideIndex = (slideIndex + direcao + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Carrossel automático e manual na seção produto (3 segundos para a direita)
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('#carrossel-produto .imagem-carrossel');
  const prevBtn = document.querySelector('#carrossel-produto .prev');
  const nextBtn = document.querySelector('#carrossel-produto .next');
  let slideAtual = 0;
  let timer = null;

  function mostrarSlide(n) {
    if (!slides.length) return;
    slideAtual = (n + slides.length) % slides.length;
    slides.forEach((img, i) => {
      img.style.display = i === slideAtual ? 'block' : 'none';
    });
  }

  function proximoSlide() {
    mostrarSlide(slideAtual + 1);
  }

  function anteriorSlide() {
    mostrarSlide(slideAtual - 1);
  }

  function reiniciarTimer() {
    clearInterval(timer);
    timer = setInterval(proximoSlide, 3000);
  }

  if (slides.length) {
    mostrarSlide(0);
    timer = setInterval(proximoSlide, 3000);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        anteriorSlide();
        reiniciarTimer();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        proximoSlide();
        reiniciarTimer();
      });
    }
  }
});