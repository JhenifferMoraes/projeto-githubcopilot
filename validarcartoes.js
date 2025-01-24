function validateCreditCard(cardNumber) {
    const cardPatterns = {
      // Visa: Começa com 4 e possui 13 ou 16 dígitos
      Visa: /^4[0-9]{12}(?:[0-9]{3})?$/, 
  
      // MasterCard: Começa com dígitos de 51 a 55 ou entre 2221 e 2720, com 16 dígitos
      MasterCard: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[0-1][0-9]{12}|720[0-9]{12}))$/, 
  
      // Elo: Pode começar com vários intervalos como 4011, 4312, 4389, etc.
      Elo: /^(4011|4312|4389|4514|4573|4576|5041|5066|5067|509|6277|6362|6363|650|6516|6550)[0-9]*$/, 
  
      // American Express: Começa com 34 ou 37 e possui 15 dígitos
      AmericanExpress: /^3[47][0-9]{13}$/, 
  
      // Discover: Começa com 6011, 65, ou intervalos de 644 a 649
      Discover: /^(6011|65|64[4-9])[0-9]*$/, 
  
      // Hipercard: Geralmente começa com 6062
      Hipercard: /^6062[0-9]*$/, 
  
      // Diners Club: Começa com 38, 30 (de 300 a 305) ou 36
      DinersClub: /^(38|30[0-5]|36)[0-9]*$/, 
  
      // EnRoute: Começa com 20 ou 21
      EnRoute: /^(20|21)[0-9]*$/, 
  
      // JBC: Começa com 35 e possui 16 dígitos
      JBC: /^35[0-9]{14}$/, 
  
      // Voyager: Começa sempre com 869
      Voyager: /^869[0-9]*$/, 
  
      // Aura: Começa com 50
      Aura: /^50[0-9]*$/ 
    };
  
    // Percorre cada tipo de cartão e verifica se o número corresponde ao padrão
    for (const [cardType, pattern] of Object.entries(cardPatterns)) {
      if (pattern.test(cardNumber)) {
        return `${cardNumber} é um cartão válido do tipo ${cardType}.`;
      }
    }
  
    // Retorna inválido se não corresponder a nenhum padrão
    return `${cardNumber} não é um número de cartão válido.`;
  }
  
  // Exemplos de uso
  console.log(validateCreditCard("4539517523151924")); // Visa
  console.log(validateCreditCard("5105105105105100")); // MasterCard
  console.log(validateCreditCard("6011123456789012")); // Discover
  console.log(validateCreditCard("342345678901234")); // American Express
  console.log(validateCreditCard("869123456789012")); // Voyager
  
  