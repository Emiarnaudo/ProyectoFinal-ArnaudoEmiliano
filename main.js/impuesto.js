function calcularImpuesto() {
    const precio = document.getElementById("precio").value;
    const pais = document.getElementById("impuesto").value;
    let porcentajeImpuesto;
    switch (pais) {
      case "Argentina":
        porcentajeImpuesto = 76;
        break;
      case "Brasil":
        porcentajeImpuesto = 30;
        break;
      case "Chile":
        porcentajeImpuesto = 19;
        break;
      case "Colombia":
        porcentajeImpuesto = 19;
        break;
      case "México":
        porcentajeImpuesto = 16;
        break;
      case "Perú":
        porcentajeImpuesto = 18;
        break;
      default:
        porcentajeImpuesto = 0;
    }
    const impuesto = precio * porcentajeImpuesto / 100;
    const total = Number(precio) + impuesto;
    document.getElementById("resultado").textContent = `El impuesto país en ${pais} es de ${porcentajeImpuesto}% y el precio total del juego sería de $${total.toFixed(2)}`;
  }