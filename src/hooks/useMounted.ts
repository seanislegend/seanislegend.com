import {useEffect, useState} from 'react';

// Returns false during SSR and the first client render, then true after mount.
// Use it to gate UI that depends on client-only values (e.g. usePathname under a
// rewrite) so the server and first client render always agree and React can hydrate.
const useMounted = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return mounted;
};

export default useMounted;
