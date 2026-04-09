
import Bannerimg from '../../assets/Banner.jpg'

export default function Header(){
    return(

        <div className="header">
            <div className="banner">
                <img 
                    src = {Bannerimg} 
                    alt = ""
                />
            </div>
                
            <div className="profile-info">

                <div className="avatar">👤</div>
                <h2>Nome do usuário</h2>

            </div>

        </div>

    );

}