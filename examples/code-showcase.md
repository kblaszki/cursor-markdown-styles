
## Porownanie: przed / po refaktorze
**Przed:**
```js
function getData(id) {
  return fetch("/api/" + id).then((r) => r.json());
}
```
**Po:**
```js
async function getData(id) {
  const response = await fetch(`/api/${id}`);
  if (!response.ok) throw new Error("Request failed");
  return response.json();
}
```
## Blok bez jezyka
```
POST /api/v1/tasks
Content-Type: application/json
{
  "title": "Nowe zadanie",
  "priority": "high"
}
```