import './app.css'

export function App() {

  function Login(isLogged: boolean): void {
    if (isLogged) {
      console.log("Ban da dang nhap thanh cong!");
    } else {
      console.log("Ban chua dang nhap!");
    }
  }
  
  return (
    <>
      <button onClick={() => Login(true)}>Dang nhap</button>
    </>
  )
}
