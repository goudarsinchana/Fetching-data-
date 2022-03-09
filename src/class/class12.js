import React, { Component } from "react";
import axios from "axios";


class Myclass12 extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      newcrust: [],
      newflavor: [],
      neworderid: [],
      message:"",
      userid:0,
     
    };  
  }
  
  getUser = () => {
    axios.get("https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza").then((response) => {
      this.setState({ user: response.data });
    });
  };
  picName = (obj) => {
    this.setState({ newcrust: obj.target.value });
  };
 
  picCity = (obj) => {
    this.setState({ newflavor: obj.target.value });
  };
 
  picMobile = (obj) => {
    this.setState({ neworderid: obj.target.value });
  };



 
  save = () => {
    var newuser = {
      crust: this.state.newcrust,
      flavor: this.state.newflavor,
      order: this.state.neworderid,
    };

    if(this.state.userid >0){
      var apiurl = "https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza/"+this.state.userid;
      axios.put(apiurl, newuser)
      .then(response=>{
          this.setState({
              message:this.state.newcrust + " Updated Successfully !",
              newcrust:"",
              newflavor:"",
              neworderid:"",
              userid:0
          })
          this.getUser(); // reload the list after update
      })
    }else{
    var apiurl = "https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza";
    axios.post(apiurl, newuser)
        .then(response => {
            this.setState({
                message:this.state.newcrust + "Your order Saved Successfully !",
                newcrust:"",
                newflavor:"",
                neworderid:""
            })
            this.getUser(); // after adding new record list should reload
        })
    }// else end here
  };
// 
  

deleteUser=(userid, newuser)=>{
  // alert(userid)
  var apiurl = "https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza/"+userid;
  axios.delete(apiurl)
  .then(response=>{
    this.setState({message: "Order  Deleted Successfully"})
    this.getUser();
  })
}


editUser = (index) =>{
  alert(index);
    this.setState({
              newcrust:this.state.user[index].crust, 
              newflavor:this.state.user[index].Flavor,
              neworderid:this.state.user[index].order,
              userid:this.state.user[index].id
          })
}


  componentDidMount() {
    this.getUser();
  }
 
  render() {
    return (
      
      <div className="container m-5 ">
        <div className="row ">
        <h3 className="text-center m-2">Total User Records:- {this.state.user.length}</h3>
        <h4 className="text-success">{this.state.message}</h4>
        <div className="col-lg-8 text-end">
              <div className="btn-group">
              <button type="button" className="btn btn-success pe-4 ps-4 m-5" data-toggle="modal" data-target="#exampleModal"><i className="fa fa-shopping-cart "></i>
                Add your pizza
              </button>
            </div>
        </div>
          <div className="col-lg-3"> 
               <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header bg-danger">
            <h5 className="modal-title" id="exampleModalLabel">Add Pizza</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body bg-light">
                {/* <!-- ---------Form Goes Here----------- --> */}
              <form id="add-piza-Form">
                    {/* <!-- -------Crust----------- --> */}
                 <div className="form-group">
                     <select id="add-crust" className="form-select" required onChange={this.picCrust}
                      value={this.state.newcrust}>
                       <option>Select Crust</option>
                  <option >Classic</option>
                  <option >Cheese</option>
                </select>
              </div>
                {/* <!-- --------Flavor---------- --> */}
              <div className="form-group mt-4">
                <select id="add-flavor" className="form-select" required  onChange={this.picFlavor}
                  value={this.state.newflavor}>
                  <option >Select Flavor</option>
                  <option>Cheese</option>
                  <option >Veggie</option>
                  <option >Peperoni</option>
                  <option >Meta</option>
                  <option >Margherita</option>
                </select>
              </div>
                {/* <!-- --------Table---------- --> */}
              <div className="form-group mt-4">
                <select id="add-table" className="form-select" required onChange={this.picOrder}
                  value={this.state.neworderid}>
                  <option >Select Table</option>
                  <option >1</option>
                  <option >2</option>
                  <option >3</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
                {/* <!-- ------------------ --> */}
                <div className="row">
              <div className="col-lg-12 text-center">
                <button className="btn btn-primary" onClick={this.save}>
                  Save User
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
        </div>
        </div>

         

          <div className="col-lg-12">
            <table className="table table-bordered shadow">
              <thead className="bg-warning">
                <tr>
                  <th>User ID</th>
                  <th>Full Name</th>
                  <th>City</th>
                  <th>Mobile</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {this.state.user.map((info, index) => {
                  return (
                    <tr key={index}>
                      <td>{info.id}</td>
                      <td>{info.Crust}</td>
                      <td>{info.Flavor}</td>
                      <td>{info.Order_ID}</td>
                      <td>
                        <button className="btn btn-danger" 
                        onClick={this.deleteUser.bind(this, info.id, info.name)}>Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
       </div>
     </div>
    );
  }
}

export default Myclass12;