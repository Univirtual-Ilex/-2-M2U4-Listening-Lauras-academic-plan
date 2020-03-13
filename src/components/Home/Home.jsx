import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import {ButtonLink} from '../ButtonX'
import estilos_home from './Home_styles'
import {ICol} from '../Grid'



const Home_base = function ({ staticContext, ...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png">

                    <div className='bloque-izquierdo'>
                        <div className='bloque-izquierdo-container'>
                            <h1> Laura’s Academic plans </h1>
                            <p>
                            Listen carefully to Laura's audio, then answer if the statements are true, false or not mentioned
                           </p>
                            <ButtonLink to='/actividad1'>Start</ButtonLink>
                        </div>
                    </div>
                    <ICol className='bloque-derecho'>
                        <figure>
                            <img src='./src/cover.png' alt='Logo' />    
                        </figure>

                    </ICol>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home