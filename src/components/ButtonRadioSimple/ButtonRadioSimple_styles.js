import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: block;
position: relative;

.container {
  position: relative;
  cursor: pointer;
  height: auto;
  display: flex;
  position: relative;



    input {
        opacity:0;
        position: absolute;
    }
    .checkmark::before{
        content: '';
        width:1em;
        height:1em;
        border-radius:100%;
        margin-left: -2.5em;
        display: block;
        border: 0.2em solid ${Ilex.color_rosa_radios};
        position: absolute;
        top:0;
    }
    input:checked ~ .checkmark::after{
        content:'';
        width:1em;
        height:1em;
        border-radius:100%;
        display: block;
        border: 0.2em solid #fff;
        background-color: ${Ilex.color_rosa_radios};
        position: absolute;
        top:0;
        left:0;
        transform: scale(0.8)
    }
  
}
.container input {
  cursor: pointer;
  position: absolute;
}
.checkmark {
  top: 0;
  margin-left: 2em;
  line-height: 1;
  text-align: center;
  display: inline-block;
  width: auto;
  padding: 0.5em;
  color: ${Ilex.textos};
}



/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
`

export default styles
    