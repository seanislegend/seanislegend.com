import * as Slot from '@radix-ui/react-slot';

interface Props {
    asChild?: boolean;
    ref?: React.RefObject<HTMLDivElement>;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({asChild = false, children, ref}) => {
    const Comp = asChild ? Slot.Slot : 'div';

    return (
        <Comp className="mx-auto max-w-[90rem] px-4 md:px-8" ref={ref}>
            {children}
        </Comp>
    );
};

export default Container;
