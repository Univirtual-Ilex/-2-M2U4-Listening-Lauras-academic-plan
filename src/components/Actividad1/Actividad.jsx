import React, {useRef, useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import ButtonAudio from '../ButtonAudio'
import ButtonUi from '../ButtonControlUI'
import Modal from '../Generales/Modal'
import ButtonCheck from '../ButtonCheck'
import {ICol, IRow} from '../Grid'
import ButtonRadio from '../ButtonRadio'
// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
// import interaction from './Actividad_interactions'
import Tooltip from '../Tooltip'

import Data from './Actividad_data'
import PreguntaTF from '../PreguntaTF'


const Actividad_base = ({staticContext, ...props}) => {
    
    const [modalFlag, setModal] = useState(false)
    const [passed, setPassed] = useState(false)
    const [tooltip1, setTooltip1] = useState(false)
    const [tooltip2, setTooltip2] = useState(false)


    const setChecked = (id, button) => {
        const data = Data[id]

        if(button === 0 && data.answer === 'true'){
            data.right = 1
        }else if(button === 1 && data.answer === 'false'){
            data.right = 1
        }else if(button === 2 && data.answer === 'na'){
            data.right = 1
        }else{
            data.right = 0
        }
    }

    const checkActivity = () => {
        var count = 0;
        var right = 0;
        Data.map((data) => {
            if(data.right === 1){
                count ++
                right ++
            }else{
                setPassed(false)
                count ++
            }

            if(right === Data.length){
                setPassed(true)
                setModal(true)
            }else if(count === Data.length){
                setModal(true)
            }
        })
    }

    const list = Data.map((data, i) => {
        return (
            <IRow justify={'center'} className="inline_list" py={0.2} key={i} valign="center" >
                    <ICol w={52}> 
                        <p> <strong> {i + 1}. </strong> {data.text} </p>
                    </ICol>
                    <IRow w={35} gutters={0.2}>
                        <ButtonRadio setCheckedState={setChecked} arrId={i} buttonId={0} nameb={'radio_button' + i} text={'TRUE'} />
                        <ButtonRadio setCheckedState={setChecked} arrId={i} buttonId={1} nameb={'radio_button' + i} text={'FALSE'} />
                        <ButtonRadio setCheckedState={setChecked} arrId={i} buttonId={2} nameb={'radio_button' + i} text={'N/M'} />
                    </IRow>
            </IRow>
            )
    })
 
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={40} w={72}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Click on the button to listen the audio, then answer' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.reload()} } />
            </UiButtonsContainer>
            
          
            <IRow pt={2} w={80} justify="center" align="center">
                <MainTitle color={Ilex.violeta2} size={1.3}>
                    LISTEN THE AUDIO, THEN ANSWER IF THE SENTENCES ARE TRUE FALSE OR NOT MENTIONED
                </MainTitle>
            </IRow>
            <IRow pt={4} w={95} align="center" justify="center" >
                <IRow w={62} className="list">
                    {list}
                </IRow>
                <ICol w={20} mt={3.5}>
                    <IRow justify="space-between" className="alg-r">
                        <ButtonAudio src="./media/27-Listening-Activity-Laura.mp3">
                            <ICol className="person" > 
                                <div className="text1 person-container">
                                </div>  
                            </ICol>
                        </ButtonAudio>
                    </IRow>
                </ICol>

            </IRow>
            <IRow pt={6.8} >
                <ICol pt={1} onClick={checkActivity} ><ButtonCheck /></ICol>
            </IRow>
            <PreguntaTF visibility={modalFlag}  answers={Data} passed={passed} repeatUrl={'/#/actividad1'} finished={passed} />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad