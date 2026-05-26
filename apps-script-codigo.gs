// =============================================================
// GOOGLE APPS SCRIPT - Deusas no Digital
// Recebe os dados do form e escreve no Google Sheets
// =============================================================

function doPost(e) {
  try {
    // Pega a planilha ativa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse dos dados enviados
    const data = JSON.parse(e.postData.contents);

    // Se for a primeira linha, adiciona cabeçalho
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Data/Hora',
        'Nome + Instagram',
        'E-mail',
        'WhatsApp',
        'Como atua hoje',
        'Estado do negócio',
        'Desafios no digital',
        'O que quer transmutar',
        'Prontidão',
        'Investimento mensal',
        'Algo mais'
      ]);

      // Formatar cabeçalho
      const headerRange = sheet.getRange(1, 1, 1, 11);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#00795f');
      headerRange.setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // Adiciona a nova linha com os dados
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('pt-BR'),
      data.nome_instagram || '',
      data.email || '',
      data.whatsapp || '',
      data.atuacao || '',
      data.estado_negocio || '',
      data.desafios || '',
      data.transmutar || '',
      data.prontidao || '',
      data.investimento || '',
      data.outro || ''
    ]);

    // Resposta de sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // Resposta de erro
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função de teste — roda manualmente uma vez pra autorizar permissões
function teste() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow(['Teste', 'OK']);
}
