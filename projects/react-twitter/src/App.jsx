import'./App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) =>`@${userName}`

    return(
        <section className='App'>
            <TwitterFollowCard 
             formatUserName={formatUserName} 
             
             userName="midudev" 
             name="Miguel Angel"
             />

            <TwitterFollowCard
                formatUserName={formatUserName}
             
                userName="MartinnnQ"
                name="Martin_023"
             />
             
            <TwitterFollowCard 
                formatUserName={formatUserName}
               
                userName="pheralb" 
                name="Pablito"
            />
        </section>
    )
    
}