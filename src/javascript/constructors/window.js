import {puffin} from '@mkenzo_8/puffin'
import WindowBody  from '../components/window/window'
import WindowBackground  from '../components/window/background'

function Window({
    component
}){
    const randomID = Math.random()
    const WindowComponent = puffin.element(`
        <div id="${randomID}" class="${puffin.style.css`
            &{
                min-height:100%;
                min-width:100%;
                position:fixed;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);

            }
        `}">
            <WindowBackground window="${randomID}"/>
            <WindowBody>
                <component/>
            </WindowBody>
        </div>
    `,{
        components:{
            WindowBody,
            WindowBackground,
            component
        }
    })

    return {
        launch:()=> launch(WindowComponent)
    }
}

function launch(WindowComponent){
    puffin.render(WindowComponent,document.getElementById("windows"))
}

export default Window