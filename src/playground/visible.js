console.log("App.js is running")
const appRoot  = document.getElementById('app')
class VisibilityToogle extends React.Component{
    constructor(props){
        super(props)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.state = {
            visibility: true
        }
    }
    handleBtnClick(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toogle</h1>
                {this.state.visibility ? <button onClick={this.handleBtnClick}>Hide details</button> : <button onClick={this.handleBtnClick}>Show details</button> }
                {this.state.visibility && <p>This is a super secret message </p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToogle />,appRoot)
/*
let visible = false
const change = ()=>{
    visible=!visible
    render()
}
const render = ()=>{
    const template = (
        <div>
            <h1>Visibility Toogle</h1>
            {visible ? <button onClick={change}>Hide details</button> : <button onClick={change}>Show details</button> }
            {visible && <p>This is a super secret message </p>}
        </div>
    )
    ReactDOM.render(template,appRoot)
}
render()
*/