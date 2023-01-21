import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

type OffCanvasContextData = ReturnType<typeof useProvideOffCanvasContext>;

const OffCanvasContext = createContext({} as OffCanvasContextData);

export const OffCanvasProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useProvideOffCanvasContext();

  return (
    <OffCanvasContext.Provider value={value}>
      {children}
    </OffCanvasContext.Provider>
  );
};

export const useOffCanvas = () => {
  return useContext(OffCanvasContext);
};

const useProvideOffCanvasContext = () => {
  const [isOpen, setOpen] = useState(false);
  return { isOpen, setOpen };
};
