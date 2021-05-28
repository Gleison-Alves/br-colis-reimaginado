function Tempo(props){
    console.log('> Passando pelo Frond-end;')
    const dataDynamic = new Date();
    const dataDynamicString = dataDynamic.toGMTString();
    return(
        <div>
            <div>{dataDynamicString} (dinâmico)</div>
            <div>{props.dataStaticString} (stático)</div>
        </div>
    )
}

export function getStaticProps(){
    console.log('> Passando pelo gerStaticProps();')
    const dataStatic = new Date();
    const dataStaticString = dataStatic.toGMTString();
    return{
        props: {
            dataDynamicString
        }
    }
}

export default Tempo