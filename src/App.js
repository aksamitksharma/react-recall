import './App.css';
import DemoCallback from './components/hooks/Callback/DemoCallback';
import DemoClassCountEffect from './components/hooks/Effects/DemoClassCount';
import DemoFunCount from './components/hooks/Effects/DemoFunCount';
import DemoRef from './components/hooks/Ref/DemoRef';
import DemoClassCount from './components/hooks/State/DemoClassCount';
import DemoUseState from './components/hooks/State/DemoUseState';
import ThisTest from './components/Test/ThisTest';



function App() {
  return (
    <div className="App">
      <ThisTest/>
      {/* <DemoRef/> */}
      {/* <DemoUseState/> */}
      {/* <DemoClassCount/> */}
      {/* <DemoClassCountEffect/> */}
      {/* <DemoFunCount/> */}
    </div>
  );
}

export default App;
