import React, { useState } from 'react';
import classes from './product.module.css';
import IconButton from '../../common/components/IconButton';
import { IoHeart, IoHeartOutline, IoLinkOutline } from 'react-icons/io5';
import Button from '../../common/components/Button';
import Input from '../../common/components/Input';
import { formatPriceEGP } from '../../utils/numbers';
import Layout from '../../common/containers/Layout';
import { useHistory, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as productsActions } from '../../store/products';
import { commerce } from '../../api/commerce';
import { actions as bagActions } from '../../store/bag';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const homepageURL = process.env.REACT_APP_HOMEPAGE as string;

const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id: paramsId } = useParams<{ id: string }>();

  let productIndex = useAppSelector(state =>
    state.products.data!.findIndex(product => product.id === paramsId),
  );

  productIndex = productIndex === -1 ? 0 : productIndex;

  const { id, name, description, imgSrcs, available, price } = useAppSelector(
    state => state.products.data![productIndex],
  );

  // app wide state
  const bag = useAppSelector(state => state.bag.data)!;
  const bagIsLoaded = useAppSelector(state => state.bag.status) === 'loaded';
  const quantityInBag =
    bag?.items.find(item => item.productId === id)?.quantity || 0;

  // local state
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [isAddingToBag, setIsAddingToBag] = useState(false);

  useEffect(() => {
    if (id !== paramsId) history.replace(`/products/${id}`);

    dispatch(productsActions.setSelectedProduct(id));

    return () => {
      dispatch(productsActions.setSelectedProduct(''));
    };
  }, [dispatch, id]);

  // Adding to favorite
  const [inFavorite, setInFavorite] = useState(
    Boolean(localStorage.getItem(`heart:${id}`)),
  );

  // Add to favorite listener
  useEffect(() => {
    const key = `heart:${id}`;
    const inLocalStorage = localStorage.getItem(key);

    if (inFavorite && !inLocalStorage) {
      localStorage.setItem(key, 'true');
    }

    if (!inFavorite && inLocalStorage) {
      localStorage.removeItem(key);
    }
  }, [inFavorite, id]);

  // Copy to clipboard
  const [isCopied, setIsCopied] = useState(false);

  return bagIsLoaded ? (
    <Layout>
      <main className={classes.main}>
        <div className={classes['imgs-container']}>
          {imgSrcs.map((imgSrc, index) => (
            <img
              className={`${classes.img} ${
                index === selectedImg && classes['img--selected']
              }`}
              onClick={() => setSelectedImg(index)}
              src={imgSrc}
              alt=""
            />
          ))}
        </div>
        <img
          className={classes['selected-img']}
          src={imgSrcs[selectedImg]}
          alt=""
        />
        <div className={classes.details}>
          <h1 className="header-1">{name}</h1>
          <h2 className="header-2">{formatPriceEGP(price)}</h2>
          <ul
            className={classes['description-list']}
            dangerouslySetInnerHTML={{ __html: description }}
          ></ul>
        </div>
        <div className={`${classes.actions} ${classes['actions--1']}`}>
          <IconButton
            variant="quaternary"
            onClick={() => setInFavorite(prev => !prev)}
          >
            {inFavorite ? (
              <IoHeart style={{ color: 'tomato' }} />
            ) : (
              <IoHeartOutline />
            )}
          </IconButton>
          <CopyToClipboard
            onCopy={() => setIsCopied(true)}
            text={`${homepageURL}/products/${id}`}
          >
            <IconButton variant="quaternary" onClick={() => {}}>
              <IoLinkOutline />
            </IconButton>
          </CopyToClipboard>
          {isCopied && <span className="txt-primary">Copied!</span>}
        </div>
        <div className={`${classes.actions} ${classes['actions--2']}`}>
          <Input
            type="number"
            value={quantity}
            onChange={e => setQuantity(+e.target.value)}
            min={0}
            max={available - quantityInBag}
          />
          <Button
            disabled={quantity === 0 || quantity + quantityInBag > available}
            isLoading={isAddingToBag}
            onClick={async () => {
              try {
                setIsAddingToBag(true);

                // add it to the cloud
                const request = await commerce.cart.add(id, quantity);

                // add it if it's not in the bag already
                const bagItem = bag.items.find(item => item.productId === id);

                if (!bagItem) {
                  dispatch(
                    bagActions.add({
                      id: request.line_item_id!,
                      productId: id,
                      quantity: quantity,
                      imgSrc: imgSrcs[0],
                      name: name,
                      available: available,
                      price: price,
                    }),
                  );
                }

                // increase the quantity if it's in the bag
                if (bagItem) {
                  dispatch(
                    bagActions.changeQuantity({
                      id: request.line_item_id,
                      change: quantity,
                    }),
                  );
                }

                // reset quantity to 0
                setQuantity(0);
              } catch (err) {
                alert(new Error('Something went wrong'));
              }
              setIsAddingToBag(false);
            }}
          >
            Add To Cart
          </Button>
        </div>
      </main>
    </Layout>
  ) : null;
};

export default Product;
