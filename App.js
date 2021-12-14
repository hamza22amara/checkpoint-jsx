
function App() {
  return (
    <div className="App">
      <div style={{border:solid,'1px' , Black ,maxWidth:'100vw'}}>

<h1 className="title red">Votre nom ici</h1>

<br/>

<img src={"/imageInSrc.jpg"} ></img>

<br/>

<img src={"/imageInPublic.jpg"}></img>

</div>

<vidéo {width='320', height='240', contrôles}>

<source src={"/maVidéo.mp4"} type={'video/mp4'}></source>

</vidéo>
    </div>
  );
}

export default App;
