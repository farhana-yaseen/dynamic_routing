import Link from "next/link"
import style from "../components/style.module.css"


export default function NavBar(){

    return(
        <div className={style.nav}>

        <Link className={style.data} href={"/"}>Home</Link> &nbsp;| &nbsp;
        <Link className={style.data} href={"/aboutus"}>About Us</Link> &nbsp;| &nbsp;
        <Link className={style.data} href={"/contactus"}>Contact Us</Link> &nbsp;| &nbsp;
        <Link className={style.data} href={"/country"}>country</Link>

        </div>
    )
} 