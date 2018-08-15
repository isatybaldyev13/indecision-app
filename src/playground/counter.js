let appRoot =  document.getElementById("app")

//Counter with state
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleminusOne = this.handleminusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count : props.count
        }
    }
    handleminusOne(){
        this.setState((prevState)=>{
            return{
                count : prevState.count-1
            }
        })
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return{
                count : prevState.count+1
            }
        })
    }
    handleReset(){
        this.setState((prevState)=>{
            return{
                count : 0
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+</button>
                <button onClick={this.handleminusOne}>-</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
Counter.defaultProps = {
    count : 0
}
ReactDOM.render(<Counter />,appRoot)

//Counter without state
/*
const render = ()=>{
    let template = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+</button>
            <button onClick={minusOne}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    ReactDOM.render(template,appRoot)
}
const addOne = ()=>{
    count++
    render()
}
const minusOne = ()=>{
    count--
    render()
}
const reset = ()=>{
    count = 0
    render()
}


render()
*/