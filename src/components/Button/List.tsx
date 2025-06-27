const ButtonList: React.FC<React.PropsWithChildren> = ({children}) => (
    <div className="flex flex-col gap-2 sm:flex-row">{children}</div>
);

export default ButtonList;
