//import React from 'react';
import React, {useState} from 'react';

const Calculadora = () => {
  const[count, setCount] = useState(0);
  const [resultado, setResultado]=useState(0);
    //declaración de variables
var numeroEnProceso = "";
var num1 = 0;
var cifras = 0;
var simbolo;
var numeroAcabado = 0;
var opera;
var coma=0;
console.log(numeroEnProceso);
//función que escribe el número tecleado
function Pantalla(){

function numero(numero) {
  if (numeroAcabado === 1) {
    numeroEnProceso = "";
    console.log(numero);
    numeroEnProceso += numero;
    refrescar(numeroEnProceso);
    numeroAcabado = 0;
    coma=0;
  } else {
    console.log(numero);
    numeroEnProceso += numero;
    refrescar(numeroEnProceso);
  }
}
function retro() {
  cifras = numeroEnProceso.length;
  numeroEnProceso = numeroEnProceso.substr("", cifras - 1);
  refrescar(numeroEnProceso);
}
function refrescar(x) {
    window.onload=function(){
        document.getElementById("textoPantalla").value = x;}
}
function borradoParcial() {
  numeroEnProceso = "";
  refrescar(numeroEnProceso);
  numeroAcabado = 0;
}
function borradoTotal() {
  numeroEnProceso = "";
  num1 = 0;
  refrescar(numeroEnProceso);
  numeroAcabado = 0;
}
function operar(s) {
    coma=0;
  if (opera === 1) {
    simbolo = s;
  } else {
    simbolo = s;
    num1 = numeroEnProceso;
    numeroEnProceso = "";
    opera = 1;
  }
}
function igualar() {
    coma=0;
  if (numeroAcabado === 1) {
    refrescar(numeroEnProceso);
  } else {
    numeroEnProceso = num1 + simbolo + numeroEnProceso;
    numeroEnProceso = eval(numeroEnProceso);
    refrescar(numeroEnProceso);
    num1 = 0;
    numeroAcabado = 1;
    opera = 0;
  }
}
function raiz() {
  numeroEnProceso = Math.sqrt(numeroEnProceso);
  refrescar(numeroEnProceso);
  numeroAcabado = 1;
  coma=1;
}
function porcent() {
  numeroEnProceso = numeroEnProceso / 100;
  refrescar(numeroEnProceso);
  numeroAcabado = 1;
  coma=1;
}
function inve() {
  numeroEnProceso = 1 / numeroEnProceso;
  refrescar(numeroEnProceso);
  numeroAcabado = 1;
}
function decimal() {
    if (coma === 0) {
      numero(".");
      coma = 1;
    } else {
      numero(0);
    }
  }
function opuesto() {
  numeroEnProceso = numeroEnProceso * -1;
  refrescar(numeroEnProceso);
}

  return (
      <>
      {Pantalla}
      <div className="calculadora">
<form action="#" name="calculadora" id="calculadora">
    <input
  type="text"
  id="textoPantalla"
  maxLength="20"
  value="0"
  className="cajita_valor"
  readonly="true"
/>

<p>
<input id="Retr" type="button" className="largo" value="Retr" onClick={retro}   />
<input id="CE" type="button" className="largo" value="CE" onClick={borradoParcial}  />
<input id="C" type="button" className="largo" value="C" onClick={borradoTotal}  />
</p>
<p>
<input id="7" type="button" value="7" onClick={numero(7)} />
<input id="8" type="button" value="8" onClick={numero('8')} />
<input id="9" type="button" value="9" onClick={numero('9')} />
<input id="/" type="button" value="/" onClick={operar('/')}  />
<input id="Raiz" type="button" value="Raiz" onClick={raiz()} />
</p>
<p>
<input id="4" type="button" value="4" onClick={numero('4')} />
<input id="5" type="button" value="5" onClick={numero('5')} />
<input id="6" type="button" value="6" onClick={numero('6')} />
<input id="*" type="button" value="*" onClick={operar('*')} />
<input id="%" type="button" value="%" onClick={porcent} />
</p>
<p>
<input id="1" type="button" value="1" onClick={numero('1')} />
<input id="2" type="button" value="2" onClick={numero('2')} />
<input id="3" type="button" value="3" onClick={numero('3')} />
<input id="-" type="button" value="-" onClick={operar('-')} />
<input id="1/x" type="button" value="1/x" onClick={inve} />
</p>
<p>
<input id="0" type="button" value="0" onClick={numero('0')} />
<input id="x/-" type="button" value="+/-" onClick={opuesto} />
<input id="." type="button" value="." onClick={decimal} />
<input id="+" type="button" value="+" onClick={operar('+')} />
<input id="=" type="button" value="=" onClick={igualar}/>
</p>
</form>
</div>
      </>
  );
};
}
export default Calculadora;