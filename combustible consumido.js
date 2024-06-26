document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const kilometros = parseFloat(document.getElementById('kilometros').value);
    const litros = parseFloat(document.getElementById('litros').value);
    
    if (kilometros > 0 && litros > 0) {
        const consumoPorKilometro = litros / kilometros;
        document.getElementById('resultado').innerText = `El consumo de combustible es de ${consumoPorKilometro.toFixed(2)} litros por kilómetro.`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor ingrese valores válidos mayores a cero.';
    }
});