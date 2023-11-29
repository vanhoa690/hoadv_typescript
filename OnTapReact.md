## React
- useState<type> : [name, setName] = useState('') : luu du lieu
- useEffect: (() => {
    - call api
    - set state
},[dep])  : lay du lieu tu api va cap nhat state

## Route: App.tsx
- Khai Route tuong ung page code

## Login
- UI: tailwind internet
- khai bao state: luu tru email, password
- handleChangeForm: 
- input (value - state ; onChange: handleChangeForm)
- handleSubmit : truyen form: onSubmit={handleSubmit}
    - call api axios.post(api_url, {email, password})
    - try catch 
        - OK: luu token, navigate ('admin')
        - catch Error: show error, fix bug, ghep api

## CRUD Product
## Admin Product List
- UI
- State: luu tru List
- useEffect: call api, set state
- List => map UI, button: Edit, Remove
- Remove: handleRemoveProduct(productID) -> onClick
- Confirm: OK
- try catch: 
- OK:call lai api list (# ko can dung filter)
- Catch error: fix bug

## Add Product
- UI: Form
- khai bao state: luu tru (thong tin product: ten, gia)
- handleChangeForm: 
- input (value - state ; onChange: handleChangeForm)
- handleSubmit : truyen form: onSubmit={handleSubmit}
    - call api axios.post(api_url, { ten, gia product})
    - try catch: 
    - OK: naviage ( product list)
    - Catch error: fix bug

## Edit Product
- UI: Form
- khai bao state: luu tru (thong tin product: ten, gia)
- ## Call api: product Detail -> set state: ten: abc, gia: xxx
- handleChangeForm: 
- input (value - state ; onChange: handleChangeForm)
- handleSubmit : truyen form: onSubmit={handleSubmit}
    - call api axios.put(api_url, { ten, gia product})
    - try catch: 
    - OK: naviage ( product list)
    - Catch error: fix bug