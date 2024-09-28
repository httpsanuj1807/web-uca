import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";



export function Layout({children}){


    return (

        <>
        <Header title="My Header"/>
        {children}
        <Footer />
        </>
    )

}