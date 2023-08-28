import React, {useState} from 'react';
import { InputFile } from '@/components/InputFile';
import  FormInsert  from '@/components/FormInsert';

export default function Home() {
 
  const [showComponentInport, setShowComponentInport] = useState(false);
  const [showComponentInsert, setShowComponentInsert] = useState(false);

  
  const toggleComponentInport = () => {
    setShowComponentInport(!showComponentInport);
    setShowComponentInsert(false)
  };

  const toggleComponentIsert = () => {
    setShowComponentInsert(!showComponentInsert);
    setShowComponentInport(false)
  };

  return (
    
    <div className="w-full h-max flex justify-center items-center my-4 flex-col">
      <p className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white my-3">
        Geração de Arquivos <br />
        para movimentação financeira.
      </p>
      <div className="flex flex-row w-1/2 h-full mb-5 items-center justify-center">
      <button
        className="mt-5 mb-5 mr-2 flex w-80 h-25 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        type="button"
        onClick={toggleComponentInport}
      >
        Importar através de um arquivo CSV
      </button>

      <button
        className="mt-5 mb-5 ml-2 flex w-80 h-25 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        type="button"
        onClick={toggleComponentIsert}
      >
        Cadastrar Dados pelo site
      </button>
      
    </div>
    { showComponentInport &&
        <InputFile />
    }
    { showComponentInsert &&
        <FormInsert /> 
    } 

      
    </div>
  )
}
