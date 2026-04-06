
import Sidebar from '../components/Sidebar'
import Header from './profile components/Header'
import Review_card from './profile components/Review-card'


import './styles.css'


export default function Profile(){

    return (
        <>

            <div className='container'>
                <Sidebar/>

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

