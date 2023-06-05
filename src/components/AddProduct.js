import { useState } from 'react'

const AddProduct = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (!title) {
          alert('Please, add a Product!');
          return;
        }
    
        onAdd({ title, price, category, description });
        setTitle('');
        setPrice('');
        setCategory('');
        setDescription('');
      };

    return(
        <form class="add-form" onSubmit={onSubmit}>
            <div class="complete-form">
                <div class="left-form">
                    <div class="produit-box">
                        <label for="produit">Produit : </label>
                        <input id="produit" type="text" placeholder="Ajoutez le nom du Produit..." value={title} onChange={(evt) => setTitle(evt.target.value)}/>
                    </div>
                    <div class="prix-box">
                        <label for="prix" >Prix : </label>
                        <input id="prix" type="text" placeholder="Ajoute un Prix..." value={price} onChange={(evt) => setPrice(evt.target.value)}/>
                    </div>
                    <div class="category-box">
                    <label for="category">Catégorie : </label>
                        <input id="category" type="text" placeholder="Ajoute une Catégorie..." value={category} onChange={(evt) => setCategory(evt.target.value)}/>
                    </div>
                </div>

                <div class="description-box">
                    <label for="description">Description</label>
                    <div class="textarea-wrapper">
                        <textarea rows="4" cols="40" id="description" placeholder="Ajoutez une Description..." value={description} onChange={(evt) => setDescription(evt.target.value)}/>
                    </div>
                </div>
            </div>


            <input type="submit" class="button-ajouter" value="Ajouter le Produit"/>
        </form>
    )
}

export default AddProduct