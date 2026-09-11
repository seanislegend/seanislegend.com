export const submitToIndexNow = async (urls: (string | undefined)[]) => {
    const key = process.env.INDEXNOW_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_URL;
    const urlList = [...new Set(urls.filter(Boolean))] as string[];

    if (!key || !baseUrl || urlList.length === 0) return;

    try {
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify({
                host: new URL(baseUrl).host,
                key,
                keyLocation: `${baseUrl}/${key}.txt`,
                urlList
            })
        });

        if (!response.ok && process.env.NODE_ENV === 'development') {
            console.log(`IndexNow submission failed: ${response.status} ${await response.text()}`);
        }
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.log('IndexNow submission error', error);
        }
    }
};
