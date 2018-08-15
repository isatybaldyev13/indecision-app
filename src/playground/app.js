console.log("App.js is running")
const appRoot  = document.getElementById('app')

/*
const deleteAll = ()=>{
    app.options = []
    render()
}
const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random()*app.options.length)
    const option = app.options[randomNum]
    console.log(randomNum)  
}
const render = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here is your options' : 'No options'}</p>
            <ol>
                {
                    app.options.map((option)=><li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button >Add option</button> 
            </form>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do ?</button>
            <button onClick={deleteAll}>Delete all</button>
        </div>
    )
    ReactDOM.render(template,appRoot)
}
const onFormSubmit = (e)=>{
    e.preventDefault()   
    const option = e.target.elements.option.value
    if(option){
        app.options.push(option)
        e.target.elements.option.value=''
        render()
    }
}
render()
*/

class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options : props.options
        }
    }

    //React component lifecycle functions
    componentDidMount(){
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            if(options){
                this.setState(()=>({options}))
            }
        } catch (error) {
            
        }
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
        console.log('Component did update')
    }
    componentWillUnmount(){

        console.log('Component will unmount ')
    }
    // End functions
    handleDeleteOptions(){
        this.setState(()=>({options:[]}))
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove !== option)
        }))

    }
    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length)
        alert(this.state.options[randomNum])
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'

        }else if(this.state.options.indexOf(option)>-1){
            return 'This option already exists'
        }
        this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }
    render(){
        const app = {
            title : "Indecision app",
            subtitle : "Put your life in hand of pc"
        }
        return (
            <div>
                <Header subtitle={app.subtitle}/>
                <Action handlePick={this.handlePick}  hasOptions={this.state.options.length>0}/>
                <Options handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} options={this.state.options}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options :[]
}
const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
    )
}
Header.defaultProps = {
    title : 'Indecision app test'
}
const Action = (props)=>{
    return(
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>
                What should I do ?
            </button>
        </div>
    )
}
const Options = (props)=>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started </p>}
            {props.options.map((option)=>(
                <Option optionText={option} handleDeleteOption={props.handleDeleteOption} key={option} />
            ))}
        </div>
    )
}
const Option = (props)=>{
    return(
        <div >{props.optionText} 
            <button onClick={(e)=>{
                props.handleDeleteOption(props.optionText)
            }}>
                remove
            </button>
        </div>
    )
}
class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error : undefined
        }

    }
    handleAddOption(e){
        e.preventDefault() 
        const option = e.target.elements.option.value.trim()
        const error =  this.props.handleAddOption(option)
        this.setState(()=>({error}))
        if(!error){  
            e.target.elements.option.value=''
        }
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button >Add option</button> 
                </form>
            </div>
        )
    }
}

/*
const User = (props)=>{
    return (
        <div>
            <p>Name : {props.name}</p> 
            <p>Age : {props.age}</p> 
        </div>
    )
}*/
ReactDOM.render(<IndecisionApp />,appRoot)





