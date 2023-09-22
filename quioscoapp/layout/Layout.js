import Head from "next/head";
import Sidebar from "../components/Sidebar"
import Modal from 'react-modal'
import useQuiosco from "../hooks/useQuiosco";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


export default function Layout({children, pagina}){

    const { modal } = useQuiosco()

    return(
        <>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quiosco Cafeteria" />
            </Head>

            <div className="md:flex">
                <aside className="md:w-5/12 xl:w-1/4 2xl:w-1/5" >
                    <Sidebar />
                </aside>
                <main className="md:w-7/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll" > 
                    <div className="p-10" >
                     {children}
                    </div>
                </main>    
            </div> 

            
                <Modal
                    isOpen={modal}
                    style={customStyles}

                >
                    <h1>Modal...</h1>
                </Modal>
            

        </>
    )
}