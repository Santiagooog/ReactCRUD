import './App.css'
import EmployeeList from './components/EmployeeList';
import { Header } from './components/Header';
import { SearchEmployee } from './components/searchEmployee';
function App() {

  return (
    <div className='flex-col items-center'>
        <Header />
        <h1 className='text-center m-9.5 mb-10 font-bold text-4xl'>Gestión de Empleados</h1>
        <SearchEmployee />
        <EmployeeList />
    </div>
);
}

export default App
