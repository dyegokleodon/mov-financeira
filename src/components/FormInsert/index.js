import React, { useState } from 'react';
import FormatMovFin from '@/utils/FormatMovFin2';

import { saveAs } from 'file-saver';

export default function FormInsert() {
  const [userData, setUserData] = useState({
    codUorg: '',
    siape: '',
    dv: '',
    comando: '',
    tipo: '',
    rubrica: '',
    sequencia: '',
    valor: '',
    prazo: '',  
    
  });
  
  const [rubrica, setRubrica] = useState('')
  const [mesPagto, setMesPagto] = useState('')
  const [anoPagto, setAnoPagto] = useState('')

  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...userData };
    setUserList([...userList, newUser]);
    setUserData({
      codUorg: '',
      siape: '',
      dv: '',
      comando: '',
      tipo: '',
      rubrica: '',
      sequencia: '',
      valor: '',
      prazo: '', 
    });
  };

  const handleNumberInputChange = (name, value, min, max) => {
    if (value === '' || (parseInt(value, 10) >= min && parseInt(value, 10) <= max)) {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const dadosFormat = FormatMovFin(userList, rubrica, mesPagto, anoPagto);

  const handleDownloadClick = () => {
    const text = dadosFormat
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'arquivo.txt');
  }
  

  return (
    <div className="flex flex-col w-full h-full ">

      <div className="flex flex-col w-full h-full items-center justify-center">
        <input 
          className="w-1/4 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center text-lg" 
          type="number"
          placeholder="Número da rubrica"
          value={rubrica} 
          onChange={(event) => setRubrica(event.target.value.slice(0,5))}
        />
        <div className="flex flex-row h-full w-full items-center justify-center space-x-5">
         
          <input 
            className="w-12 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center"
            type="number"
            placeholder="Mês" 
            value={mesPagto}
            onChange={(e) => setMesPagto(e.target.value.slice(0,2))}
          />
  
          <input 
            className="w-20 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center"
            type="number"
            placeholder="Ano" 
            value={anoPagto}
            onChange={(e) => setAnoPagto(e.target.value.slice(0,4))}
          />
  
        </div>
      </div>
     
      <div className="flex flex-col w-full h-full items-center">

        <h1 className="text-2xl text-gray-400 items-center justify-center">
          Formulário de Usuário
        </h1>
        
        <form onSubmit={handleSubmit}>
         
          <div className="flex flex-row mt-5 items-start justify-start">
         
            <input 
              className="w-28 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center mr-2"
              required
              type="number"
              name="codUorg"
              placeholder="Codigo Uorg"
              value={userData.codUorg} 
              onChange={(e) => handleNumberInputChange('codUorg', e.target.value, 0, 99999)} 
            />
         
            <input 
              className="w-28 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center mr-2"
              required
              type="number" 
              name="siape"
              placeholder="Siape"
              value={userData.siape} 
              onChange={(e) => handleNumberInputChange('siape', e.target.value, 0, 9999999)} 
            />
          
            <input 
              className="w-10 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center mr-2"
              required
              type="number" 
              name="dv"
              maxLength={1}
              placeholder="DV"
              value={userData.dv} 
              onChange={(e) => handleNumberInputChange('dv', e.target.value, 0, 9)} 
            />
         
            <input 
              className="w-28 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center mr-2"
              required
              type="number"
              name="comando"
              placeholder="Comando" 
              value={userData.comando} 
              onChange={(e) => handleNumberInputChange('comando', e.target.value, 0, 9)} 
              />
         
            <input 
              className="w-10 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center mr-2"
              required
              type="number" 
              name="tipo"
              placeholder="Tipo"
              value={userData.tipo} 
              onChange={(e) => handleNumberInputChange('tipo', e.target.value, 0, 9)} 
            />
          
            <input 
              className="w-40 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center mr-2"
              required
              type="text" 
              name="rubrica"
              placeholder="Rubrica"
              value={userData.rubrica} 
              onChange={(e) => handleNumberInputChange('rubrica', e.target.value, 0, 99999)} 
            />
          </div>

          <div className="flex flex-row mt-5">
            
            <input 
              className="w-28 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center mr-2"
              required
              type="number"
              name="sequencia"
              placeholder="Sequencia" 
              value={userData.sequencia} 
              onChange={(e) => handleNumberInputChange('sequencia', e.target.value, 0, 9)} 
              />
         
            <input 
              className="w-28 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center mr-2"
              required
              type="number" 
              name="valor"
              placeholder="Valor"
              value={userData.valor} 
              onChange={(e) => handleNumberInputChange('valor', e.target.value, 0, 99999999999)} 
            />
          
            <input 
              className="w-10 h-8 mb-5 rounded-sm items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 text-center mr-2"
              required
              type="text" 
              name="prazo"
              placeholder="Prazo"
              value={userData.prazo} 
              onChange={(e) => handleNumberInputChange('prazo', e.target.value, 0, 999)} 

            />
            <button
              className="flex w-80 h-8 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
              type="submit"
            >
                Adicionar Usuário
            </button>    
          </div>   
        </form>
        
      </div>

      <div className="flex flex-col items-center">
        {userList.length !== 0 &&
          <button
                className="mt-5 w-1/2 h-8 justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                type="button"
                onClick={handleDownloadClick}
              >
                  Gerar Arquivo
          </button>   
        }
        <h1
          className="text-2xl text-gray-400 items-center justify-center mb-4"
        >      
          Usuários Adicionados
        </h1>
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase dark:bg-gray-900 dark:text-gray-400">
           <tr>
            <th>Uorg</th>
            <th>Siape</th>
            <th>DV</th>
            <th>Comando</th>
            <th>Tipo</th>
            <th>Rubrica</th>
            <th>Sequencia</th>
            <th>Valor</th>
            <th>Prazo</th>
           </tr>
          </thead>
          <tbody className="w-full h-full items-center justify-center">
            {userList.map((user, index) => (
              <tr key={index} className="text-sm w-full h-full items-center justify-center bg-white border-b dark:bg-gray-600 dark:border-gray-700">
                  <td className="text-center font-medium text-gray-900 dark:text-white">{user.codUorg}</td>
                  <td className="text-center font-medium text-gray-900 dark:text-white">{user.siape}</td>
                  <td className="text-center font-medium text-gray-900 dark:text-white">{user.dv}</td>
                  <td className="text-center font-medium text-gray-900 dark:text-white">{user.comando}</td>
                  <td className="text-center font-medium text-gray-900 dark:text-white">{user.tipo}</td>
                  <td className="text-center font-medium text-gray-900 dark:text-white">{user.rubrica}</td>
                  <td className="text-center font-medium text-gray-900 dark:text-white">{user.sequencia}</td>
                  <td className="text-center font-medium text-gray-900 dark:text-white">{user.valor}</td>
                  <td className="text-center font-medium text-gray-900 dark:text-white">{user.prazo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}