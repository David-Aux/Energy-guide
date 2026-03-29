function downloadSystemPDF() {
  if (!userCalculationResult) {
    alert("No system to export");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const r = userCalculationResult;

  doc.setFontSize(16);
  doc.text("Energy Guide - Solar System Report", 10, 15);

  doc.setFontSize(12);
  doc.text(`Inverter: ${r.invKva}kVA`, 10, 30);
  doc.text(`Panels: ${r.numPanels} x 500W`, 10, 40);
  doc.text(`Battery: ${r.lithiumPackKwh} kWh`, 10, 50);
  doc.text(`Daily Energy: ${r.dailyKwh.toFixed(2)} kWh`, 10, 60);
  doc.text(`Estimated Cost: ₦${r.totalCost.toLocaleString()}`, 10, 70);

  doc.save("energy-guide-system.pdf");
}

function shareSystemWhatsApp() {
  if (!userCalculationResult) {
    alert("No system to share");
    return;
  }

  const r = userCalculationResult;

  const message = `Energy Guide Solar Recommendation ☀️

Inverter: ${r.invKva}kVA
Panels: ${r.numPanels} x 500W
Battery: ${r.lithiumPackKwh} kWh
Daily Load: ${r.dailyKwh.toFixed(2)} kWh

Estimated Cost: ₦${r.totalCost.toLocaleString()}

Generated via Energy Guide`;

  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
