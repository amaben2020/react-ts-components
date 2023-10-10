import './App.css';
import useCopyToClipboard from './components/clipboard/hooks/useCopyToClipboard';
import ProductCard from './components/component-pattern/compound-pattern';
import { data } from './components/component-pattern/compound-pattern/product-card/mock/data';
import withProductTitleAndPrice from './components/component-pattern/compound-pattern/product-card/with-product-title-and-price';
import CssCustomProperties from './components/css-custom-properties';
import Debounce from './components/debounce';
import { useDebounce } from './components/debounce/hook/useDebounce';
import MaskImage from './components/mask';
import Modal from './components/modal';
import CustomModal from './components/modal/custom-modal';
import useModal from './components/modal/hooks/useModal';
import { Comments } from './components/reusability/bad/comments';
import { Button } from './styles/tailwind/button';
import Button2 from './styles/tailwind/button/button2';
import ContainerQueries from './styles/tailwind/container-queries';
import { Works } from './styles/tailwind/dynamic-u-c/Works';
import InputUnstyleable from './styles/tailwind/input';
import { Layout } from './styles/tailwind/layout';
import { SpecialButton } from './styles/tailwind/merge';
import { Truncate } from './styles/truncate';
function App() {
  const { handleChange, value } = useDebounce();
  const { value: result, handleCopy } = useCopyToClipboard();

  const {state, handleIsOpen, handleIsClose} = useModal()

  return (
    <main>
      {value}
      <Debounce handleChange={handleChange} />
       
      <div
        style={{
          marginTop: 20,
          padding: 20,
          border: '1px solid red',
        }}
      >
        Bad:
        <Comments
          comments={[]}
          nextClicked={() => {}}
          previous={() => {}}
          itemClick={() => {}}
        />
      </div>

      <div>
        PASTED : {result}
        <button
          onClick={() =>
            handleCopy(
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusanda'
            )
          }
        >
          Copy Text
        </button>
      </div>

      <div>
        <Works />
        Merge:
        <SpecialButton className="p-3" />
        <Truncate />
        <InputUnstyleable />
        <ContainerQueries />
        <div>
          Class Variance Authority
          <Button intent="primary" size="medium">
            App Button
          </Button>
          <Button2 text="Button 2" className="border bg-green-500" />
          <div className="my-5 p-10">
            React compound component pattern:
            <ProductCard>
              <ProductCard.Image image={data.image} title={data.title} />
              {withProductTitleAndPrice(
                <ProductCard.Title title={data.title} />,
                <ProductCard.Price price={data.price} />
              )({
                style: {
                  border: '1px solid gold',
                  padding: 20,
                },
              })}

              <ProductCard.ProductCategoryAndBuyNow
                category={data.category}
                buyNowText="Buy Now"
              />

              <ProductCard.Description description={data.description} />
            </ProductCard>
          </div>
        </div>
      </div>

      <div>
        Custom Properties:
        <CssCustomProperties variable="NoSugar" />
      </div>

      <div>
        <Button2 className="buttonify" text="Hello" />
        <Button2 className="theme-swiss button--success" text="Hello" />
      </div>

      <div>
        <Layout />
      </div>

      <div>
        <MaskImage/>
      </div>

      {/* <div>

        <Posts/>
      </div> */}

      <div className='flex justify-around'>
      <button onClick={handleIsOpen}> {!state.isOpen ? "OPEN" : "CLOSE"}  </button>
      <button onClick={handleIsClose}> {state.isOpen ? "OPEN" : "CLOSE"}  </button>
      </div>

      <div>
        <Modal isOpen={state.isOpen}   handleClose={handleIsClose} />
      </div>


      <div className='border p-20 mt-20'>
      <button onClick={handleIsOpen}> {!state.isOpen ? "OPEN" : "CLOSE"}  </button>
        <CustomModal isOpen={true} handleClose={handleIsClose} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione error iusto. Voluptates ullam inventore nobis explicabo iste, nostrum asperiores deleniti quam odio expedita voluptatibus. Amet hic quia possimus mollitia.
        </CustomModal>
      </div>
    </main>
  );
}

export default App;
