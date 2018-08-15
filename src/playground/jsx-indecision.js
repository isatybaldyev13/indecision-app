class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in hand of pc</h2>
            </div>
        )
    }

}
class Action extends React.Component{
    render(){
        return(
            <div>
                <button>What should I do ?</button>
            </div>
        )
    }
}
class Options extends React.Component{
    render(){
        return  <ol>Options</ol>
    }
}
class AddOption extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button >Add option</button> 
                </form>
            </div>
        )
    }
}


const jsx =(
    <div>
        <h1>Title</h1>
        <Header/>
    </div>
)
ReactDOM.render(jsx,document.getElementById('app'))