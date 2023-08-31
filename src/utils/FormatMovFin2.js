export default function FormatMovFin(csvData, rubrica, mesPagto, anoPagto) {
  
  const dadosConc = csvData.map((item)=> {
    const valor = ('00000000000' + item.valor).slice(-11);
    const prazo = ('000' + item.prazo).slice(-3);
    const matriculaOrigem = ('00000000');
    const nomeBeneficiario = ('                                      ');
    const rubricaCalculo1 = ('00000');
    const rubricaCalculo2 = ('00000');    
    const rubricaCalculo3 = ('00000');
    const filler4 = ('    ');
    const AssuntoCalculoParam = ('00');
    const fracaoNumerador = ('000');             
    const fracaoDenominador = ('000');
    const percentual = ('00000');
    const classificacaoCargoEmprego = (' ');
    const nivelSalarialCargoEmprego = ('         ');
    const filller6 = ('      ');
    const rubricaBrancos1 = ('     ');           
    const rubricaBrancos2 = ('     ');
    const pontuacao = ('0000');
    const minuto = ('00000');
    const filler5 = ('     ');
    const cpfCnpj = ('              ');
    const codBanco = ('000');
    const codAgencia = ('000000');
    const numContaCorrente = ('0000000000000');
    let anoRubrica = ('    ');
    let mesRubrica = ('  ');           
    
    if(item.mesRub.length > 0) {
      mesRubrica = ('0000' + item.mesRub).slice(-2); 
    }
    if(item.anoRub.length > 0) {
      anoRubrica = ('0000' + item.anoRub).slice(-4); 
    }

    const uorgFormated = ('00000' + item.codUorg).slice(-5);           
    const rubricaFormated = ('00000' + item.rubrica).slice(-5);           
    const siapeFormated = ('0000000' + item.siape).slice(-7);           
    
    console.log(anoRubrica)
    const dadoConc = `1${uorgFormated}${siapeFormated}${item.dv}${item.comando}${item.tipo}${rubricaFormated}${item.sequencia}${valor}${prazo}${matriculaOrigem}${nomeBeneficiario}${rubricaCalculo1}${rubricaCalculo2}${rubricaCalculo3}${filler4}${AssuntoCalculoParam}${fracaoNumerador}${fracaoDenominador}${percentual}${classificacaoCargoEmprego}${nivelSalarialCargoEmprego}${filller6}${rubricaBrancos1}${rubricaBrancos2}${pontuacao}${minuto}${mesRubrica}${anoRubrica}${filler5}${cpfCnpj}${codBanco}${codAgencia}${numContaCorrente}${filler4}`
    return dadoConc;

  });  

  const rubricaFormatada = ('00000' + rubrica).slice(-5);
  const mesFormat = ('00' + mesPagto).slice(-2);
  const anoFormat = ('0000' + anoPagto).slice(-4);
  const header = `0262400000000000000000${mesFormat}${anoFormat}MOVFIN                             MOVI-FINANC ${rubricaFormatada}                                                                                                                        `;
  
  //monta trailer
  const totalReg = ('000000' + dadosConc.length).slice(-7);
  const trailler = `9262409999999999999999${totalReg}                                                                                                                                                                           `;

  
  const dadosString = JSON.stringify(dadosConc);
  const subsVirgulaPorEspaco = dadosString.replace(/,/g, '\n')
  const dadosTratados = subsVirgulaPorEspaco.replace(/[^0-9a-zA-Z\s]/g, '')
  
  const dadosMovfin =`${header}\r\n${dadosTratados}\r\n${trailler}`;
  return dadosMovfin;

  
}
