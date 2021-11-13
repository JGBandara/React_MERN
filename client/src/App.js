import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Student from './component/Student';
import Students from './component/Students';
import CustomizedDialogs from './component/Popup';


function App() {
  return (
    <div className="container">
      
      <Students/>
      <CustomizedDialogs>
        <Student/>
      </CustomizedDialogs>
      
    </div>
  );
}

export default App;
//0c2WtDAgIghaiuA0
