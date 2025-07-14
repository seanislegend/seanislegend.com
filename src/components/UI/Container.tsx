import * as Slot from '@radix-ui/react-slot';
import clsx from 'clsx';

interface Props {
    asChild?: boolean;
    className?: string;
    ref?: React.RefObject<HTMLDivElement>;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({
    asChild = false,
    children,
    className,
    ref,
    ...props
}) => {
    const Comp = asChild ? Slot.Slot : 'div';

    return (
        <Comp
            {...props}
            className={clsx('mx-auto max-w-[90rem] px-4 md:px-8', className)}
            ref={ref}
        >
            {children}
        </Comp>
    );
};

export default Container;
