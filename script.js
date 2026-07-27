document.addEventListener('DOMContentLoaded', () => {

    // 1. Configuração do WhatsApp
    // Substitua pelo número real da barbearia (Formato: Código do País + DDD + Número)
    const WHATSAPP_NUMBER = '5521999999999'; 

    // 2. Lógica dos Botões de Agendamento
    const scheduleButtons = document.querySelectorAll('.btn-schedule');

    scheduleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Captura os dados do serviço clicado
            const serviceName = e.target.getAttribute('data-service');
            const servicePrice = e.target.getAttribute('data-price');
            
            // Monta a mensagem pré-programada
            const message = `Olá! Gostaria de agendar o serviço de *${serviceName}* (Valor aprox. R$ ${servicePrice}). Qual a disponibilidade?`;
            
            // Codifica a mensagem para o formato de URL
            const encodedMessage = encodeURIComponent(message);
            
            // Cria o link da API do WhatsApp
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
            
            // Abre o WhatsApp em uma nova aba
            window.open(whatsappUrl, '_blank');
        });
    });

    // 3. Efeito de Rolagem Suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});