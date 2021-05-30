import React, { Component } from 'react'
import {addProduits} from '../../store/actions/produitsActions'
import { connect } from 'react-redux';
import {v4 as uuidv4}  from 'uuid';

class AddProduits extends Component {

    state =  {
           
           name:'',
           prix:null,
           Qte:null
    };

   submit = e => {
       
       e.preventDefault();

       const {name, prix, Qte} = this.state; 

       const newProduit = {
           id: uuidv4(),
           name,
           prix,
           Qte
       };
       
       this.props.addProduits(newProduit);

     

       this.setState({
           name:'',
           prix:null,
           Qte:null
       });
      

     
   }

   onChangeInput =  e => this.setState({ [e.target.name]: e.target.value});

    render() {
        const {name, prix, Qte} = this.state;
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                      <label for="Nom Produits"></label>
                      <input htmlType="text" name="name" id="" className="form-control" placeholder="Nom Produits" defaultValue={name}  onChange={this.onChangeInput} />
                     
                    </div>

                     <div className="form-group">
                      <label for="">Prix </label>
                      <input htmlType="text" name="prix" id="" className="form-control" placeholder="Prix" defaultValue={prix} onChange={this.onChangeInput} />
                     
                    </div>

                     <div className="form-group">
                      <label for="">Qte</label>
                      <input htmlType="text" name="Qte" id="" className="form-control" placeholder="Qte" defaultValue={Qte} onChange={this.onChangeInput} />
                     
                    </div>
                    <button htmlType="submit" className="btn btn-primary" >Save</button>
                </form>
            </div>
        )

      
    }
    
}
 

export default  connect(null,{ addProduits })(AddProduits);