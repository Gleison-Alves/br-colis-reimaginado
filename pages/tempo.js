function tempo(props){
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
    const dataStatic = new Date();
    const dataStaticString = dataStatic.toGMTString();
    return{
        props: {
            dataDynamicString
        }
    }
}

export default tempo;