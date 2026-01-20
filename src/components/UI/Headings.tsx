export const Heading1: React.FC<React.PropsWithChildren> = ({children}) => (
    <h1 className="text-title-text max-w-5xl space-x-2 text-2xl leading-tight font-medium text-balance break-normal uppercase underline-offset-4 group-hover:underline md:text-3xl md:leading-tight lg:text-4xl">
        <span>{children}</span>
    </h1>
);

export const Heading2: React.FC<React.PropsWithChildren> = ({children}) => (
    <h2 className="text-title-text max-w-5xl space-x-2 text-xl leading-tight font-medium text-balance break-normal uppercase underline-offset-4 group-hover:underline md:leading-tight lg:text-2xl">
        {children}
    </h2>
);

export const Heading3: React.FC<React.PropsWithChildren> = ({children}) => (
    <h3 className="text-title-text max-w-5xl space-x-2 text-xl leading-tight font-medium text-balance break-normal uppercase underline-offset-4 group-hover:underline md:leading-tight lg:text-2xl">
        {children}
    </h3>
);

export const Heading4: React.FC<React.PropsWithChildren> = ({children}) => (
    <h4 className="text-title-text mb-1 text-sm leading-tight font-medium font-semibold text-balance break-normal uppercase md:leading-tight">
        {children}
    </h4>
);
