document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.tooltip-palabra');
    if (tooltips.length === 0) return;
    const notas = [];
    
    tooltips.forEach((tooltip, index) => {
        const numero = index + 1;
        const termino = tooltip.childNodes[0].textContent.trim();
        const textoTooltip = tooltip.querySelector('.tooltip-texto');
        
        if (textoTooltip) {
            const definicion = textoTooltip.textContent.trim();
            const supNota = document.createElement('sup');
            supNota.className = 'nota-numero';
            supNota.textContent = '§' + numero;
            tooltip.appendChild(supNota);
            notas.push({ numero, termino, definicion });
        }
    });
    
    let html = '<div class="notas-al-pie"><h3>Lista de Tooltip</h3>';
    notas.forEach(n => {
        html += '<div class="nota-item">';
        html += '<span class="nota-item-numero">§' + n.numero + '.</span> ';
        html += '<span class="nota-item-termino">' + n.termino + ':</span> ';
        html += n.definicion + '</div>';
    });
    html += '</div>';
    document.getElementById('notas-container').innerHTML = html;
});
