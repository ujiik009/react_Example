import React ,{Component} from "react"
import './App.css'
class Header extends Component {
	render(){

		let {currentUser , isLoggedIn} = this.props
		currentUser = "Logged in as "+currentUser

		return(
			<div>
				<div className="App-header" onClick={()=>{alert(555)}}>
					React App 
					<div id="user"> {(isLoggedIn) ? currentUser : ""} </div>
				</div>
				
			</div>
		)
	}
}

export default Header;