import Singleproduct from "./SingleProduct.js"

const ManyProducts = ({products, onDeleteMany, onToggleMany, onModify}) => {
    return(
        <>

            {products.map((product)=>(
                <Singleproduct 
                productUnique={product} 
                key={product.id} 
                onDelete={onDeleteMany} 
                onToggle={onToggleMany} 
                onModify={onModify} />
            ))}

        </>
    )
}

export default ManyProducts