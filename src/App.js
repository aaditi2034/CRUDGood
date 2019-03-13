import React, {Component} from 'react';
import Header from './Header';
import DisplayArea from './DisplayArea';

class App extends Component{
    
    render(){
        return (
            <div className='container'>

                <Header />
                <DisplayArea />

            </div>
        );
    }
}

export default App;