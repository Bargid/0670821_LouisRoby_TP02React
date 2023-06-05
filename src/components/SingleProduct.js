import { FiTrash2 } from 'react-icons/fi'
import { FiEdit } from 'react-icons/fi'

const SingleProduct = ({productUnique, onDelete, onToggle, onModify}) => {
    return(

        <div className={`produit ${productUnique.reminder ? "reminder" : ""}`} onDoubleClick = {() => onToggle(productUnique.id)}>
            <div class="produit-tout">
                <div className="pourx">
                    <h3>{productUnique.title}</h3>
                    {/* <div class="delete"><FiTrash2 onClick = {() => onDelete(productUnique.id)}/></div> */}
                </div>
                <div class="produit-description">
                    <p>
                        {productUnique.description}
                    </p>
                </div>
                <div class="produit-info">
                    <p>Prix : {productUnique.price}</p>
                    <p>Catégorie : {productUnique.category}</p>
                </div>
            </div>

            <div class="modif-supprimer">
                <div class="delete">
                    <FiTrash2 onClick = {() => onDelete(productUnique.id)}/>
                </div>

                <div class="modifier">
                    <FiEdit onClick = {() => onModify(productUnique.id)}/>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct