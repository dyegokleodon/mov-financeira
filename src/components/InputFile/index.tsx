import { CloseIcon } from "@/icons/CloseIcon";
import { FileIcon } from "@/icons/FileIcon";
import { UploadIcon } from "@/icons/UploadIcon";
import { useCallback, useState } from "react"
import { useDropzone, DropzoneState } from "react-dropzone";

import DataGrid from '../../components/DataGrid';

interface InputProps {
  dropzone: DropzoneState;
}

interface HasFileProps {
  file?: File,
  csvData: string,
  rubrica: string,
  mesPagto: string,
  anoPagto: string,
  removeFile: () => void;

}

export const InputFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<string>('');
  const [rubrica, setRubrica] = useState('');
  const [mesPagto, setMesPagto] = useState('');
  const [anoPagto, setAnoPagto] = useState('');
 
  const removeFile = useCallback(() => {
    setFile(null);
  }, []) 
  
  const onDrop = useCallback((files: File[]) => {
    setFile(files[0]);
  }, []);

  
  const dropzone = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    }
  });
 
  if(file){
    const reader = new FileReader();
    reader.onload = (e:any) => {
      const contents = e.target.result;
      setCsvData(contents);   
     
    };
    reader.readAsText(file);
     
  }
  
  if(file) {
    return <HasFile file={file} removeFile={removeFile} csvData={csvData} rubrica={rubrica} mesPagto={mesPagto} anoPagto={anoPagto}/>;
  } else{
    
    return (
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
        
        {
          rubrica && mesPagto.length === 2 && anoPagto.length === 4 &&
          <Input dropzone = {dropzone}/>
        }
        
      </div>
    );
  }


};

  const Input = ({dropzone}: InputProps) => {
    const {getRootProps, getInputProps, isDragActive} = dropzone;
    return (
      <div 
        {...getRootProps()}
        className={`w-1/2 h-full rounded-lg border-dashed border-4 hover:border-gray-500 bg-gray-700 hover:bg-gray-600 transition-all
        ${isDragActive ? 'border-blue-500' : 'border-gray-600'}`}>
        <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
          <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
            <UploadIcon className={`w-10 h-10 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`}/>
            {isDragActive ? (
              <p className="font-bold text-lg text-blue-400">solte para adicionar</p>  
            ) : (
              <>
                <p className="mb-2 text-lg text-gray-400">
                   <span className="font-bold">Clique para enviar</span> ou arraste até aqui
                </p>
                <p className="text-gray-400 text-sm">Arquivo CSV</p>
              </>
            )}
            
          </div>
        </label>
        <input {...getInputProps()} className="hidden" />
      </div>
    )
  }

  const HasFile = ({file, removeFile, csvData, rubrica, mesPagto, anoPagto}:HasFileProps) => {
    
    return (
      <div className="flex flex-col w-full h-full justify-center items-center" >
        <div className="w-1/2 h-full rounded-lg flex justify-center items-center">
          <div className="bg-white w-36 rounded-md shadow-md flex gap-3 items-center justify-center">
            <FileIcon className="w-5 h-5 my-4 ml-4"/>
            <span className="text-sm text-gray-500 my-4">{file?.name}</span>
            <button type="button" onClick={removeFile} className="place-self-start mt-1 p-1">
              <CloseIcon className="w-5 h-5"/>
            </button>
          </div>
            
               
        </div>

        <div className="my-5 justify-center items-center">
          
          <DataGrid csvData = {csvData} rubrica={rubrica} mesPagto={mesPagto} anoPagto={anoPagto}/>
        </div>
      </div>

    )
  }


