import BasicTable from "../components/BasicTable";

function Experience(){

    return(
        <>
        <div style={{marginTop: '100px', display:'flex', justifyContent: 'flex-start'}}>
        </div>
        <div>
            <BasicTable name="Languages." />
        </div>
        <div>
            <BasicTable name="Frameworks." />
        </div>
        <div>
            <BasicTable name="Something else." />
        </div>
        <div style={{height: '500px'}}></div>
        </>
    )
}

export default Experience;