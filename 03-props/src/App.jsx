import Card from "./components/Card"

const App = () => {
  return (
    <div className="parent">

      <Card user='John Doe' age={19} img='https://plus.unsplash.com/premium_photo-1754068211025-c06675711a3d?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Jane Smith' age={25} img='https://plus.unsplash.com/premium_photo-1789029166431-7687436854f1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Bob Johnson' age={30} img='https://images.unsplash.com/photo-1785403241855-f887b4eecf31?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

    </div>
  )
}

export default App