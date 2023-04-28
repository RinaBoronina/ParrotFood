import React, { useEffect, useState } from 'react';
import ProductView from '../../components/ProductView/ProductView';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../utils/api';

const PageProduct = () => {
    const [productInfo, setProductInfo] = useState({});
    const { id } = useParams();
    useEffect(() => {
        getOneProduct(id).then((data) => setProductInfo(data));
    }, [id]);

    return (
        <div>
            <ProductView productInfo={productInfo} />
        </div>
    );
};

export default PageProduct;
