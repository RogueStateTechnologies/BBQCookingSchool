let json;

async function fetchJson()
{
    const response = await fetch("./assets/JSON/Text.JSON")
    const data = await response.json();
    json = await data;

}

fetchJson();