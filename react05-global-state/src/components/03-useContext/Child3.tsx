import { useContext } from 'react';
import { ToggleContext } from './CommonContext';

const Child4 = () => {
    const context = useContext(ToggleContext)
        if(!context){
            throw new Error('ToggleContext null')
        }
    
        const {toggle} = context
    
        return (
            <div>
                <button className='border px-4' onClick={toggle}>isOn 변경</button>
            </div>
        );
};



const Child3 = () => {
  // isOn 가져오기
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error("ToggleContext null");
  }

  const { isOn } = context;

  return (
    <div>
      <Child4 />
      <p>{isOn ? 'on':'off'}</p>
    </div>
  );
};


export default Child3;