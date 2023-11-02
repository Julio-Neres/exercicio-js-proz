let elementoH1 =document.querySelector("h1");
elementoH1.innerText="Titulo do H1";

let link=document.querySelector("a");
link.innerText="Link da Proz";


let listadesordenada=document.querySelector("ul")
listadesordenada.innerHTML=` 
<li> Elemento de lista JS 01 </li>
<li> Elemento de lista JS 02 </li>
<li> Elemento de lista JS 03 </li>
`;

let lista=document.querySelector("ol")
lista.innerHTML=`

<ol>
<li><a href="https://www.vans.com.br/?gad_source=1&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5TGyiF9uXZrEKT1mnLyTsoE_Nl12knb6-7wzI3y0jujidDXrwsnu3RoClYkQAvD_BwE">Vans</a></li>
<li><a href="https://www.ophicina.com.br/?gad_source=1&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5VF47AgUvVWOaBBNWYnE9y3D6f2dfYRvsOuv1prrICcMKum7IEsz0RoCGzwQAvD_BwE">Ophicina </a></li>
<li><a href="https://app.becas-santander.com/pt-BR/program/bolsas-santander-estudos-santander-graduacao-2023">Becas Santander</a></li>
`;
