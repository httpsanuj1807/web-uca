import { Header } from "./components/Header.jsx"
import ProductTable from "./components/ProductTable.jsx";
export function App(){



    return (

        <>

            <header>
                <Header title="My application title" />
            </header>
            <main>
                <ProductTable />
            </main>
            <footer></footer>

        </>

    );
}