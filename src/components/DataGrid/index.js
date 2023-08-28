import React from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

import FormatMovFin from '../../utils/FormatMovFin';

const DataGrid = ({csvData, rubrica, mesPagto, anoPagto}) => {
  if(!csvData){
    return null;
  }
  const csv = Papa.parse(csvData, {header: true, dynamicTyping: true});
  //recebe os dados do JSON Formatados para layout movFin
  const dadosFormat = FormatMovFin(csv, rubrica, mesPagto, anoPagto);

  //download do arquivo formatado
    const handleDownloadClick = () => {
      const text = dadosFormat
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, 'arquivo.txt');
    }
    
  return (
    <div>
      {dadosFormat.length === 233
            ?
              <span>O arquivo para download estará disponivel após upload do csv</span>
              
            :
            <>
              <h1 className='mt-5 text-center text-2sm font-bold leading-9 tracking-tight text-white'>
                Arquivo Convertido para Movimentação Financeira
              </h1>
              <button 
                onClick={handleDownloadClick}
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Baixar
              </button>
            </>
              
            }
    </div>
  )
}

export default DataGrid;