import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModel from './OptionModal'
class IndecisionApp extends React.Component{
    state = {
        options : [],
        selectedOption : undefined
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
    handleDeleteOptions = ()=>{
        this.setState(()=>({options:[]}))
    }
    handleDeleteOption = (optionToRemove)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove !== option)
        }))

    }
    handleClearSelectedOption = ()=>{
        this.setState(()=>({selectedOption:undefined}))
    }
    handlePick = ()=>{
        const randomNum = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState((prevState)=>({
            selectedOption : option
        }))
    }
    handleAddOption = (option)=>{
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
            <div >
                <Header subtitle={app.subtitle}/>
                <div className="container">
                    <Action handlePick={this.handlePick}  hasOptions={this.state.options.length>0}/>
                    <div className="widget">
                        <Options handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} options={this.state.options}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                  
                </div>
                
                <OptionModel   selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options :[]
}
export default IndecisionApp