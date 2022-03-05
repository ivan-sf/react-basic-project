import './App.css';

const Title = ()=>{
  let title = "Hola mundo";
  return <h1>{title}</h1>
}

const Subtitle = ()=>{
  let subTitle = "App de prueba"
  return <h2>{subTitle}</h2>
}

const App = () =>{
  
  var hoy = new Date();
  var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
  var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
  return (
    <div className="App">
      <Title />
      <Subtitle />
      {fecha}
      <br></br>
      {hora}
    </div>
  );
}

export default App;
