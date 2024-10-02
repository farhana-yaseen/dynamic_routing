
import Link from "next/link";
import countries from "../components/countries"
import style from "../components/style.module.css";

export default function Country() {

    return (
        <div className={style.body}>
            <h1 className={style.list}>Country Names</h1>

            <ul>
                {countries.map((item) =>{
                    return( 
                <li className={style.list}>
                    <Link className={style.data} href={`/country/${item.name}`}>{item.name}
                    </Link>
                </li>)
                })
            }
            </ul>
            
           
        </div>
    
    )
}