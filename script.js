document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuração do WhatsApp
    const WHATSAPP_NUMBER = '5521999999999'; // Substitua pelo seu número

    // 2. Lógica dos Botões de Agendamento
    const scheduleButtons = document.querySelectorAll('.btn-schedule');

    scheduleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const serviceName = e.target.getAttribute('data-service');
            const servicePrice = e.target.getAttribute('data-price');
            
            const message = `Olá! Gostaria de agendar o serviço de *${serviceName}* (Valor aprox. R$ ${servicePrice}). Qual a disponibilidade?`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });
    });
});