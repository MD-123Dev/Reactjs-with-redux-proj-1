import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getProduits} from '../../store/actions/produitsActions'
import {deleteProduits} from '../../store/actions/produitsActions'


class DisplayProduit extends Component {

     componentDidMount(){
        this.props.getProduits();//**called actions for get data  */
    }

    onDeleteClick = id =>{
       //**  delete with id */
        this.props.deleteProduits(id);
    };

    render() {
        const { produits } = this.props;//**not this.states but props */
        return (
            <div>
               <table className="table">
                   <thead>
                       <tr>
                          
                           <th>Nom Produis</th>
                           <th>Qte</th>
                           <th>prix</th>
                           <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {produits.map(produit => (
                         <tr>
                          
                           <td>{ produit.name }</td>
                           <td>{ produit.Qte }</td>
                           <td>{ produit.prix }</td>
                           <td ><button className="btn btn-danger" onClick={this.onDeleteClick.bind(this,produit.id)}>Delete</button></td>
                       </tr>
                       ))}
                      
                       <tr>
                            
                           <td></td>
                           <td></td>
                       </tr>
                   </tbody>
               </table>
            </div>
        )
    }
}
 const mapStateToProps = (state) => {
            return {
                produits: state.produit.produits
            }
 }
export default connect(mapStateToProps,{ deleteProduits,getProduits })(DisplayProduit) ;