import style from "../../components/style.module.css"
import countries from "@/app/components/countries"
import Link from "next/link";
import Country from "../page";

export default function getCountriesData({params}:{params:{country_name:string}}){
        
        const countryData = countries.find((country) => country.name.toLowerCase() === params.country_name.toLowerCase()); 

        if(!countryData){
            return <h2>Page not Found</h2>
        }
    return(
        <>
        <div className={style.body}>

            <h1 className={style.heading}>{params.country_name}</h1>
            <br />
            <h3 className={style.data}>Country Name: &nbsp; {countryData?.name}</h3>
            <h3 className={style.data}>Population: &nbsp; {countryData?.population}</h3>
            <h3 className={style.data}>Capital: &nbsp; {countryData?.capital}</h3>
            <br />
            <br />
            <button className={style.button}><Link className={style.data} href={"/country"}>Back</Link></button>
        </div>
        </>
    
    )
    
}


