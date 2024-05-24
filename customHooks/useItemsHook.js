import {useState} from 'react';

const useItemsHook = init => {
  const [items, setItems] = useState(init);
  return [items, setItems];
};

export default useItemsHook;
