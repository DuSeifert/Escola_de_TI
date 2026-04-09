
import Sidebar from './profile components/components/Sidebar'
import Header from './profile components/Header'
import Review_card from './profile components/Review-card'


import './styles.css'

// TODO: Consertar o CSS da página (usar FLEX para melhorar o tamanho dos componentes)

export default function Profile(){

    return (
        <>

            <div className='container'>
                
                    <Sidebar />
                

                <div className='content'>

                    <Header/>

                    <h3 className='titulo'>My reviews</h3>

                    <div className='reviews'>

                        <Review_card/>
                        <Review_card/>

                    </div>


                </div>
                
            
            
            </div>        
        
        
        </>
    )

}

