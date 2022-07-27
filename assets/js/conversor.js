document.getElementById('botao-acessar').onclick = resultado();


function resultado() {
    var altura = document.getElementById('altura').value;
    var largura = document.getElementById('largura').value;

    if (document.getElementById('opcaopixel').checked) {
        var medidaparaPixellargura = (parseFloat(largura) * 300) / 2.54;
        var medidaparaPixelaltura = (parseFloat(altura) * 300) / 2.54;
        document.getElementById('caixa1').value = medidaparaPixellargura;
        document.getElementById('caixa2').value = medidaparaPixelaltura;
        document.getElementById('caixa1').value = parseFloat(medidaparaPixellargura).toFixed(0);
        document.getElementById('caixa2').value = parseFloat(medidaparaPixelaltura).toFixed(0);

    } else if (document.getElementById('opcaocentimetro').checked) {
        var medidaparaCentimetroaltura = (parseFloat(altura) / 300) * 2.53;
        var medidaparaCentimetrolargura = (parseFloat(largura) / 300) * 2.53;
        document.getElementById('caixa1').value = medidaparaCentimetrolargura;
        document.getElementById('caixa2').value = medidaparaCentimetroaltura;
        document.getElementById('caixa1').value = parseFloat(medidaparaCentimetrolargura).toFixed(2);
        document.getElementById('caixa2').value = parseFloat(medidaparaCentimetroaltura).toFixed(2);
    }

}