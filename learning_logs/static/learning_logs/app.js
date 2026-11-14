/* Confirmação antes de excluir: formulários com data-confirm abrem um diálogo.
   Sem JavaScript, o formulário é enviado direto, como um botão comum. */
(function () {
    var dialog = document.getElementById('confirm-dialog');
    if (!dialog || typeof dialog.showModal !== 'function') return;

    var message = dialog.querySelector('[data-confirm-message]');
    var accept = dialog.querySelector('[data-confirm-accept]');
    var cancel = dialog.querySelector('[data-confirm-cancel]');
    var pending = null;

    document.addEventListener('submit', function (event) {
        var form = event.target;
        if (!form.matches || !form.matches('form[data-confirm]')) return;
        event.preventDefault();
        pending = form;
        message.textContent = form.getAttribute('data-confirm');
        dialog.showModal();
    });

    cancel.addEventListener('click', function () { dialog.close(); });

    accept.addEventListener('click', function () {
        var form = pending;
        pending = null;
        dialog.close();
        if (form) form.submit();
    });
})();
