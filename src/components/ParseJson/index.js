import React from 'react';
import Papa from 'papaparse';
import DataGrid from '../DataGrid';

const ParseJson = ({csvData, rubrica, mesPagto, anoPagto}) => {
  
  const csv = Papa.parse(csvData, {header: true, dynamicTyping: true});


  return ( 
    <div>
      <h1 className='mt-5 text-center text-2sm font-bold leading-9 tracking-tight text-white'>
        Arquivo Convertido para Movimentação Financeira
      </h1>
      <DataGrid csv={csv} rubrica = {rubrica} mesPagto={mesPagto} anoPagto={anoPagto}/> 
    </div>
  )
}

export default ParseJson;
