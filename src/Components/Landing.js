import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import "../Layouts/Login.css";
import Gurukrupa from '../images/gurukrupa-logo.png';
import {
    BrowserRouter as  Link
  } from "react-router-dom";

class Landing extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password:'',
            redirect:false
                  }
      
              this.update = this.update.bind(this);
      
          this.displayLogin = this.displayLogin.bind(this);
      
          this.submit=this.submit.bind(this);
      
          this.updatenow=this.updatenow.bind(this);
    }

  
    update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
  }
 
  
  updatenow(e) {
		let value = e.target.value;
		this.setState({
			"password": value
		});
	}


	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
      fullname: '',
      address:'',
      age:'',
			email: '',
			password: ''
		});
	}



 submit=event=>{{/*
   const user={
      email:this.state.email,
      password:this.state.password
    }
  
    axios
      .post(`http://localhost:5000/api/Login`,{user})
      .then(res =>{
        if(res.status===200){

          this.setState({redirect:true});

          }
      }) */}
    event.preventDefault();
    this.setState({redirect:true});

  }



    render(){
        return(
            <div >
            <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Gurukrupa</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

        <div><img className="image" src={Gurukrupa}  ></img></div>    

      <div className="authBox">
      <div className="leftBox">
                    <div className="bgGreen"></div>
                    <div className="imageAuth"></div>
                    <div className="imageText">helllllo</div>
                    <div className="imageText">Hellllllllo</div>

        </div>
      
            <form  onSubmit={this.submit}>
             <div className="rightBox">
              <div className="box">
              <div className="titleBox">Login into System</div>
                <div className="inputBox">
                <input className="inputS" type="email" placeholder="Email"  value={this.state.email} name="email" onChange={this.update} style={{width:"300px",height:"35px"}}></input>
                </div>
                
                <div className="inputBox">
                <input className="inputS" type="password" placeholder="password"  value={this.state.password} name="password " onChange={this.updatenow} style={{width:"300px",height:"35px"}}></input>
                </div>
              
                <nav><Link to="/Main" className="active"> <button type="submit" className="btnAuth">Log In </button></Link></nav>
              
                </div>
              </div>
            </form>
      </div> 
            
      
            
            </div>

            
        )
    }
}

export default Landing;