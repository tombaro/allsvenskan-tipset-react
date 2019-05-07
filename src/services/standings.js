export async function getStandings() {
    const res = await fetch('https://allsvenskan-api.herokuapp.com/as', options);
    const json = await checkStatus(res);
    return parseJson(json);
}

const options = {
    // method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "text/html",
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    // redirect: "follow", // manual, *follow, error
    // referrer: "no-referrer", // no-referrer, *client
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
};

const checkStatus = res => {
    if (res.status >= 200 && res.status < 500) {
        return res;
    } else {
        throw new Error('Could not compute');
    }
};

const parseJson = res => res.json();
