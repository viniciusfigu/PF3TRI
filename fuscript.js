const calcular = document.getElementById('calcular');


function investir(){
    const nome = document.getElementById('nome').value;
    let mensal = Number(document.getElementById('Rmensal').value);
    let tjuros = Number(document.getElementById('Txjuros').value);
    let meses = Number(document.getElementById('Nparcelas').value);
    let juros = tjuros/100;
    var resultado = document.getElementById("resultado");

   
    let p = ((1+juros)**meses-1)/juros;
    let vf = mensal*p.toFixed(2);
    if (nome !=='' && mensal !=='' && tjuros !=='' && meses !=='')
  {
    resultado.textContent  = `${nome}, se você aplicar Renda mensal de R$ ${mensal}, 
    com uma taxa de juros de ${tjuros}% ao mês,
    durante ${meses} meses,
    acumulará uma poupança de R$ ${vf}`;
  }
  else{resultado.textContent = 'Para calcular, preencha todos os campos.';}
    
}

calcular.addEventListener('click', investir); 
